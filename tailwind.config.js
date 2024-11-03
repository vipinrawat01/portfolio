/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      margin: {
        320: "320px",
      },

      minHeight: {
        '80' : '20rem',
        '85' : '22rem'
      },
      

      width: {
        190: "190px",
        275: "275px",
        300: "300px",
        340: "340px",
        350: "350px",
        656: "656px",
        880: "880px",
        508: "508px",
      },
      height: {
        80: "80px",
        200: "200px",
        300: "300px",
        340: "340px",
        370: "370px",
        420: "420px",
        510: "510px",
        600: "600px",
        685: "685px",
        800: "800px",
        "90vh": "90vh",
      },
      colors: {
        navBar: "#1d1e25",
        primary: "#000000",
        textBase: "#8f9091",
      },
    },
  },
  plugins: [],


};

