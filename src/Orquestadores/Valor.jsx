import { Lista, Item } from "../Components/Lista.jsx"
import Resaltado from "../Components/Resaltado.jsx"
import { etiquetas, ocultos } from "../Config/categorias.js"

// Muestra cualquier dato de la API (texto, número, lista u objeto)
export default function Valor({ v }) {
    if (v === null || v === undefined) return null
    if (typeof v !== "object") return <>{String(v)}</>
    if (Array.isArray(v)) {
        return (
            <Lista>
                {v.map((item, i) => (
                    <Item key={i}><Valor v={item} /></Item>
                ))}
            </Lista>
        )
    }
    return (
        <Lista>
            {Object.entries(v)
                .filter(([clave]) => !ocultos.includes(clave))
                .map(([clave, valor]) => (
                    <Item key={clave}>
                        <Resaltado>{etiquetas[clave] || clave}: </Resaltado>
                        <Valor v={valor} />
                    </Item>
                ))}
        </Lista>
    )
}
