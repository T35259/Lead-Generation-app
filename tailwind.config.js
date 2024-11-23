/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#0B0033',
          800: '#1A0066',
          700: '#2600B3',
          600: '#3300FF',
          500: '#4D1AFF',
        },
        accent: {
          500: '#FF3366',
          400: '#FF4D7F',
        },
        electric: {
          400: '#00F6FF',
          300: '#33F7FF',
        },
      },
    },
  },
  plugins: [],
};