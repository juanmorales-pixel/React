const acciones = {
    Issac: () => {
        alert('isaac and his mother , live alone in a small house on a hill , the life was a simple');
    },
    Recargar: () => {
        window.location.reload();
    },
};

export default function useFormulario(){
    return {acciones}
}
