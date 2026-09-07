/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0F1E3D",
        "navy-light": "#1B2E57",
        cream: "#F6F1E4",
        gold: "#C6A15B",
        "gold-light": "#DCC28A",
        ink: "#1C1C1C",
      },
      fontFamily: {
        display: ["\"Reem Kufi\"", "sans-serif"],
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "geo-pattern":
          "radial-gradient(circle at 1px 1px, rgba(198,161,91,0.18) 1px, transparent 0)",
      },
      backgroundSize: {
        geo: "22px 22px",
      },
    },
  },
  plugins: [],
};
