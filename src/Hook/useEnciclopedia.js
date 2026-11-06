import { useState, useEffect } from "react"
import { buscarImagen } from "../Config/imagenesJefes.js"

// La API puede devolver un arreglo o un objeto que contiene el arreglo
const sacarLista = (data) => (Array.isArray(data) ? data : Object.values(data || {}).find(Array.isArray) || [])
const SIN_CONEXION = "No se pudo conectar. ¿Está corriendo el servidor? (npm start)"

export default function useEnciclopedia() {
    const [tipo, setTipo] = useState("boss")
    const [lista, setLista] = useState([])
    const [slug, setSlug] = useState("")
    const [detalle, setDetalle] = useState(null)
    const [error, setError] = useState("")

    // Cada vez que cambia la categoría se pide su lista al servidor
    useEffect(() => {
        let activo = true
        fetch("/api/" + tipo)
            .then((r) => r.json())
            .then((data) => activo && setLista(sacarLista(data)))
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
            const respuesta = await fetch("/api/" + tipo + "/" + nuevo)
            if (!respuesta.ok) return setError("No se encontró ese elemento")
            setDetalle(await respuesta.json())
        } catch {
            setError(SIN_CONEXION)
        }
    }

    return {
        tipo, slug, detalle, error,
        opciones: lista.map((i) => ({ valor: i.slug, texto: i.name || i.slug })),
        imagen: tipo === "boss" && detalle ? buscarImagen(detalle.slug) : null,
        onTipo: cambiarTipo,
        onElegir: elegir,
    }
}
