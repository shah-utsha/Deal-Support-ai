/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        xl: "1200px",
        "2xl": "1320px",
      },
    },
    extend: {},
  },
  plugins: [],
};
