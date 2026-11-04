import '../../Styles/EstilosDeOrquestador.css';

// Título de la galería y cuántos jefes se están mostrando
export default function EncabezadoG({ titulo, total }) {
    return (
        <header className='EncabezadoG'>
            <h1 className='EncabezadoG-titulo'>{titulo}</h1>
            <p className='EncabezadoG-total'>{total} {total === 1 ? "jefe" : "jefes"}</p>
        </header>
    )
}
