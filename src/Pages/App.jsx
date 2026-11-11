import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Menu from "../Components/Menu.jsx"
import Inicio from "./Inicio.jsx"
import Galeria from "./Galeria.jsx"
import Formulario from "./Formulario.jsx"
import Jefes from "./Jefes.jsx"

export default function App() {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/Galeria" element={<Galeria />} />
                <Route path="/Formulario" element={<Formulario />} />
                <Route path="/Jefes" element={<Jefes />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    )
}
