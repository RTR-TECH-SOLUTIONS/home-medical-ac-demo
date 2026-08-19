// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// Preview pe GitHub Pages: site-ul e servit dintr-un subfolder, de aceea `base`.
// La mutarea pe hosting propriu (Hostinger), se scoate `base` sau se pune '/'.
// Toate căile interne trec prin helper-ul `url()` din src/data/site.ts, deci nu e nevoie
// de alte modificări.
export default defineConfig({
  site: 'https://rtr-tech-solutions.github.io',
  base: '/home-medical-ac-demo',
  vite: {
    plugins: [tailwindcss()]
  }
});
