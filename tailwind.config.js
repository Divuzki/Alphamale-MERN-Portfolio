module.exports = {
  darkMode: "media", // or 'media' or 'class'
  mode: "jit",
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        body: "#000000",
        black: "#17171F",
        "selected-text": "#A3A3FF",
        theme: "#3F3FFF",
        nav: "#404053",
        secondary: "#9191A4",
        badge: "#3F3F51",
        "input-border": "#565666",
        input: "#2A2A35",
      },
      fontFamily: {
        poppins: ["'Poppins'", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
};
