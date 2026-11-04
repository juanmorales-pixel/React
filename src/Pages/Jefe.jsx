import { useEffect, useState } from "react";
import "../Styles/Jefe.css";

const SERVIDOR = "http://localhost:3000";

const categorias = [
    { valor: "boss", texto: "Jefes" },
    { valor: "character", texto: "Personajes" },
    { valor: "area", texto: "Áreas" },
    { valor: "charm", texto: "Amuletos" },
    { valor: "skill", texto: "Habilidades" },
];

// La lista puede venir como arreglo o dentro de un objeto; esto cubre ambos casos
function sacarLista(data) {
    if (Array.isArray(data)) return data;
    return Object.values(data || {}).find(Array.isArray) || [];
}

// Nombres de campos de la API en español (si no está aquí, se muestra tal cual)
const etiquetas = {
    name: "Nombre", summary: "Resumen", description: "Descripción", lore: "Historia",
    hp: "Vida", base: "Base", geo: "Geo", area: "Zona", rewards: "Recompensas",
    phases: "Fases", attacks: "Ataques", music: "Música", location: "Ubicación",
    cost: "Costo", notches: "Muescas", effect: "Efecto", effects: "Efectos",
    type: "Tipo", role: "Rol", dlc: "Contenido extra",
};

// Muestra cualquier valor del JSON (texto, número, lista u objeto)
function Valor({ v }) {
    if (v === null || v === undefined) return null;
    if (typeof v !== "object") return <>{String(v)}</>;
    if (Array.isArray(v)) {
        return (
            <ul>
                {v.map((item, i) => (
                    <li key={i}><Valor v={item} /></li>
                ))}
            </ul>
        );
    }
    return (
        <ul>
            {Object.entries(v).map(([clave, valor]) => (
                <li key={clave}><b>{etiquetas[clave] || clave}:</b> <Valor v={valor} /></li>
            ))}
        </ul>
    );
}

function TarjetaJefe({ jefe }) {
    return (
        <>
            <h2>{jefe.name}</h2>
            <p className="Jefe-resumen">{jefe.summary}</p>

            <div className="Jefe-datos">
                <span>❤ Vida <b>{jefe.hp?.base}</b></span>
                <span>◈ Geo <b>{jefe.geo}</b></span>
                <span>⌖ Zona <b>{jefe.area?.name}</b></span>
                <span>★ Recompensa <b>{jefe.rewards?.join(", ")}</b></span>
            </div>

            <h3>Fases</h3>
            <ul>
                {jefe.phases?.map((fase) => (
                    <li key={fase.name}><b>{fase.name}:</b> {fase.description}</li>
                ))}
            </ul>

            <h3>Ataques</h3>
            <ul>
                {jefe.attacks?.map((ataque) => (
                    <li key={ataque.name}>{ataque.name}</li>
                ))}
            </ul>

            {jefe.music?.spotifyTrackId && (
                <iframe
                    title="Música"
                    className="Jefe-musica"
                    src={"https://open.spotify.com/embed/track/" + jefe.music.spotifyTrackId}
                    allow="encrypted-media"
                />
            )}
        </>
    );
}

export default function Jefe() {
    const [tipo, setTipo] = useState("boss");
    const [lista, setLista] = useState([]);
    const [slug, setSlug] = useState("");
    const [detalle, setDetalle] = useState(null);
    const [error, setError] = useState("");

    // Cada vez que cambia la categoría, se pide la lista de esa categoría
    useEffect(() => {
        setLista([]);
        setSlug("");
        setDetalle(null);
        setError("");
        fetch(SERVIDOR + "/" + tipo)
            .then((r) => r.json())
            .then((data) => setLista(sacarLista(data)))
            .catch(() => setError("No se pudo conectar. ¿Está corriendo npm run server?"));
    }, [tipo]);

    const elegir = async (nuevoSlug) => {
        setSlug(nuevoSlug);
        setDetalle(null);
        setError("");
        if (!nuevoSlug) return;
        try {
            const respuesta = await fetch(SERVIDOR + "/" + tipo + "/" + nuevoSlug);
            const data = await respuesta.json();
            if (!respuesta.ok) {
                setError("No se encontró ese elemento");
                return;
            }
            setDetalle(data);
        } catch {
            setError("No se pudo conectar. ¿Está corriendo npm run server?");
        }
    };

    return (
        <div className="Jefe">
            <h1>Hallownest</h1>
            <div className="Jefe-buscador">
                <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
                    {categorias.map((c) => (
                        <option key={c.valor} value={c.valor}>{c.texto}</option>
                    ))}
                </select>
                <select value={slug} onChange={(e) => elegir(e.target.value)}>
                    <option value="">Elige uno...</option>
                    {lista.map((item) => (
                        <option key={item.slug} value={item.slug}>{item.name || item.slug}</option>
                    ))}
                </select>
            </div>

            {error && <p className="Jefe-error">{error}</p>}

            {detalle && (
                <div className="Jefe-tarjeta">
                    {tipo === "boss" ? (
                        <TarjetaJefe jefe={detalle} />
                    ) : (
                        <>
                            <h2>{detalle.name || detalle.slug}</h2>
                            <div className="Jefe-generico"><Valor v={detalle} /></div>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}
