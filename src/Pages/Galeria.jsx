import { useState } from "react";
import { TarjetaG } from "../Orquestadores/Tarjeta.jsx";
import EncabezadoG from "../Components/ComponentsG/EncabezadoG.jsx";
import BuscadorG from "../Components/ComponentsG/BuscadorG.jsx";
import { buscarImagen } from "../Components/imagenesJefes.js";
import respaldo from "../Assets/imagenes/hk.jpg";
import "../Styles/EstilosDeOrquestador.css";

// Quita tildes y mayúsculas para que "Vasija" y "vasíja" se busquen igual
const limpiar = (texto) =>
    texto.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

export default function GaleriaPagina({ tarjetas }) {
    const [busqueda, setBusqueda] = useState("");

    // Se numera antes de filtrar para que cada jefe conserve su número
    const visibles = tarjetas
        .map((jefe, indice) => ({ ...jefe, numero: indice + 1 }))
        .filter((jefe) => limpiar(jefe.tituloG).includes(limpiar(busqueda.trim())));

    return (
        <div className="Galeria-pagina">
            <EncabezadoG titulo="Galería de jefes" total={visibles.length} />
            <BuscadorG valor={busqueda} onCambio={setBusqueda} />

            <div className="Gal">
                {
                    visibles.map((Gar) => (
                        <TarjetaG
                            key={`${Gar.imagenG}-${Gar.numero}`}
                            numero={Gar.numero}
                            tituloG={Gar.tituloG}
                            imagenG={buscarImagen(Gar.imagenG) || Gar.imagenG || respaldo}
                            descripcionG={Gar.descripcionG}
                            color={Gar.color}
                        />
                    ))
                }
            </div>

            {visibles.length === 0 && <p className="Gal-vacio">No hay jefes con ese nombre.</p>}
        </div>
    );
}
