import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import tailwind from '@astrojs/tailwind';
import path from 'path';

export default defineConfig({
  output: 'server',
  adapter: netlify(),
  integrations: [tailwind()],
  vite: {
    resolve: {
      alias: {
        // Esto fuerza la ruta absoluta real desde la raíz del proyecto
        '@': path.resolve(process.cwd(), './src'),
      },
    },
  },
});