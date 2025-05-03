/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./presentation/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {

      colors:{
        primary: "#49129C",
        secondary: {
          default: "#B40086",
          100: "#F5E6F9",
          200: "#E1BEE7",
          300: "#CE93D8",
          400: "#BA68C8",
          500: "#AB47BC",
          600: "#8E24AD",
          700: "#7B1FA2",
        },
        tertiary: {
          default: "#FFD700",
          100: "#FFFDE7",
          200: "#FFF9C4",
          300: "#FFF59D",
          400: "#FFF176",
        }
      }

    },
  },
  plugins: [],
}

