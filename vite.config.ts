import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  root: "./demo",
  server: {
    port: 3000,
  },
  plugins: [react()],
  base: "./",
});
