import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Navegacion from "../Orquestadores/Navegacion.jsx"
import Inicio from "./Inicio.jsx"
import Galeria from "./Galeria.jsx"
import Formulario from "./Formulario.jsx"
import FormularioPage from "./FormularioPage.jsx"
import Enciclopedia from "./Enciclopedia.jsx"
import useTarjetas from "../Hook/useTarjetas.js"

export default function App() {
    const { tarjetas, agregar } = useTarjetas()
    return (
        <BrowserRouter>
            <Navegacion />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/Galeria" element={<Galeria tarjetas={tarjetas} />} />
                <Route path="/Formulario" element={<Formulario />} />
                <Route path="/NuevaTarjeta" element={<FormularioPage agregar={agregar} />} />
                <Route path="/Enciclopedia" element={<Enciclopedia />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    )
}
