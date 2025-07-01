// tailwind.config.js
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{html,js}", // adjust path depending on your project structure
    ],
    theme: {
      extend: {},
    },
    plugins: [require("daisyui")],
  };
  