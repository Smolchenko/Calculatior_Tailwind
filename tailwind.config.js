// tailwind.config.js
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  // content: ["./src/**/*.{html,js}"],
  // attempt below
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  // darkMode: false, // or 'media' or 'class'
  // purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // custom: {
        color1: "#FFEFD6",
        color2: "#F2DEBA",
        color3: "#3A8891",
        color4: "#0E5E6F",
        // },
      },
      fontSize: {
        sm: "0.875rem", // 14px
        base: "1rem", // 16px
        lg: "1.125rem", // 18px
        xl: "1.25rem", // 20px
        "2xl": "1.5rem", // 24px
        "3xl": "1.875rem", // 30px
        "4xl": "2.25rem", // 36px
        "5xl": "3rem", // 48px
      },
    },
  },
  // variants: {
  //   extend: {},
  // },
  // plugins: []
  // ...
};

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{html,js}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// module.exports = {
//   purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {}
//   },
//   variants: {
//     extend: {}
//   },
//   plugins: []
// };
