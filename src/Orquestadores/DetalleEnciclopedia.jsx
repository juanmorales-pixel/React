import Contenedor from "../Components/Contenedor.jsx"
import Imagen from "../Components/Imagen.jsx"
import Titulo from "../Components/Titulo.jsx"
import Reproductor from "../Components/Reproductor.jsx"
import Valor from "./Valor.jsx"

export default function DetalleEnciclopedia({ detalle, imagen }) {
    return (
        <Contenedor clase="Detalle">
            {imagen && <Imagen src={imagen} alt={detalle.name} clase="Detalle-imagen" />}
            <Titulo nivel={2}>{detalle.name || detalle.slug}</Titulo>
            <Valor v={detalle} />
            {detalle.music?.spotifyTrackId && <Reproductor cancion={detalle.music.spotifyTrackId} />}
        </Contenedor>
    )
}
