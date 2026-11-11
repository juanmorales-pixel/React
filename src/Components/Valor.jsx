import { Lista, Item } from "./Lista.jsx"

const ocultos = ["slug", "id", "_id", "image", "img", "icon", "url", "link", "wiki", "spotifyTrackId", "name", "music"]

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
                        <b>{clave}: </b>
                        <Valor v={valor} />
                    </Item>
                ))}
        </Lista>
    )
}
