import Tarjeta from "../Orquestadores/Tarjeta.jsx";
import "../Styles/EstilosDeOrquestador.css";

export default function Inicio({ tarjetas }) {
    return (
        <div className="menu">
            {
                tarjetas.map((Doc, index) => (
                    <Tarjeta
                        key={index}
                        img={Doc.imagen}
                    />
                ))
            }
        </div>
    );
}
