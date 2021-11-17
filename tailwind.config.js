module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "mercury-color": "var(--color-bg-mercury)",
        "venus-color": "var(--color-bg-venus)",
        "earth-color": "var(--color-bg-earth)",
        "mars-color": "var(--color-bg-mars)",
        "jupiter-color": "var(--color-bg-jupiter)",
        "saturn-color": "var(--color-bg-saturn)",
        "uranus-color": "var(--color-bg-uranus)",
        "neptune-color": "var(--color-bg-neptune)",
        "background-color": "var(--color-bg-background)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
