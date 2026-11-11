import Contenedor from "../Components/Contenedor.jsx"
import Campo from "../Components/Campo.jsx"
import Boton from "../Components/Boton.jsx"
import Imagen from "../Components/Imagen.jsx"
import FunForm from "../Data/FunForm.json"
import { acciones } from "../Acciones/formulario.js"
import icono from "../Assets/imagenes/holowmini.jpg"

export default function Formulario() {
    return (
        <Contenedor clase="Formulario">
            {FunForm.inputs.map((i) => (
                <Campo key={i.Titulo} etiqueta={i.Titulolabel} tipo={i.Type} />
            ))}
            {FunForm.button.map((b) => (
                <Boton key={b.accion} onClick={acciones[b.accion]}>
                    <Imagen src={icono} alt="" clase="Icono" />
                    {b.TextoButton}
                </Boton>
            ))}
            <Imagen
                src="https://media1.tenor.com/m/MrYny0riRw4AAAAC/hornet-silksong.gif"
                alt="hornet bailando"
                clase="Gif-formulario"
            />
        </Contenedor>
    )
}
