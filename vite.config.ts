import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    },
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            // Vendor libraries - rarely change, cache aggressively
            if (id.includes('node_modules')) {
              if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
                return 'react-vendor';
              }
              if (id.includes('lucide-react')) {
                return 'icons';
              }
              // Other node_modules
              return 'vendor';
            }

            // Home page components - frequently viewed
            if (id.includes('/components/Hero') ||
              id.includes('/components/InfoCards') ||
              id.includes('/components/VCMessageSection') ||
              id.includes('/components/AboutSection')) {
              return 'home-components';
            }

            // Common utilities - used across pages
            if (id.includes('/components/Navbar') ||
              id.includes('/components/Footer') ||
              id.includes('/components/TopBar') ||
              id.includes('/components/FormalHeader')) {
              return 'layout-components';
            }

            // Chatbot - optional feature
            if (id.includes('/components/Chatbot')) {
              return 'chatbot';
            }
          },
        },
      },
      chunkSizeWarningLimit: 1000,
      sourcemap: false,
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom', 'lucide-react'],
    },
  };
});
