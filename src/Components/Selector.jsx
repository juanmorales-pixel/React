export default function Selector({ valor, onCambio, opciones, vacio }) {
    return (
        <select value={valor} onChange={onCambio}>
            {vacio && <option value="">{vacio}</option>}
            {opciones.map((o) => (
                <option key={o.valor} value={o.valor}>{o.texto}</option>
            ))}
        </select>
    )
}
