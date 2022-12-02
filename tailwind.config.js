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
        primarygray: "#b3b3b3",
        secondarygray: "rgba(0,0,0,.7)",
        circlegray: "rgb(41, 41, 41)",
        basergba: "rgba(255, 255, 255, 0.1)",
        nextgray: "#535353",
        cardgray: "#181818",
        hovergray: "#242424",
        bordergray: "#282828",
        primarygreen: "#1ed760",
      },
      animation: {
        slideup: 'slideup 1s ease-in-out',
      },
      width: {
        sidebarwidth: "232px"
      },
      fontFamily: {
        sourcesan: "Source Sans Pro, sans-serif"
      },
      keyframes: {
        slideup: {
          from: { opacity: 0, transform: 'translateY(25%)' },
          to: { opacity: 1, transform: 'none' },
        },
      }
    },
  },
  plugins: [],
}