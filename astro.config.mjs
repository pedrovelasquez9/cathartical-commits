import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: "https://catharticalcommits.com",
    i18n: {
        defaultLocale: "es",
        locales: ["es", "en"],
        routing: {
            prefixDefaultLocale: true
        }
    },
});
