export default function Boton({ type = "button", onClick, children }) {
    return <button type={type} onClick={onClick}>{children}</button>
}
