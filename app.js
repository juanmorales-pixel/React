const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())

const API = "https://hallownest-api.vercel.app/api/v1"
const tipos = ["boss", "character", "area", "charm", "skill"]

// ---------- Traducción al español ----------
const cache = new Map()
// Campos que NO se traducen (identificadores, enlaces, ids)
const noTraducir = ["slug", "id", "_id", "image", "img", "icon", "url", "link", "wiki", "spotifyTrackId"]

const { nombres, terminos } = require("./glosario")
const jefes = require("./src/Data/Galeria.json")
const claves = Object.keys(nombres).sort((a, b) => b.length - a.length)

// Cambia cada nombre del juego por una marca (XQ0X, XQ1X...) y luego la devuelve en español
function proteger(texto) {
    let salida = texto
    claves.forEach((nombre, i) => {
        salida = salida.replace(new RegExp("\\b" + nombre + "\\b", "g"), "XQ" + i + "X")
    })
    return salida
}
function restaurar(texto) {
    return texto.replace(/XQ\s?(\d+)\s?X/gi, (m, i) => nombres[claves[i]] || m)
}

// Los jefes usan siempre el nombre en español de Galeria.json
function nombreJefe(item) {
    const jefe = jefes.find((j) => j.imagenG === item.slug)
    return jefe ? { ...item, name: jefe.tituloG } : item
}

// Aplica el glosario conservando mayúscula inicial y plural
function aplicarGlosario(texto) {
    let salida = texto
    for (const [patron, palabra] of terminos) {
        salida = salida.replace(patron, (m) => {
            const plural = /s$|ones$/i.test(m) ? "s" : ""
            const nueva = palabra + plural
            return m[0] === m[0].toUpperCase() ? nueva[0].toUpperCase() + nueva.slice(1) : nueva
        })
    }
    // "vasija" es femenino: corrige el adjetivo ("vasija roto" -> "vasija rota")
    salida = salida.replace(/\b(vasijas?) (roto|puro|vac[ií]o|perdido|infectado|antiguo|sagrado)(s?)\b/gi, (m, v, adj, pl) => {
        return v + " " + adj.slice(0, -1) + "a" + pl
    })
    // "vasija" es femenino: corrige el artículo que dejó la traducción ("el vaso" -> "la vasija")
    const articulos = { del: "de la", al: "a la", el: "la", los: "las", un: "una", unos: "unas" }
    return salida.replace(/\b(del|al|el|los|unos|un) (vasijas?)\b/gi, (m, art, v) => {
        const nuevo = articulos[art.toLowerCase()] + " " + v
        return art[0] === art[0].toUpperCase() ? nuevo[0].toUpperCase() + nuevo.slice(1) : nuevo
    })
}

// Traduce un texto de inglés a español (guarda el resultado para no repetir peticiones)
async function traducirTexto(texto) {
    if (!texto.trim() || /^https?:\/\//.test(texto) || /^[\d\s.,:+-]+$/.test(texto)) return texto
    if (cache.has(texto)) return cache.get(texto)
    try {
        const url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=es&dt=t&q=" + encodeURIComponent(proteger(texto))
        const data = await (await fetch(url)).json()
        const traducido = aplicarGlosario(restaurar(data[0].map((parte) => parte[0]).join("")))
        cache.set(texto, traducido)
        return traducido
    } catch (error) {
        return texto
    }
}

// Recorre cualquier JSON y traduce todos los textos (menos los campos de noTraducir)
async function traducir(valor, clave) {
    if (typeof valor === "string") return noTraducir.includes(clave) ? valor : traducirTexto(valor)
    if (Array.isArray(valor)) return Promise.all(valor.map((v) => traducir(v, clave)))
    if (valor && typeof valor === "object") {
        const claves = Object.keys(valor)
        const valores = await Promise.all(claves.map((k) => traducir(valor[k], k)))
        const salida = {}
        claves.forEach((k, i) => (salida[k] = valores[i]))
        return salida
    }
    return valor
}

// Traduce solo el nombre de cada elemento de una lista (una sola petición)
async function traducirLista(lista) {
    const nombres = lista.map((i) => i.name || "")
    const traducidos = (await traducirTexto(nombres.join("\n"))).split("\n")
    if (traducidos.length !== lista.length) return lista
    return lista.map((item, i) => ({ ...item, name: traducidos[i].trim() || item.name }))
}

async function pedir(ruta, res) {
    try {
        const response = await fetch(API + ruta)
        const data = await response.json()
        if (!response.ok) return res.status(response.status).json(data)
        if (!cache.has(ruta)) cache.set(ruta, await traducir(data))
        const resultado = cache.get(ruta)
        res.json(ruta.startsWith("/boss/") ? nombreJefe(resultado) : resultado)
    } catch (error) {
        res.status(500).json({ error: "No se pudo consultar la API" })
    }
}

function sacarLista(data) {
    if (Array.isArray(data)) return data
    return Object.values(data || {}).find(Array.isArray) || []
}

// Lista completa: pide página tras página hasta que no aparezcan elementos nuevos
app.get("/:tipo", async (req, res) => {
    const tipo = req.params.tipo
    if (!tipos.includes(tipo)) return res.status(404).json({ error: "Tipo no válido" })
    if (cache.has("lista/" + tipo)) return res.json(cache.get("lista/" + tipo))
    try {
        const todos = []
        const vistos = new Set()
        for (let pagina = 1; pagina <= 30; pagina++) {
            const response = await fetch(API + "/" + tipo + "?limit=100&page=" + pagina)
            const items = sacarLista(await response.json())
            const nuevos = items.filter((i) => !vistos.has(i.slug || i.name))
            if (nuevos.length === 0) break
            nuevos.forEach((i) => vistos.add(i.slug || i.name))
            todos.push(...nuevos)
        }
        let traducida = await traducirLista(todos)
        if (tipo === "boss") traducida = traducida.map(nombreJefe)
        cache.set("lista/" + tipo, traducida)
        res.json(traducida)
    } catch (error) {
        res.status(500).json({ error: "No se pudo consultar la API" })
    }
})

// Detalle: /boss/false-knight, /charm/<slug>, etc.
app.get("/:tipo/:slug", (req, res) => {
    if (!tipos.includes(req.params.tipo)) return res.status(404).json({ error: "Tipo no válido" })
    pedir("/" + req.params.tipo + "/" + req.params.slug, res)
})

app.listen(3000, () => console.log("Corriendo"))
