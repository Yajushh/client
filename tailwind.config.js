module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Paths to your templates
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      spacing: {
        "1788px": "1788px", // Custom width
        "860px": "860px", // Custom height
        "810px": "810px",
      },
    },
  },
  plugins: [],
};
