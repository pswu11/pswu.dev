/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        base: {
          white: "#f6e8ea",
          darkpurple: "#1b1724",
          layer: "#f6e8ea05",
        },
        primary: {
          purple: "#b365ee",
        },
        secondary: {
          yellow: "#eee565",
          green: "#95ff85",
          blue: "#76bdff",
          red: "#ff81a1",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography", "@tailwindcss/line-clamp"),
  ],
}
