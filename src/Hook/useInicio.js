import { useNavigate } from "react-router-dom"

export default function useInicio() {
    const navigate = useNavigate()
    return { irAGaleria: () => navigate("/Galeria") }
}
