import { TarjetaG } from "../Orquestadores/Tarjeta.jsx";
import Galeria from "../Data/Galeria.json";
import { buscarImagen } from "../Components/imagenesJefes.js";
import respaldo from "../Assets/imagenes/hk.jpg";
import "../Styles/EstilosDeOrquestador.css";

export default function GaleriaPagina() {
    return (
        <div className="Gal">
            {
                Galeria.map((Gar, index) => (
                    <TarjetaG
                        key={index}
                        tituloG={Gar.tituloG}
                        imagenG={buscarImagen(Gar.imagenG) || respaldo}
                        descripcionG={Gar.descripcionG}
                    />
                ))
            }
        </div>
    );
}
