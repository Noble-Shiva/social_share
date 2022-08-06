module.exports = {
  purge: ["src/**/*.js", "src/**/*.jsx"],
  theme: {
    themeVariants: ["dark"],
    extend: {
      colors: {
        white: "#fdfdfd",
      },
      borderRadius: {
        xl: "1.5rem",
      },
    },
  },
  variants: {
    backgroundColor: ["responsive", "dark", "hover", "focus"],
    textColor: ["responsive", "dark", "hover", "focus"],
  },
  plugins: [require("tailwindcss-multi-theme")],
};
