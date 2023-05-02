/// <reference types="vitest" />

import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import istanbul from 'vite-plugin-istanbul';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  resolve: {
    alias: {
      src: '/src',
    },
  },
  build: {
    sourcemap: true,
  },
  server: {
    watch: {
      ignored: ['**/coverage/**'],
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setupTests.ts',
    coverage: {
      all: true,
      provider: 'istanbul',
      reporter: ['text'],
      include: ['**/*.{jsx,tsx}'],
      exclude: [...configDefaults.exclude, 'src/entry-client.tsx', 'src/entry-server.tsx'],
    },
  },
});
