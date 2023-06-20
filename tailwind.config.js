/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          white: "#f6e8ea",
          darkpurple: "#1b1724"
        },
        primary: {
          purple: "#b365ee"
        },
        secondary: {
          yellow: "#eee565",
          green: "#95ff85",
          blue: "#76bdff",
          red: "#ff81a1"
        }
      },
      animation: {

      },
      keyframes: {
        
      }
    },
  },
  plugins: [],
}

