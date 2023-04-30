import { defineConfig } from 'cypress';
import registerCodeCoverageTest from '@cypress/code-coverage/task';

export default defineConfig({
  env: {
    codeCoverage: {
      exclude: 'cypress/**/*.*',
    },
  },
  video: false,
  e2e: {
    baseUrl: 'http://localhost:5173',
    setupNodeEvents(on, config) {
      registerCodeCoverageTest(on, config);

      return config;
    },
  },
});
