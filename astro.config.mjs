// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: 'https://lozip95.github.io',
    base: 'static-portfolio',
    vite: { plugins: [tailwindcss()], },
});
