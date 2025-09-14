import { defineConfig } from 'astro/config'
import autoprefixer from 'autoprefixer'
import sitemap from '@astrojs/sitemap'
import robotsTxt from 'astro-robots-txt'

export default defineConfig({
    devToolbar: {
        enabled: false,
    },
    site: 'https://scheunenhausamsee.de/',
    output: 'static',
    integrations: [
        sitemap(),
        robotsTxt()
    ],
    vite: {
        css: {
            postcss: {
                plugins: [
                    autoprefixer(),
                ],
            }
        },
        build: {
            sourcemap: false, // Remove sourcemaps in production
            chunkSizeWarningLimit: 1000 // Warn for chunks larger than 1MB
        }
    },
})