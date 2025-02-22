/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FFFDF1',
        sand: {
          50: '#FAF8E1',
          100: '#F5F2D0',
          200: '#E6E1B0',
        },
        coffee: {
          600: '#8B7355',
          700: '#6B563F',
          800: '#4B3927',
        },
        terra: {
          500: '#D35400',
          600: '#A04000',
          700: '#873600',
        },
      },
    },
  },
  plugins: [],
};