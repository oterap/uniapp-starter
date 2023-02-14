import { resolve } from "path";
import { defineConfig } from "vite";
import Uni from "@dcloudio/vite-plugin-uni";
import UnoCSS from "unocss/vite";

export default defineConfig({
  root: process.cwd(),
  resolve: {
    alias: { "@": resolve(__dirname, "./src") },
  },
  plugins: [Uni(), UnoCSS()],
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: "https://your_api_name.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
