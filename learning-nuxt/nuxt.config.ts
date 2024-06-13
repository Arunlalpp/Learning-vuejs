// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  devtools: { enabled: true },

  alias: {
    "@": resolve(__dirname, "/"),
  },

  css: ["~/assets/CSS/App.css"],
  plugins: ["~/plugins/pinia.ts"],
  modules: ["nuxt-svgo"],
  app: {
    /* Layout Transitions */
    layoutTransition: {
      name: "layout",
      mode: "",
    },
    /* Page Transitions */
    pageTransition: {
      name: "page",
      mode: "ease-in",
    },
  },
});
