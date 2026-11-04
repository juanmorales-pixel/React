import { NavLink } from "react-router-dom";
import "../Styles/EstilosDeOrquestador.css";

const enlaces = [
    { to: "/", texto: "INICIO" },
    { to: "/Galeria", texto: "GALERÍA" },
    { to: "/Formulario", texto: "FORMULARIO" },
    { to: "/h", texto: "PRESS START" },
    { to: "/Jefe", texto: "API" },
];

export default function Navegacion() {
    return (
        <nav className="Navegacion">
            {
                enlaces.map((enlace) => (
                    <NavLink
                        key={enlace.to}
                        to={enlace.to}
                        end
                        className={({ isActive }) =>
                            isActive ? "Nav-link Nav-link-activo" : "Nav-link"
                        }
                    >
                        {enlace.texto}
                    </NavLink>
                ))
            }
        </nav>
    );
}
