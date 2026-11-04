import { useState } from "react"
import Galeria from "../Data/Galeria.json"

// Quita tildes y mayúsculas para que "Vasija" y "vasíja" se busquen igual
const limpiar = (texto) =>
    texto.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase()

export default function useGaleria(){
    const [busqueda,setBusqueda]=useState("")

    // Se numera antes de filtrar para que cada jefe conserve su número
    const visibles=Galeria
        .map((jefe,indice)=>({...jefe,numero:indice+1}))
        .filter((jefe)=>limpiar(jefe.tituloG).includes(limpiar(busqueda.trim())))

    return {busqueda,setBusqueda,visibles}
}
