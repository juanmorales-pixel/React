import Contenedor from "./Contenedor.jsx"
import Imagen from "./Imagen.jsx"
import Titulo from "./Titulo.jsx"
import Reproductor from "./Reproductor.jsx"
import Valor from "./Valor.jsx"

export default function Detalle({ detalle, imagen }) {
    return (
        <Contenedor clase="Detalle">
            {imagen && <Imagen src={imagen} alt={detalle.name} clase="Detalle-imagen" />}
            <Titulo nivel={2}>{detalle.name || detalle.slug}</Titulo>
            <Valor v={detalle} />
            {detalle.music?.spotifyTrackId && <Reproductor cancion={detalle.music.spotifyTrackId} />}
        </Contenedor>
    )
}
