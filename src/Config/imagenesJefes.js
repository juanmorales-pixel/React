const imagenes = import.meta.glob("../Assets/imagenes/jefes/*.{png,jpg,jpeg,webp,gif,svg}", {
    eager: true,
    import: "default",
});

export function buscarImagen(nombre) {
    const ruta = Object.keys(imagenes).find(
        (r) => r.split("/").pop().replace(/\.[^.]+$/, "") === nombre
    );
    return ruta ? imagenes[ruta] : null;
}
