/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/vue-final-offcanvas/**/*.vue",
  ],
  theme: {
    extend: {
      margin: {
        '2px': '2px',
        '3px': '3px',
      }
    },
    fill: ({ theme }) => ({
      gray: theme('colors.gray')
    })
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
