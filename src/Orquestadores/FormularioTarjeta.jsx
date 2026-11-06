import Formulario from "../Components/Formulario.jsx"
import Campo from "../Components/Campo.jsx"
import Boton from "../Components/Boton.jsx"
import Titulo from "../Components/Titulo.jsx"
import Contenedor from "../Components/Contenedor.jsx"
import { Etiquetas, crearBotones } from "../Config/formularioConfig.js"

export default function FormularioTarjeta({ datos, onCambio, onEnviar, onReset, onVolver }) {
    const Botones = crearBotones(onVolver)

    return (
        <Formulario onEnviar={onEnviar} onReset={onReset}>
            <Titulo nivel={2}>Nueva tarjeta</Titulo>
            {Etiquetas.map((c) => (
                <Campo
                    key={c.etiqueta}
                    etiqueta={c.etiqueta}
                    tipo={c.tipo}
                    holder={c.holder}
                    valor={datos[c.etiqueta]}
                    onCambio={onCambio}
                />
            ))}
            <Contenedor clase="Botones">
                {Botones.map((b) => (
                    <Boton key={b.nombre} type={b.tipo} onClick={b.onClick}>{b.nombre}</Boton>
                ))}
            </Contenedor>
        </Formulario>
    )
}
