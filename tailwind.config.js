/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        button: "#3662E3",
        hoverButton: "#7CA9F3",
        bgBox: "#121826cc",
        textSelect: "#4D5562",
        textDark: "#212936cc",
        borderButton: "#CDD5E0",
      },
    },
  },
  plugins: [],
};
