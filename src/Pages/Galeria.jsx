import { useState } from "react"
import Contenedor from "../Components/Contenedor.jsx"
import Titulo from "../Components/Titulo.jsx"
import Texto from "../Components/Texto.jsx"
import Campo from "../Components/Campo.jsx"
import Tarjeta from "../Components/Tarjeta.jsx"
import jefes from "../Data/Galeria.json"
import { filtrarJefes } from "../Acciones/galeria.js"

export default function Galeria() {
    const [busqueda, setBusqueda] = useState("")
    const visibles = filtrarJefes(jefes, busqueda)

    return (
        <Contenedor clase="Pagina">
            <Titulo>Galería de jefes</Titulo>
            <Texto clase="Centrado">{visibles.length} jefes</Texto>
            <Campo
                tipo="search"
                holder="Buscar jefe..."
                valor={busqueda}
                onCambio={(e) => setBusqueda(e.target.value)}
            />
            <Contenedor clase="Rejilla">
                {visibles.map((j) => (
                    <Tarjeta key={j.imagenG} imagen={j.imagen} titulo={j.tituloG} descripcion={j.descripcionG} />
                ))}
            </Contenedor>
            {visibles.length === 0 && <Texto clase="Centrado">No hay jefes con ese nombre.</Texto>}
        </Contenedor>
    )
}
