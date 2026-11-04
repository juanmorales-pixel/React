import '../../Styles/EstilosDeOrquestador.css';

// Campo para filtrar las tarjetas por nombre
export default function BuscadorG({ valor, onCambio }) {
    return (
        <input
            className='BuscadorG'
            type="search"
            placeholder="Buscar jefe..."
            value={valor}
            onChange={(e) => onCambio(e.target.value)}
        />
    )
}
