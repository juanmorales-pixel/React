import { TarjetaG } from "../Orquestadores/Tarjeta.jsx";
import Galeria from "../Data/Galeria.json";
import "../Styles/EstilosDeOrquestador.css";

export default function GaleriaPagina() {
    return (
        <div className="Gal">
            {
                Galeria.map((Gar, index) => (
                    <TarjetaG
                        key={index}
                        tituloG={Gar.tituloG}
                        imagenG={Gar.imagenG}
                        descripcionG={Gar.descripcionG}
                    />
                ))
            }
        </div>
    );
}
