import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: 'https://ianlin09.github.io',
    base: 'profolio',
    outDir: './dist',
    publicDir: './public',
    server: {
        host: '0.0.0.0',  // Required for Docker
        port: 4000
    },
    integrations: [react(), tailwind({
        applyBaseStyles: false,
    })],

    devToolbar: {
        enabled: false
    }
});