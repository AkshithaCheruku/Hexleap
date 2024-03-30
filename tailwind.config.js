/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dimgray: "#525965",
        gainsboro: {
          "100": "#dfdfdf",
          "200": "#d9d9d9",
        },
        black: "#000",
        white: "#fff",
        cornflowerblue: "#2c9cf0",
        darkslategray: {
          "100": "#3b3e47",
          "200": "#222d3a",
        },
        teal: "#006555",
        gray: {
          "100": "#292b32",
          "200": "#1d1d1f",
        },
        dodgerblue: "#738fff",
        whitesmoke: "#f7f7f8",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        poppins: "Poppins",
      },
      borderRadius: {
        "81xl": "100px",
        "10xs": "3px",
      },
    },
    fontSize: {
      "smi-7": "0.794rem",
      sm: "0.875rem",
      mid: "1.063rem",
      "31xl": "3.125rem",
      "smi-8": "0.8rem",
      xl: "1.25rem",
      xs: "0.75rem",
      "5xl": "1.5rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
