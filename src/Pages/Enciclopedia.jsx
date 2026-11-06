import Contenedor from "../Components/Contenedor.jsx"
import Titulo from "../Components/Titulo.jsx"
import Texto from "../Components/Texto.jsx"
import Selector from "../Components/Selector.jsx"
import DetalleEnciclopedia from "../Orquestadores/DetalleEnciclopedia.jsx"
import { categorias } from "../Config/categorias.js"
import useEnciclopedia from "../Hook/useEnciclopedia.js"

export default function Enciclopedia() {
    const e = useEnciclopedia()
    return (
        <Contenedor clase="Pagina">
            <Titulo>Enciclopedia de Hallownest</Titulo>
            <Contenedor clase="Selectores">
                <Selector valor={e.tipo} onCambio={e.onTipo} opciones={categorias} />
                <Selector valor={e.slug} onCambio={e.onElegir} opciones={e.opciones} vacio="Elige uno..." />
            </Contenedor>
            {e.error && <Texto clase="Error">{e.error}</Texto>}
            {e.detalle && <DetalleEnciclopedia detalle={e.detalle} imagen={e.imagen} />}
        </Contenedor>
    )
}
