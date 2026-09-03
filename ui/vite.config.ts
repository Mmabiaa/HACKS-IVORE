import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";

export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    react(),
    tailwindcss(),
    process.env.NODE_ENV === "production"
      ? nitro({
          preset: "cloudflare",
          srcDir: ".",
          scanDirs: ["./src"],
          compatibilityDate: "2024-01-01",
        })
      : undefined,
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": "/src",
    },
    tsconfigPaths: true,
    dedupe: ["react", "react-dom", "@tanstack/react-router", "@tanstack/react-query"],
  },
  server: {
    port: 5173,
    host: true,
    strictPort: false,
  },
});
