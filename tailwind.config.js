/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#23BE5C",

          secondary: "#3EB489",

          accent: "#60db85",

          neutral: "#221F29",

          "base-100": "#FFFFFF",

          info: "#5585D8",

          success: "#3EE0AC",

          warning: "#BB690C",

          error: "#FA2A0A",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
  //...
};
