import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "#F6FCDF",
        "primary-b": "#c2eabd",
        "primary-c": "#35ce8d",
        secondary: "#859F3D",
        accent: "#31511E",
        "accent-b": "#297373",
        dark: "#1A1A19",
      },
    },
  },
  plugins: [],
};
export default config;
