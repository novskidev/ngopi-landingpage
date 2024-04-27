/** @type {import('tailwindcss').Config} */
import ngopiColors from "./src/assets/tailwindconfig";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: ngopiColors,
    },
  },
  plugins: [],
};
