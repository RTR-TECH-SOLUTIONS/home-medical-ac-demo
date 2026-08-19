// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// Site-ul de producție rulează pe domeniul propriu, în rădăcină.
// Pentru preview-ul de pe GitHub Pages (servit dintr-un subfolder) se pun în CI
// variabilele SITE_URL și SITE_BASE. Toate căile interne trec prin helper-ul
// `url()` din src/data/site.ts, deci nu e nevoie de alte modificări.
const site = process.env.SITE_URL || 'https://homemedicalac.ro';
const base = process.env.SITE_BASE || '/';

export default defineConfig({
  site,
  base,
  integrations: [
    sitemap({
      // Paginile legale sunt pe `noindex`, deci nu au ce căuta nici în sitemap.
      filter: (page) =>
        !/\/(politica-de-cookies|politica-de-confidentialitate|termeni-si-conditii)\/?$/.test(page),
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
