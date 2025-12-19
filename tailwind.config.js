/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gummer: {
          blue: '#004a99',
          navy: '#001f3f',
          steel: '#4682B4',
          light: '#F8FAFC',
          dark: '#0F172A'
        }
      }
    },
  },
  plugins: [],
}