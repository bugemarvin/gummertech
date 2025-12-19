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
        primary: {
          DEFAULT: '#003366', // Deep Tech Blue
          dark: '#001F3F',    // Dark Navy
        },
        secondary: {
          DEFAULT: '#4A5568', // Steel Blue/Gray
          light: '#EDF2F7',   // Light Neutral
        },
        tech: {
          blue: '#3B82F6',
          slate: '#1E293B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}