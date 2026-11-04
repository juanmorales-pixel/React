import '../../Styles/EstilosDeOrquestador.css';

// Si la imagen del jefe aún no existe, se muestra una imagen por defecto
const RESPALDO = "src/Assets/imagenes/hk.jpg";

export default function Imagen({imagenG, alt}){
    return (
        <img
            className='ImagenG'
            src={imagenG}
            alt={alt || "Imagen de la galería"}
            onError={(e) => {
                if (!e.currentTarget.src.endsWith(RESPALDO)) e.currentTarget.src = RESPALDO;
            }}
        />
    )
}
