import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";

export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    react(),
    tailwindcss(),
    tsConfigPaths(),
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
    dedupe: ["react", "react-dom", "@tanstack/react-router", "@tanstack/react-query"],
  },
  build: {
    target: "esnext",
    rollupOptions: {
      input: {
        main: "./index.html",
      },
    },
  },
  server: {
    port: 5173,
    host: true,
    strictPort: false,
  },
});
