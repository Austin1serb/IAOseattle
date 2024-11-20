import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "475px",
      "md-lg": "900px",
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          DEFAULT: "#03dac6",
          light: "#d4f6f2",
          dark: "#00b798",
        },
        secondary: {
          DEFAULT: "#0F75E0",
          light: "#4fb1e4",
          dark: "#102a71",
          darktransparent: "#102a7190",
        },
        accent: "#c503da",
        background: "#FDFCFD",
        surface: "#FFFFFF",
        error: "#B00020",
        "on-primary": "#000000",
        "on-secondary": "#FFFFFF",
        "on-background": "#000000",
        "on-surface": "#000000",
        "on-error": "#FFFFFF",
        "on-light": "#000000",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".flex-center": {
          display: "flex",
          "align-items": "center",
          "justify-content": "center",
        },
      });
    }),
  ],
};
export default config;
