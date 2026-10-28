import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves project sites under /<repo-name>/
  base: process.env.GITHUB_ACTIONS ? "/gestion-stock-nov2026/" : "/",
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
});
