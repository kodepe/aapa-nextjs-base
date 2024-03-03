import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },

    colors: {
      black: "#000000",
      white: "#ffffff",
      dark0: "#4b58ff",
      dark1: "#1b2033",
      dark6: "#080f22",
      primary: "#27374D",
      secondary: "#526D82",
      tertiary: "#9DB2BF",
      light: "#DDE6ED",
      error: "#ff2825",
      warning: "#ff9300",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        black: "#000000",
        white: "#ffffff",
        dark0: "#4b58ff",
        dark1: "#1b2033",
        dark6: "#080f22",
        primary: "#27374D",
        secondary: "#526D82",
        tertiary: "#9DB2BF",
        light: "#DDE6ED",
        error: "#ff2825",
        warning: "#ff9300",
      },
      colors: {
        black: "#000000",
        white: "#ffffff",
        dark0: "#4b58ff",
        dark1: "#1b2033",
        dark6: "#080f22",
        primary: "#27374D",
        secondary: "#526D82",
        tertiary: "#9DB2BF",
        light: "#DDE6ED",
        error: "#ff2825",
        warning: "#ff9300",
      },
      borderColor: {
        black: "#000000",
        white: "#ffffff",
        dark0: "#4b58ff",
        dark1: "#1b2033",
        dark6: "#080f22",
        primary: "#27374D",
        secondary: "#526D82",
        tertiary: "#9DB2BF",
        light: "#DDE6ED",
        error: "#ff2825",
        warning: "#ff9300",
      },
      boxShadowColor: {
        black: "#000000",
        white: "#ffffff",
        dark0: "#4b58ff",
        dark1: "#1b2033",
        dark6: "#080f22",
        primary: "#27374D",
        secondary: "#526D82",
        tertiary: "#9DB2BF",
        light: "#DDE6ED",
        error: "#ff2825",
        warning: "#ff9300",
      },
    },
  },
  plugins: [],
};
export default config;
