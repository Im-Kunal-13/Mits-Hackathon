module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm1: "700px",
        md1: "800px",
        md2: "900px",
        lg1: "1100px",
        lg2: "1200px",
        xl: "1280px",
        xl1: "1400px",
        xl2: "1500px",
      },  
      colors: () => ({
        themeBlue1: "#4629DD",
        themeViolet1: "#7F2FE6",
        transparentBlack1: "rgb(0 0 0 / 30%)",
        transparentBlack2: "rgb(0 0 0 / 40%)",
        transparentWhite1: "#ffffff30",
        transparentWhite2: "#ffffff40",
        transparentBlue1: "#4629dd70",
        transparentBlue2: "#4629dd90",
        buttonCyan: "#4676F5"
      }),
      boxShadow: {
        highlightIconHover: "0 0 10px 0px #00000099",
      },
    },
  },
  plugins: [],
};
