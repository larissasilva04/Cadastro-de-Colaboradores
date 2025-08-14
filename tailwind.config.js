/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'flugo-green': '#22c55e',
        'flugo-green-dark': '#16a34a',
      },
      fontFamily: {
        'sans': ['Poppins', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}