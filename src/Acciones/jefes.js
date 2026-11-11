function sacarLista(data) {
    if (Array.isArray(data)) return data
    return Object.values(data || {}).find(Array.isArray) || []
}

export async function pedirLista(tipo) {
    const respuesta = await fetch("/api/" + tipo)
    return sacarLista(await respuesta.json())
}

export async function pedirDetalle(tipo, slug) {
    const respuesta = await fetch("/api/" + tipo + "/" + slug)
    return respuesta.json()
}
