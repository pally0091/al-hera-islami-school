/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e3a8a",
        secondary: "#f4c95d",
        background: "#f3f4f6",
        accent: "#2d8c7c",
      },
    },
  },
  plugins: [],
};
