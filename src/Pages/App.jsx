import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navegacion from "../Components/Navegacion.jsx";
import Inicio from "./Inicio.jsx";
import Galeria from "./Galeria.jsx";
import Formulario from "../Orquestadores/Formulario.jsx";
import FormularioPage from "./FormularioPage.jsx";
import useTarjetas from "../Hook/useTarjetas.js";
import H from "../Components/h.jsx";
import Jefe from "./Jefe.jsx";

export default function App() {
    const { tarjetas, agregar } = useTarjetas();
    return (
        <BrowserRouter>
            <Navegacion />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/Galeria" element={<Galeria tarjetas={tarjetas} />} />
                <Route path="/Formulario" element={<Formulario />} />
                <Route path="/NuevaTarjeta" element={<FormularioPage agregar={agregar} />} />
                <Route path="/h" element={<H />} />
                <Route path="/Jefe" element={<Jefe />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
}
