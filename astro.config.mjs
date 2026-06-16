// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  fonts: [{
    provider: fontProviders.google(),
    name: "Lexend Deca",
    cssVariable: "--ff-sans",
    styles: ["normal"],
    weights: ["200 900"],
    fallbacks: ["sans-serif"]
  }]
});
