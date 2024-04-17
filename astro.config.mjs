import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'h-sridharan.github.io',
  integrations: [tailwind(), react()],
  vite: {
    ssr: {
      noExternal: ["react-icons"],
    },
  },
});
