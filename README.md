# Portfolio Website

## Architecture Overview

- **Build setup:** Vite powers fast local development and production builds, with React as the UI framework.
- **Entry point:** `index.html` mounts the React app, and `src/main.jsx` boots the application.
- **App shell:** `src/App.jsx` composes the page sections (Hero, About, Highlights, Experience, Contact) and drives the interactive background.
- **Components:** Reusable UI live in `src/components`, each section is a React component using Tailwind classes.
- **Styling:** Tailwind CSS is configured in `tailwind.config.js`, with global styles and animations in `src/index.css`.
- **Assets:** Static files are served from `public/`. Highlight images and metadata live in `public/images` and `public/images/highlights.json`.
- **Animations:** Framer Motion handles section transitions and highlight image fades.

