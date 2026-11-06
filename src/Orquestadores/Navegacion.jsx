import Contenedor from "../Components/Contenedor.jsx"
import Enlace from "../Components/Enlace.jsx"
import { enlaces } from "../Config/enlaces.js"

export default function Navegacion() {
    return (
        <Contenedor como="nav" clase="Navegacion">
            {enlaces.map((e) => (
                <Enlace key={e.to} to={e.to}>{e.texto}</Enlace>
            ))}
        </Contenedor>
    )
}
