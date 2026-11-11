import { useNavigate } from "react-router-dom"
import Contenedor from "../Components/Contenedor.jsx"
import Titulo from "../Components/Titulo.jsx"
import Boton from "../Components/Boton.jsx"
import Desintegracion from "../Components/Desintegracion.jsx"
import isaac from "../Assets/imagenes/isaac.jpg"

export default function Inicio() {
    const navigate = useNavigate()
    const irAGaleria = () => navigate("/Galeria")

    return (
        <Contenedor clase="Inicio">
            <Titulo>Bienvenidos a Hallownest</Titulo>
            <Desintegracion src={isaac} onFin={irAGaleria} />
            <Boton onClick={irAGaleria}>Entrar a la galería</Boton>
        </Contenedor>
    )
}
