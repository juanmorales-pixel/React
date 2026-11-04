import Desintegracion from "../Home/Desintegracion"
import thesaac from "../Assets/imagenes/the saac.jpg"
import { useNavigate } from "react-router-dom"
export default function Prueba(){
    const navigate=useNavigate()
    return(
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <h1>Bienvenidos</h1>
        <Desintegracion
            src={thesaac}
            onFin={()=>navigate('/Tarjeta')}

        />
    </div>
    )
}