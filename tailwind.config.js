/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        magenta: "#d946ef",
        cyan: "#00fff7",
        pink: "#ff32cd",
        "neon-purple": "#8b5cf6",
      },
      fontFamily: {
        syncopate: ["'Syncopate'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
