module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        main: "#1F2937",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif"],
        raj: ["Rajdhani", "sans-serif"],
      },
      screens: {
        "8xl": "1400px",
        "max-midlle": { max: "1050px" },
        "max-md": { max: "768px" },
        "max-sm": { max: "640px" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
