export const inicial = { Nombre: "", Imagen: "", Descripcion: "", Color: "" };

export const Etiquetas = [
    { etiqueta: "Nombre", tipo: "text", holder: "Ana" },
    { etiqueta: "Imagen", tipo: "text", holder: "URL" },
    { etiqueta: "Descripcion", tipo: "text", holder: "Descripcion" },
    { etiqueta: "Color", tipo: "text", holder: "Hexa o nombre" },
];

export const crearBotones = (onVolver) => [
    { tipo: "submit", nombre: "Enviar" },
    { tipo: "button", nombre: "Volver", onClick: onVolver },
    { tipo: "reset", nombre: "Reset" },
];
