import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [react(), dts({ insertTypesEntry: true })],
  build: {
    lib: {
      // Головний файл нашої бібліотеки
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'UiCookieButton',
      // Формати, в які збирається код (ESM та CommonJS)
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      // Переконуємось, що react не потрапить у збірку
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
