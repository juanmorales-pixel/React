import { Fragment } from "react";
import { Label, Boton, Input } from "./Tarjeta.jsx";
import FunForm from "../Data/FunForm.json";
import "../Styles/EstilosDeOrquestador.css";

const acciones = {
    Issac: () => {
        alert('isaac and his mother , live alone in a small house on a hill , the life was a simple');
    },
    Recargar: () => {
        window.location.reload();
    },
};

export default function Formulario() {
    return (
        <div className="Formulario">
            {
                FunForm.inputs.map((Form, index) => (
                    <Fragment key={index}>
                        <div className="Campo-container">
                            <Label
                                Titulolabel={Form.Titulolabel}
                                Infolabel={Form.Infolabel}
                            />

                            <Input
                                Titulolabel={Form.Titulolabel}
                                Type={Form.Type}
                                Nombre={Form.Titulo}
                                Infolabel={Form.Infolabel}
                            />
                        </div>
                    </Fragment>
                ))
            }

            {
                FunForm.button.map((Btn, index) => (
                    <Boton
                        key={index}
                        TextoButton={Btn.TextoButton}
                        onClick={acciones[Btn.accion]}
                    />
                ))
            }

            <img
                src="https://media1.tenor.com/m/MrYny0riRw4AAAAC/hornet-silksong.gif"
                alt="hornet bailando"
                className="Gif-formulario"
            />
        </div>
    );
}
