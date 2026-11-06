# Hallownest

Galería de jefes de Hollow Knight y enciclopedia en español (jefes, personajes, áreas, amuletos y habilidades).

## Cómo correrlo

```
npm install
npm start
```

`npm start` enciende dos programas a la vez: el servidor Express (`app.js`, puerto 3000) y Vite (la página React, puerto 5173).
Abre http://localhost:5173. La página pide los datos a `/api/...` y Vite los reenvía a Express.

## Carpetas (programación por capas)

- `src/Components`: átomos (una sola etiqueta: título, texto, botón, campo...)
- `src/Orquestadores`: unen átomos (tarjeta, formulario, navegación...)
- `src/Pages`: páginas completas
- `src/Hook`: la lógica (estado, fetch, navegación)
- `src/Config`: listas y textos fijos
- `glosario.js`: nombres del juego en español que usa el servidor al traducir
