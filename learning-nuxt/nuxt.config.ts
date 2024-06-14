import { resolve } from "path";

export default defineNuxtConfig({
  devtools: { enabled: true },

  alias: {
    "@": resolve(__dirname, "/"),
  },

  css: ["~/assets/CSS/App.css"],
  plugins: ["~/plugins/pinia.ts"],
  modules: ["nuxt-svgo", "@nuxt/image"],

  image: {
    domains: ["images.unsplash.com"],
    provider: "ipx",
    providers: {
      cloudinary: {
        baseURL: "https://res.cloudinary.com/demo/image/upload/",
      },
      imgix: {
        baseURL: "https://your-imgix-subdomain.imgix.net/",
      },
    },
    sizes: [320, 420, 768, 1024, 1200],
    modifiers: {
      format: "webp",
      quality: 80,
    },
  },

  app: {
    layoutTransition: {
      name: "layout",
      mode: "",
    },
    pageTransition: {
      name: "page",
      mode: "ease-in",
    },
  },
});
