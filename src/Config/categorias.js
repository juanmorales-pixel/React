export const categorias = [
    { valor: "boss", texto: "Jefes" },
    { valor: "character", texto: "Personajes" },
    { valor: "area", texto: "Áreas" },
    { valor: "charm", texto: "Amuletos" },
    { valor: "skill", texto: "Habilidades" },
]

// Campos que no se muestran (identificadores, enlaces, imágenes)
export const ocultos = ["slug", "id", "_id", "image", "img", "icon", "url", "link", "wiki", "spotifyTrackId", "name", "music"]

// Nombres de los campos de la API en español
export const etiquetas = {
    summary: "Resumen", description: "Descripción", lore: "Historia", hp: "Vida", health: "Vida",
    base: "Base", geo: "Geo", area: "Zona", rewards: "Recompensas", phases: "Fases",
    attacks: "Ataques", music: "Música", location: "Ubicación", cost: "Costo", notches: "Muescas",
    effect: "Efecto", effects: "Efectos", type: "Tipo", role: "Rol", dlc: "Contenido extra",
    acquisition: "Cómo se obtiene", requirements: "Requisitos", abilities: "Habilidades",
    items: "Objetos", characters: "Personajes", bosses: "Jefes", enemies: "Enemigos",
    connections: "Conexiones", soul: "Alma", damage: "Daño", notes: "Notas",
}
