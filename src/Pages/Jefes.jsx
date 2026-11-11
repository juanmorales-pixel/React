import { useState, useEffect } from "react"
import Contenedor from "../Components/Contenedor.jsx"
import Titulo from "../Components/Titulo.jsx"
import Texto from "../Components/Texto.jsx"
import Selector from "../Components/Selector.jsx"
import Detalle from "../Components/Detalle.jsx"
import { categorias } from "../Config/menu.js"
import { buscarImagen } from "../Config/imagenesJefes.js"
import { pedirLista, pedirDetalle } from "../Acciones/jefes.js"

const SIN_CONEXION = "No se pudo conectar. ¿Está corriendo el servidor? (npm start)"

export default function Jefes() {
    const [tipo, setTipo] = useState("boss")
    const [lista, setLista] = useState([])
    const [slug, setSlug] = useState("")
    const [detalle, setDetalle] = useState(null)
    const [error, setError] = useState("")

    useEffect(() => {
        let activo = true
        pedirLista(tipo)
            .then((datos) => activo && setLista(datos))
            .catch(() => activo && setError(SIN_CONEXION))
        return () => { activo = false }
    }, [tipo])

    const cambiarTipo = (e) => {
        setTipo(e.target.value)
        setLista([])
        setSlug("")
        setDetalle(null)
        setError("")
    }

    const elegir = async (e) => {
        const nuevo = e.target.value
        setSlug(nuevo)
        setDetalle(null)
        setError("")
        if (!nuevo) return
        try {
            setDetalle(await pedirDetalle(tipo, nuevo))
        } catch {
            setError(SIN_CONEXION)
        }
    }

    const opciones = lista.map((i) => ({ valor: i.slug, texto: i.name || i.slug }))
    const imagen = tipo === "boss" && detalle ? buscarImagen(detalle.slug) : null

    return (
        <Contenedor clase="Pagina">
            <Titulo>Jefes de Hallownest</Titulo>
            <Contenedor clase="Selectores">
                <Selector valor={tipo} onCambio={cambiarTipo} opciones={categorias} />
                <Selector valor={slug} onCambio={elegir} opciones={opciones} vacio="Elige uno..." />
            </Contenedor>
            {error && <Texto clase="Error">{error}</Texto>}
            {detalle && <Detalle detalle={detalle} imagen={imagen} />}
        </Contenedor>
    )
}
