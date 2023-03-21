/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(--font-jakartaSans)"],
        serif: ["var(--font-jakartaSans)"],
      },
    },
  },
  plugins: [],
};

module.exports = config;
