// Nombres del juego en español (el traductor los respeta en todos los textos)
const jefes = require("./src/Data/Galeria.json")

const nombres = {
    "Hollow Knight": "Caballero Hueco",
    "Pale King": "Rey Pálido",
    "Zote the Mighty": "Zote el Poderoso",
    "Nightmare King Grimm": "Rey Pesadilla Grimm",
    "Grimm Troupe": "Troupe Grimm",
    "Forgotten Crossroads": "Cruces Olvidados",
    "Greenpath": "Sendero Verde",
    "Fungal Wastes": "Páramos Fúngicos",
    "City of Tears": "Ciudad de las Lágrimas",
    "Crystal Peak": "Pico de Cristal",
    "Deepnest": "Nido Profundo",
    "Kingdom's Edge": "Borde del Reino",
    "Ancient Basin": "Cuenca Antigua",
    "Royal Waterways": "Canales Reales",
    "Fog Canyon": "Cañón de Niebla",
    "Queen's Gardens": "Jardines de la Reina",
    "Howling Cliffs": "Acantilados Aulladores",
    "White Palace": "Palacio Blanco",
    "Dirtmouth": "Bocatierra",
    "Hallownest": "Hallownest",
    "Godhome": "Godhome",
    "Geo": "Geo",
    "Hornet": "Hornet",
    "Quirrel": "Quirrel",
    "Cornifer": "Cornifer",
    "Iselda": "Iselda",
    "Sly": "Sly",
    "Zote": "Zote",
    "Sheo": "Sheo",
    "Oro": "Oro",
    "Mato": "Mato",
    "Grimm": "Grimm",
}

// Nombres de los jefes: el slug en inglés ("soul-master") pasa a su nombre en Galeria.json
jefes.forEach((j) => {
    const ingles = j.imagenG.split("-").map((p) => p[0].toUpperCase() + p.slice(1)).join(" ")
    if (!nombres[ingles]) nombres[ingles] = j.tituloG
})

// Términos del juego (se corrigen después de traducir)
const terminos = [
    [/vasos?|recipientes?|embarcaci(?:ón|ones)|nav[ií]os?|buques?/gi, "vasija"],
    [/encantos?|hechizos?/gi, "amuleto"],
    [/resplandor(?:es)?|radiancias?/gi, "destello"],
]

module.exports = { nombres, terminos }
