tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src//*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeInRight: "fadeInRight 1s ease-out",
        fadeInLeft: "fadeInLeft 1s ease-out",
      },
      keyframes: {
        fadeInRight: {
          "0%": { opacity: 0, transform: "translateX(50px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        fadeInLeft: {
          "0%": { opacity: 0, transform: "translateX(-50px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      },
    },
  },



  plugins: [],
}