import { TarjetaG } from "../Orquestadores/Tarjeta.jsx";
import Galeria from "../Data/Galeria.json";
import respaldo from "../Assets/imagenes/hk.jpg";
import "../Styles/EstilosDeOrquestador.css";

// Carga todas las imágenes de la carpeta "jefes" sin importar la extensión (png, jpg, webp...)
const imagenes = import.meta.glob("../Assets/imagenes/jefes/*.{png,jpg,jpeg,webp,gif,svg}", {
    eager: true,
    import: "default",
});

// Busca la imagen cuyo nombre (sin extensión) coincide con el del jefe
function buscarImagen(nombre) {
    const ruta = Object.keys(imagenes).find(
        (r) => r.split("/").pop().replace(/\.[^.]+$/, "") === nombre
    );
    return ruta ? imagenes[ruta] : respaldo;
}

export default function GaleriaPagina() {
    return (
        <div className="Gal">
            {
                Galeria.map((Gar, index) => (
                    <TarjetaG
                        key={index}
                        tituloG={Gar.tituloG}
                        imagenG={buscarImagen(Gar.imagenG)}
                        descripcionG={Gar.descripcionG}
                    />
                ))
            }
        </div>
    );
}
