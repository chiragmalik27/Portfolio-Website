import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',  // ✅ this fixes 404 issues in most Vercel/Netlify deployments
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
