import Contenedor from "./Contenedor.jsx"
import Enlace from "./Enlace.jsx"
import { enlaces } from "../Config/menu.js"

export default function Menu() {
    return (
        <Contenedor como="nav" clase="Navegacion">
            {enlaces.map((e) => (
                <Enlace key={e.to} to={e.to}>{e.texto}</Enlace>
            ))}
        </Contenedor>
    )
}
