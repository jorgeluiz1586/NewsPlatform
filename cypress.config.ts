import path from 'path';
import { defineConfig } from 'cypress';
import vitePreprocessor from 'cypress-vite';

export default defineConfig({
    e2e: {
        baseUrl: 'http://localhost:4000',
        supportFile: 'src/tests/cypress/integration/*.{js,jsx,ts,tsx}',
        specPattern: 'src/tests/cypress/integration/*.{js,jsx,ts,tsx}',
        env: {
            baseUrl: 'http://localhost:4000',
            e2e: true,
        },
        setupNodeEvents(on, config) {
            config.env.registered = false;
            on(
                'file:preprocessor',
                vitePreprocessor(path.resolve('./vite.config.ts'))
            )
        },
    },
    defaultCommandTimeout: 10000,
    fileServerFolder: './',
    downloadsFolder: 'src/tests/cypress/downloads',
    fixturesFolder: 'src/tests/cypress/fixtures',
    screenshotsFolder: 'src/tests/cypress/screenshots',
    videosFolder: 'src/tests/cypress/videos',
    component: {
        devServer: {
          framework: 'vue',
          bundler: 'vite',
        },
    },
});