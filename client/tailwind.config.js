/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    colors: {
      "white-color": "var(--white-color)",
      "primary-color": "var(--primary-color)",
      "secondary-color": "var(--secondary-color)",
      "section-bg-color": "var(--section-bg-color)",
      "custom-button-bg-color": "var(--custom-button-bg-color)",
      "custom-button-bg-hover-color": "var(--custom-button-bg-hover-color)",
      "dark-color": "var(--dark-color)",
      "p-color": "var(--p-color)",
      "border-color": "var(--border-color)",
      "link-hover-color": "var(--link-hover-color)",

    }
    , extend: {},
  },
  plugins: [],
}

