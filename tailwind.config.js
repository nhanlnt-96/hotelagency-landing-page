/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "ha-primary": "#5CC6B4",
        "ha-secondary": "#46BFAA",
        "ha-dark": "#181818",
        "ha-dark-light": "#1F2937",
        "ha-gray-lightest": "#6B7280",
        "ha-gray-lighter": "#D9D9D9",
        "ha-gray-light": "#F8F8FA",
      },
    },
  },
  plugins: [],
};
