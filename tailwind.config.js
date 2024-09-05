/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
    './projects/**/*.{html,ts}', // Escanea todos los archivos HTML y TS dentro de projects/
    './apps/**/*.{html,ts}', // Si tienes un directorio apps o similar, escanear HTML y TS
    '!./node_modules', // Excluye node_modules
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

