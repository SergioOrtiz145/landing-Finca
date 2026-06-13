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
          dark: '#3b1a0a',   // café muy oscuro para títulos
          DEFAULT: '#6b3a2a', // café medio para texto de cuerpo (legible)
        },
        verde: {
          dark: '#065f46',
          DEFAULT: '#10b981',
          light: '#6ee7b7',
        },
        crema: {
          light: '#fff7ed',
          DEFAULT: '#f97316',
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
