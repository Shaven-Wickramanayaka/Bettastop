import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/bettastop/",
  plugins: [vue(), tailwindcss()],
  rollupOptions: {
    input: {
      main: "./index.html",
    },
  },
});
