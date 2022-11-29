/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "purple-blue": "#605dec",
        wh: "#ffffff",
      },
      backgroundImage: {
        "world-bg": "url('../public/world.png')",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        100: "100%",
      },
      backdropBlur: {
        xs: "1.5px",
      },
      maxWidth: {
        sign: "436px",
        finder: "872px",
        backet: "400px",
      },
      minWidth: {
        finder: "872px",
      },
      maxHeight: {
        sign: "128px",
      },
    },
  },
  plugins: [],
};
