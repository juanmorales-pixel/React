export default function Titulo({ nivel = 1, children }) {
    const Etiqueta = "h" + nivel
    return <Etiqueta>{children}</Etiqueta>
}
