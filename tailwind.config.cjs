/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#05070a",
          card: "rgba(15, 23, 42, 0.85)",
          accent: "#2af3e0",
          accentSoft: "rgba(42, 243, 224, 0.18)"
        }
      }
    }
  },
  plugins: []
};

