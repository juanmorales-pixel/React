import '../../../Styles/EstilosDeOrquestador.css'

export default function Button({ TextoButton, onClick, type }) {
    return (
        <button type={type} onClick={onClick}>
            <img src="src\Assets\imagenes\holowmini.jpg" alt="" />
            {TextoButton}
        </button>
    )
}
