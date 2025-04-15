import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwindcss()],
  base: process.env.VITE_BASE_PATH || "/react-vite-deploy",
  server: {
    proxy: {
      "/api": {
        target: "https://second-456817.el.r.appspot.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
