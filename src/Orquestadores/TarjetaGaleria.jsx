import Contenedor from "../Components/Contenedor.jsx"
import Insignia from "../Components/Insignia.jsx"
import Imagen from "../Components/Imagen.jsx"
import Titulo from "../Components/Titulo.jsx"
import Texto from "../Components/Texto.jsx"

export default function TarjetaGaleria({ numero, imagen, tituloG, descripcionG, color }) {
    return (
        <Contenedor clase="Tarjeta" estilo={color ? { borderColor: color } : undefined}>
            <Insignia numero={numero} />
            <Imagen src={imagen} alt={tituloG} />
            <Titulo nivel={3}>{tituloG}</Titulo>
            <Texto>{descripcionG}</Texto>
        </Contenedor>
    )
}
