// Uso: npm run listar-jefes
// Pide todos los jefes a la API, muestra la lista de nombres de imagen que debes
// guardar en src/Assets/imagenes/jefes/ (cualquier extensión) y la guarda en un .txt
const fs = require("fs")
const API = "https://hallownest-api.vercel.app/api/v1/boss"

function sacarLista(data) {
    if (Array.isArray(data)) return data
    return Object.values(data || {}).find(Array.isArray) || []
}

async function main() {
    const todos = []
    const vistos = new Set()
    for (let pagina = 1; pagina <= 30; pagina++) {
        const response = await fetch(API + "?limit=100&page=" + pagina)
        const items = sacarLista(await response.json())
        const nuevos = items.filter((i) => !vistos.has(i.slug || i.name))
        if (nuevos.length === 0) break
        nuevos.forEach((i) => vistos.add(i.slug || i.name))
        todos.push(...nuevos)
    }

    const lineas = todos.map((j, i) => String(i + 1).padStart(2, "0") + ". " + (j.slug || j.name) + "   <- " + j.name)
    const texto = "Guarda cada imagen con el nombre del slug (cualquier extensión: png, jpg, webp...)\n\n" + lineas.join("\n") + "\n"
    fs.writeFileSync("lista-imagenes-jefes.txt", texto, "utf8")
    console.log(texto)
    console.log("Total: " + todos.length + " jefes. Lista guardada en lista-imagenes-jefes.txt")

    // Avisa si algún nombre de la galería no coincide con la API
    const slugs = todos.map((j) => j.slug)
    const galeria = JSON.parse(fs.readFileSync("src/Data/Galeria.json", "utf8"))
    const noCoinciden = galeria.map((g) => g.imagenG).filter((s) => !slugs.includes(s))
    if (noCoinciden.length > 0) {
        console.log("\nOJO: estos nombres de Galeria.json no existen en la API, corrígelos:")
        noCoinciden.forEach((s) => console.log(" - " + s))
    }
}

main().catch(() => console.log("No se pudo consultar la API. Revisa tu conexión."))
