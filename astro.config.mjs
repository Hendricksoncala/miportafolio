import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify'; // O el adaptador que tengas
import path from 'path'; // Añade esta importación de Node

export default defineConfig({
  output: 'server',
  adapter: netlify(),
  // Añade este bloque de configuración de Vite:
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
  },
});