/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-verde-dark',
    'bg-verde-dark/95',
    'bg-tierra-dark',
    'text-crema-light',
    'text-verde-light',
    'text-verde',
    'text-tierra',
    'text-tierra-dark',
    'bg-crema',
    'bg-verde',
  ],
  theme: {
    extend: {
      colors: {
        tierra: {
          dark: '#2b1d14',   // café casi negro para títulos
          DEFAULT: '#5c4636', // café medio para texto de cuerpo (legible)
        },
        verde: {
          dark: '#1c3a2a',   // verde bosque profundo
          DEFAULT: '#2f5d3f',
          light: '#9cc0a6',
        },
        crema: {
          light: '#fbf6ec',  // papel cálido
          DEFAULT: '#e6cfa9', // arena
        },
        terracota: {
          DEFAULT: '#b5532f', // acento / CTA principal
          dark: '#954120',
        },
        naranja: '#ea580c',
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
