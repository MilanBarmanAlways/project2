/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        Saira: ["Saira", "sans-serif"],
      },
      colors: {
        main_bg_color: "#15171a",
        text_color: "#AAAAAA",
        btn_color: "#2d86f0",
      },
      backgroundImage: {
        heroimg: "url('./assets/herobg.jpeg')",
        jaralaximg1: "url('./assets/portfolio3.jpeg')",
        aboutjaralax: "url('./assets/portfolio3.jpeg')",
        myresumejaralax: "url('./assets/resumejaralax.jpeg')",
        contactjaralax: "url('./assets/contactimg.jpeg')",
        
      },
    },
  },
  plugins: [],
};
