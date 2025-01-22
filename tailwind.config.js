/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "arifin-100": "#FFFDF8",
        "arifin-200": "#FCF1DA",
        "arifin-300": "#E8D6BE",
        "arifin-400": "#D4A744",
        "arifin-500": "#4A2C1A",
      },
    },
    fontFamily: {
      lora: ["Lora", "serif"],
      raleway: ["Raleway", "sans-serif"],
    },
  },
  plugins: [],
};
