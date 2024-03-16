import type { Config } from "tailwindcss";

const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      gray: colors.gray,
      green: colors.green,
    },
    extend: {
      colors: {
        gray: {
          100: "#e1e1e6",
          300: "#c4c4cc",
          800: "#202024",
          900: "#121214",
        },
        green: {
          500: "#00875f",
          700: "#00b37e",
        },
      },
      fontSize: {
        md: '1.125rem',
        lg: '1.25rem',
        xl: '1.5rem',
        '2xl': '2rem'
      }
    },
  },
  plugins: [],
};
export default config;
