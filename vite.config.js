import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  assetsInclude: [
    "**/*.mp4",
    "**/*.MP4",
    "**/*.png",
    "**/*.PNG",
    "**/*.JPEG",
    "**/*.JPG",
  ], // Include both lowercase and uppercase extensions
});
