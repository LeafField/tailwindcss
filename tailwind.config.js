/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        normal: "16px",
      },

      colors: {
        body: "#050505",
        "selected-text": "#a3a3ff",
        thema: "#5c318c",
        secondary: "#9191a4",
        badge: "#3f3f51",
        inputBorder: "#565666",
        input: "#2a2a33",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
