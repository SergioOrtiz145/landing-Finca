/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tierra: {
          dark: '#7c2d12',   // naranja-tierra profundo
          DEFAULT: '#c2410c', // terracota vivo
        },
        verde: {
          dark: '#065f46',   // esmeralda oscuro
          DEFAULT: '#10b981', // esmeralda brillante
          light: '#6ee7b7',  // menta vivo
        },
        crema: {
          light: '#fff7ed',  // naranja muy claro
          DEFAULT: '#f97316', // naranja vivo
        },
        naranja: '#ea580c',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        sans: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
