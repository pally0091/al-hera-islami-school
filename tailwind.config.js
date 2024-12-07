/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#096B58",
        brandBlue: "#1D9FF3",
        brandRed: "#E63A22",
        brandGold: "#FFD700",
        brandGreen: "#08796b",
      },
    },
  },
  plugins: [],
};
