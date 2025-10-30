import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; 
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    allowedHosts: [
      'pev.aracati.ce.gov.br',
      'nuti-site-pev.le540s.easypanel.host' // ✅ adiciona seu host
    ],
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
