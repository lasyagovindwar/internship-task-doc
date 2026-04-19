import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import { resolve } from 'path';
import { readFileSync } from 'fs';
import Handlebars from 'handlebars';

// Load content.json at build/dev time so Handlebars can use it
const content = JSON.parse(
  readFileSync(resolve(__dirname, 'src/data/content.json'), 'utf-8')
);

// Register custom helpers BEFORE the plugin is created
// eq: equality check used in {{#if (eq this.type "cards")}} etc.
Handlebars.registerHelper('eq', (a, b) => a === b);

export default defineConfig({
  root: 'src',
  publicDir: resolve(__dirname, 'public'),

  build: {
    outDir: resolve(__dirname, 'docs'),
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, 'src/index.html'),
    },
  },

  plugins: [
    handlebars({
      // Where to look for partials (header.hbs, footer.hbs, etc.)
      partialDirectory: resolve(__dirname, 'src/templates/partials'),

      // Inject content.json data into every template as context
      context(pagePath) {
        return content;
      },

      // Pass in our custom helpers so the plugin uses the same Handlebars instance
      helpers: {
        eq: (a, b) => a === b,
      },
    }),
  ],

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
