import { TarjetaG } from "../Orquestadores/Tarjeta.jsx";
import EncabezadoG from "../Components/ComponentsG/EncabezadoG.jsx";
import BuscadorG from "../Components/ComponentsG/BuscadorG.jsx";
import { buscarImagen } from "../Components/imagenesJefes.js";
import useGaleria from "../Hook/useGaleria.js";
import respaldo from "../Assets/imagenes/hk.jpg";
import "../Styles/EstilosDeOrquestador.css";

export default function GaleriaPagina() {
    const { busqueda, setBusqueda, visibles } = useGaleria();

    return (
        <div className="Galeria-pagina">
            <EncabezadoG titulo="Galería de jefes" total={visibles.length} />
            <BuscadorG valor={busqueda} onCambio={setBusqueda} />

            <div className="Gal">
                {
                    visibles.map((Gar) => (
                        <TarjetaG
                            key={Gar.imagenG}
                            numero={Gar.numero}
                            tituloG={Gar.tituloG}
                            imagenG={buscarImagen(Gar.imagenG) || respaldo}
                            descripcionG={Gar.descripcionG}
                        />
                    ))
                }
            </div>

            {visibles.length === 0 && <p className="Gal-vacio">No hay jefes con ese nombre.</p>}
        </div>
    );
}
