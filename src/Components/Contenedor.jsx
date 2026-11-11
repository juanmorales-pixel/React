export default function Contenedor({ como = "div", clase, estilo, children }) {
    const Etiqueta = como
    return <Etiqueta className={clase} style={estilo}>{children}</Etiqueta>
}
