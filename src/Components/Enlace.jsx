import { NavLink } from "react-router-dom"

export default function Enlace({ to, children }) {
    return (
        <NavLink to={to} end className={({ isActive }) => (isActive ? "Enlace activo" : "Enlace")}>
            {children}
        </NavLink>
    )
}
