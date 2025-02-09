/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4E91E6",
        secondary: "#718e9c",
        disabled: "#bfccd3",
        "input-placeholder": "#f2f5f6",
        default: "#253035",
        error: "#ff0d3b",
        "modal-background": "#25303580",
        border: "#CCD6DC",
        success: "#00AB84",
      },
      spacing: {
        5: "20px",
        15: "60px",
        21: "64px",
        23: "92px",
        37: "148px",
        125: "500px",
        "21px": "21px",
      },
    },
  },
  plugins: [],
};
