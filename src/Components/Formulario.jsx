export default function Formulario({ onEnviar, onReset, children }) {
    return <form className="Formulario" onSubmit={onEnviar} onReset={onReset}>{children}</form>
}
