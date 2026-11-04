import "../Styles/EstilosDeOrquestador.css";
import Imagen from "../Components/Imagen.jsx";
import ImagenG from "../Components/ComponentsG/ImagenG.jsx";
import TituloG from "../Components/ComponentsG/TituloG.jsx";
import DescriptionG from "../Components/ComponentsG/DescripcionG.jsx";
import Button from "../Components/ComponentsG/Formulario/Button.jsx";
import Inputt from "../Components/ComponentsG/Formulario/Inputt.jsx";
import Labell from "../Components/ComponentsG/Formulario/Label.jsx";


export default function Tarjeta({ img }) {
    return (
       
            <Imagen img={img} />
            
    );
}

export function TarjetaG ({
    imagenG,
    tituloG,
    descripcionG
})
{
    return (
        <div className="TarjetaG-Container">
            
            <ImagenG imagenG={imagenG} /> 
            <div className="Text-Container">
            <TituloG tituloG={tituloG} />
            <DescriptionG descripcionG={descripcionG} />
            </div>
        </div>
    
    );
}
export function Label({
    Titulolabel,
    Infolabel,
    
}) {
    return (
        <div className="">
             
            <Labell Titulolabel={Titulolabel} Infolabel={Infolabel}/>

        </div>
    );

}
export function Input({Type, Nombre, Infolabel}) {
    return (
        <div className="Input-container">
            <Inputt Type={Type} Nombre={Nombre} Infolabel={Infolabel} />
        </div>
    );
}
export function Boton({TextoButton,onClick }) {
    return (
        <div className="">
             
            <Button TextoButton={TextoButton} onClick={onClick} />
            
        </div>
    );
    
}


    