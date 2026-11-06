export default function Insignia({ numero }) {
    return <span className="Insignia">#{String(numero).padStart(2, "0")}</span>
}
