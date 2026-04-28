import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://federicodeservi.github.io',
  base: '/federicodeservi_website',
  output: 'static',
  build: { format: 'directory' },
  integrations: [mdx(), sitemap()],
  vite: {
    ssr: {
      noExternal: ['gsap', 'lenis', 'ogl'],
    },
  },
});
