// Carga todas las imágenes de src/Assets/imagenes/jefes/ sin importar la extensión
const imagenes = import.meta.glob("../Assets/imagenes/jefes/*.{png,jpg,jpeg,webp,gif,svg}", {
    eager: true,
    import: "default",
});

// Devuelve la imagen cuyo nombre (sin extensión) coincide con el slug del jefe, o null si no existe
export function buscarImagen(nombre) {
    const ruta = Object.keys(imagenes).find(
        (r) => r.split("/").pop().replace(/\.[^.]+$/, "") === nombre
    );
    return ruta ? imagenes[ruta] : null;
}
