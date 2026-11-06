import { useState } from "react"
import jefes from "../Data/Galeria.json"

export default function useTarjetas() {
    const [tarjetas, setTarjetas] = useState(jefes)
    const agregar = (nueva) => setTarjetas([...tarjetas, nueva])
    return { tarjetas, agregar }
}
