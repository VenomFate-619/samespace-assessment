/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "rgba(255, 255, 255, 0.6000000238418579)",
        tertiary: "rgba(255, 255, 255, 0.08)",
      },
      screens: {
        xs: "360px",
      },
    },
  },
  plugins: [],
};
