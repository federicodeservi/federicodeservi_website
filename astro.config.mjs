import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://federicodeservi.github.io',
  base: '/federicodeservi_website',
  output: 'static',
  build: { format: 'directory' },
  integrations: [sitemap()],
  vite: {
    ssr: {
      noExternal: ['gsap', 'lenis', 'ogl'],
    },
  },
});
