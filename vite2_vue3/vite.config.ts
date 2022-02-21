import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

const resolve = (paths: string) =>
  fileURLToPath(new URL(paths, import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": resolve("./src"),
      "@v": resolve("./src/views"),
    },
  },
});
