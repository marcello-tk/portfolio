// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  fonts: [{
    provider: fontProviders.google(),
    name: "Fustat",
    cssVariable: "--ff-sans",
    styles: ["normal"],
    weights: ["300 800"],
    fallbacks: ["Tahoma", "Segoe UI", "sans-serif"]
  }]
});
