export default function Campo({ etiqueta, tipo = "text", holder, valor, onCambio }) {
    return (
        <label className="Campo">
            {etiqueta}
            <input name={etiqueta} type={tipo} placeholder={holder} value={valor} onChange={onCambio} />
        </label>
    )
}
