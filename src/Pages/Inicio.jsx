import Contenedor from "../Components/Contenedor.jsx"
import Titulo from "../Components/Titulo.jsx"
import Boton from "../Components/Boton.jsx"
import Desintegracion from "../Components/Desintegracion.jsx"
import isaac from "../Assets/imagenes/isaac.jpg"
import useInicio from "../Hook/useInicio.js"

export default function Inicio() {
    const { irAGaleria } = useInicio()
    return (
        <Contenedor clase="Inicio">
            <Titulo>Bienvenidos a Hallownest</Titulo>
            <Desintegracion src={isaac} onFin={irAGaleria} />
            <Boton onClick={irAGaleria}>Entrar a la galería</Boton>
        </Contenedor>
    )
}
