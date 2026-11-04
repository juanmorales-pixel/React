import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navegacion from "../Components/Navegacion.jsx";
import Inicio from "./Inicio.jsx";
import Galeria from "./Galeria.jsx";
import Formulario from "../Orquestadores/Formulario.jsx";
import H from "../Components/h.jsx";
import Jefe from "./Jefe.jsx";
import useTarjetas from "../Hook/useTarjetas.js";

export default function App() {
    const { tarjetas } = useTarjetas();

    return (
        <BrowserRouter>
            <Navegacion />
            <Routes>
                <Route path="/" element={<Inicio tarjetas={tarjetas} />} />
                <Route path="/Galeria" element={<Galeria />} />
                <Route path="/Formulario" element={<Formulario />} />
                <Route path="/h" element={<H />} />
                <Route path="/Jefe" element={<Jefe />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
}
