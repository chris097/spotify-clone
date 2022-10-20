/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        basegray: "#292929",
        lightgray: "#121212",
      },
      width: {
        sidebarwidth: "232px"
      },
      fontFamily: {
        sourcesan: "Source Sans Pro, sans-serif"
      }
    },
  },
  plugins: [],
}