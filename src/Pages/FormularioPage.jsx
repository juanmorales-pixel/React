import useFormulario from "../Hook/useFormulario.js";
import FormularioTarjeta from "../Orquestadores/FormularioTarjeta.jsx";

export default function FormularioPage({ agregar }) {
    const props = useFormulario({ agregar });
    return <FormularioTarjeta {...props} />;
}
