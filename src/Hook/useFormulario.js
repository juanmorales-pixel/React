import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { inicial } from "../Config/formularioConfig.js"

export default function useFormulario({ agregar }) {
    const navigate = useNavigate()
    const [datos, setDatos] = useState(inicial)

    const cambiar = (e) => {
        setDatos({ ...datos, [e.target.name]: e.target.value })
    }

    const enviar = (e) => {
        e.preventDefault()
        agregar({
            tituloG: datos.Nombre,
            imagenG: datos.Imagen,
            descripcionG: datos.Descripcion,
            color: datos.Color,
        })
        navigate("/Galeria")
    }

    return {
        datos,
        onCambio: cambiar,
        onEnviar: enviar,
        onReset: () => setDatos(inicial),
        onVolver: () => navigate("/Galeria"),
    }
}
