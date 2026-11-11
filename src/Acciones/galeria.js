import { buscarImagen } from "../Config/imagenesJefes.js"

function limpiar(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
}

export function filtrarJefes(jefes, busqueda) {
    return jefes
        .filter((j) => limpiar(j.tituloG).includes(limpiar(busqueda.trim())))
        .map((j) => ({ ...j, imagen: buscarImagen(j.imagenG) }))
}
