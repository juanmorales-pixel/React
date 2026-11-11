const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())

const API = "https://hallownest-api.vercel.app/api/v1"
const tipos = ["boss", "character", "area", "charm", "skill"]
const listas = {}

function sacarLista(data) {
    if (Array.isArray(data)) return data
    return Object.values(data || {}).find(Array.isArray) || []
}

app.get("/:tipo", async (req, res) => {
    const tipo = req.params.tipo
    if (!tipos.includes(tipo)) return res.status(404).json({ error: "Tipo no válido" })
    if (listas[tipo]) return res.json(listas[tipo])
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
        listas[tipo] = todos
        res.json(todos)
    } catch {
        res.status(500).json({ error: "No se pudo consultar la API" })
    }
})

app.get("/:tipo/:slug", async (req, res) => {
    const { tipo, slug } = req.params
    if (!tipos.includes(tipo)) return res.status(404).json({ error: "Tipo no válido" })
    try {
        const response = await fetch(API + "/" + tipo + "/" + slug)
        res.status(response.status).json(await response.json())
    } catch {
        res.status(500).json({ error: "No se pudo consultar la API" })
    }
})

app.listen(3000, () => console.log("Corriendo"))
