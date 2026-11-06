import Contenedor from "../Components/Contenedor.jsx"
import Titulo from "../Components/Titulo.jsx"
import Texto from "../Components/Texto.jsx"
import Campo from "../Components/Campo.jsx"
import TarjetaGaleria from "../Orquestadores/TarjetaGaleria.jsx"
import useBusqueda from "../Hook/useBusqueda.js"

export default function Galeria({ tarjetas }) {
    const { busqueda, visibles, onBuscar } = useBusqueda(tarjetas)
    return (
        <Contenedor clase="Pagina">
            <Titulo>Galería de jefes</Titulo>
            <Texto clase="Centrado">{visibles.length} jefes</Texto>
            <Campo tipo="search" holder="Buscar jefe..." valor={busqueda} onCambio={onBuscar} />
            <Contenedor clase="Rejilla">
                {visibles.map((t) => (
                    <TarjetaGaleria key={t.imagenG + t.numero} {...t} />
                ))}
            </Contenedor>
            {visibles.length === 0 && <Texto clase="Centrado">No hay jefes con ese nombre.</Texto>}
        </Contenedor>
    )
}
