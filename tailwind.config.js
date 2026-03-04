/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0D10',
        surface: '#11151B',
        'text-primary': '#F5F7FA',
        'text-secondary': '#C9D1D9',
        accent: '#B11226',
        'accent-secondary': '#D7A21A',
      },
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '20px',
      },
      boxShadow: {
        card: '0 4px 24px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}
