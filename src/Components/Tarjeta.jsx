import Contenedor from "./Contenedor.jsx"
import Imagen from "./Imagen.jsx"
import Titulo from "./Titulo.jsx"
import Texto from "./Texto.jsx"

export default function Tarjeta({ imagen, titulo, descripcion }) {
    return (
        <Contenedor clase="Tarjeta">
            <Imagen src={imagen} alt={titulo} />
            <Titulo nivel={3}>{titulo}</Titulo>
            <Texto>{descripcion}</Texto>
        </Contenedor>
    )
}
