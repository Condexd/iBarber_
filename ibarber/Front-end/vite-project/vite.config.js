import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/inicio', // Configura la ruta base a "/inicio"
  plugins: [react()],
  // Resto de tu configuración de Vite
});
