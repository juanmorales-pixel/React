import respaldo from "../Assets/imagenes/hk.jpg"

export default function Imagen({ src, alt, clase }) {
    return <img className={clase} src={src || respaldo} alt={alt} />
}
