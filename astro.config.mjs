// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://chronokairo.github.io/lp-astro-template/',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});