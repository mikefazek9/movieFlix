/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'main-purple': '#C200FB',
        'dark-bg': '#493548',
        'sub-green': '#80B192',
        'lite-green': '#A1E887',
      },
    },
  },
  plugins: [],
}
