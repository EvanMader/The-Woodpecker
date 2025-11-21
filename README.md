# The Woodpecker Marketing Site

This repository hosts a standard Node + Vite + React single-page site tailored for studio/boutique business use. It includes a sticky header, hero, stats, services, testimonials, CTA, and contact sections composed from small React components backed by simple data files.

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` to preview changes. Run `npm run build` to produce the optimized assets inside `dist/`.

## Structure

- `src/components` – stateless building blocks (header, hero, services, testimonials, CTA, contact, footer, etc.)
- `src/data` – structured content for services and testimonials for easy editing
- `src/App.jsx` – assembles the landing page layout
- `src/App.css` & `src/index.css` – unified styling tokens and layout rules

Feel free to swap text/assets for your business or expand additional sections using the same component-first approach.
