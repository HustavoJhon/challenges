# [IntiSpaceApp](https://www.spaceappschallenge.org/nasa-space-apps-2024/find-a-team/inti-space/)

> **Website:** https://inti-space.vercel.app/
> **NASA Space Apps Challenge 2024 — Cusco, Perú**

## Arquitectura

```
INTI Space/
├── index.html              # Página de inicio (usa partials)
├── browse.html             # Explorar recursos
├── streams.html            # Recursos descargables
├── profile.html            # Perfil del equipo
├── details.html            # Página de detalle genérica
├── detail_1.html           # Artículo: Imágenes Satelitales
├── detail_2.html           # Artículo: Vapor de Agua
├── detail_3.html           # Artículo: Huracanes 2024
├── detail_4.html           # Artículo: Energía Renovable
├── partials/               # Fragmentos HTML compartidos
│   ├── doc-start.html      # DOCTYPE + <head>
│   ├── header.html         # Barra de navegación
│   ├── footer.html         # Footer
│   ├── scripts.html        # Scripts JS
│   └── doc-end.html        # Cierre de HTML
├── scripts/
│   └── build-pages.mjs     # Genera HTML completo desde partials
├── assets/                 # CSS, JS, imágenes, fuentes
├── vendor/                 # Bootstrap, jQuery
└── dist/                   # Build output (gitignored)
```

## Build System

Las páginas usan marcadores `<!--#include file="partials/header.html" -->` para compartir header/footer/scripts. El build script resuelve estos marcadores y genera HTML estático completo.

```bash
# Build: genera HTML + copia assets a dist/
npm run build

# Dev: build + servidor local
npm run dev

# Preview: servidor local sobre dist/
npm run preview
```

## Deploy (Vercel)

1. `npm run build`
2. Subir el contenido de `dist/` o apuntar Vercel a `dist/` como output directory.

## About the Challenge

In 2015, the United Nations created the 2030 Sustainable Development Goals (SDG) Agenda—a set of 17 goals focused on addressing global concerns such as climate change, global poverty, pollution, inequality, and many more. As we embark on the halfway point of the SDG Agenda, we aim to find new ways to engage youth with the tools available to advance these goals and measure our progress in achieving them. Your challenge is to develop a lesson plan that educates high school students about an SDG, and can be integrated into a science unit that may already be part of the curriculum (e.g., a unit on weather, geology, soil health, etc.).

## Team

- **Gustavo Jhon** — Estudiante de Ingeniería Civil
- Local Event: Cusco, Peru
- Challenge: SDGs in the Classroom
- Languages: Spanish

## Anteproyecto

https://www.canva.com/design/DAGSSutVxVA/
