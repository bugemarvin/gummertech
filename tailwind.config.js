/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        techBlue: {
          DEFAULT: '#0A2540',
          dark: '#05192D',
          light: '#1E3A5F',
        },
        steelBlue: {
          DEFAULT: '#4F6B8C',
          light: '#7B93B0',
        },
        neutral: {
          offWhite: '#F8FAFC',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};