import Campos from "../Components/ComponentsG/Formulario/Campos.jsx";
import { Boton } from "./Tarjeta.jsx";
import { Etiquetas, crearBotones } from "../Config/formularioConfig.js";
import "../Styles/EstilosDeOrquestador.css";

export default function FormularioTarjeta({ datos, onCambio, onEnviar, onReset, onVolver }) {
    const Botones = crearBotones(onVolver);

    return (
        <form className="Formulario" onSubmit={onEnviar} onReset={onReset}>
            {
                Etiquetas.map((campo) => (
                    <Campos
                        key={campo.etiqueta}
                        etiqueta={campo.etiqueta}
                        tipo={campo.tipo}
                        holder={campo.holder}
                        valor={datos[campo.etiqueta]}
                        onCambio={onCambio}
                    />
                ))
            }

            {
                Botones.map((b) => (
                    <Boton
                        key={b.nombre}
                        TextoButton={b.nombre}
                        type={b.tipo}
                        onClick={b.onClick}
                    />
                ))
            }
        </form>
    );
}
