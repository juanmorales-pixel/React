import '../../../Styles/EstilosDeOrquestador.css'

export default function Button({ TextoButton, onClick }) {
    return (
        <button onClick={onClick}>
            <img src="src\Assets\imagenes\holowmini.jpg" alt="" />
            {TextoButton}
        </button>
    )
}
