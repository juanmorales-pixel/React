import { useState } from "react"
import { buscarImagen } from "../Config/imagenesJefes.js"

// Quita tildes y mayúsculas para buscar igual "Vasija" y "vasíja"
const limpiar = (texto) => texto.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase()

export default function useBusqueda(tarjetas) {
    const [busqueda, setBusqueda] = useState("")

    // Se numera antes de filtrar para que cada tarjeta conserve su número
    const visibles = tarjetas
        .map((t, i) => ({ ...t, numero: i + 1, imagen: buscarImagen(t.imagenG) || t.imagenG }))
        .filter((t) => limpiar(t.tituloG).includes(limpiar(busqueda.trim())))

    return { busqueda, visibles, onBuscar: (e) => setBusqueda(e.target.value) }
}
