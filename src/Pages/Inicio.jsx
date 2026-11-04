import Tarjeta from "../Orquestadores/Tarjeta.jsx";
import docs from "../Data/data.json";
import "../Styles/EstilosDeOrquestador.css";

export default function Inicio() {
    return (
        <div className="menu">
            {
                docs.map((Doc, index) => (
                    <Tarjeta
                        key={index}
                        img={Doc.imagen}
                    />
                ))
            }
        </div>
    );
}
