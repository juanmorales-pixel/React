import '../../Styles/EstilosDeOrquestador.css';

// Etiqueta con el número del jefe (#01, #02...)
export default function Insignia({ numero }) {
    return <span className='Insignia'>#{String(numero).padStart(2, "0")}</span>
}
