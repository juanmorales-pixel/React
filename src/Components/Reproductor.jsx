export default function Reproductor({ cancion }) {
    return (
        <iframe
            title="Música"
            className="Musica"
            src={"https://open.spotify.com/embed/track/" + cancion}
            allow="encrypted-media"
        />
    )
}
