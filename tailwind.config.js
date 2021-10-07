module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        "-10": "-10",
        "-1": "-1",
      },
      colors: {
        "weird-red": "#a8000d",
        "off-white": "#e3e3e3",
        "off-black": "#333333",
        "light-gray": "#adadad",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        mukta: ["Mukta", "Helvetica", "sans-serif"],
        "dm-mono": ["DM Mono", "monospace"],
      },
    },
  },
  variants: {
    extend: {
      transform: ["hover"],
      translate: ["hover"],
      display: ["hover", "group-hover"],
    },
  },
  plugins: [],
};
