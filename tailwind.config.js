/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "sub-heading-app": "hsl(276, 100%, 81%)",
        "chat-left": "hsl(276, 55%, 52%)",
        "chat-right": "hsl(271, 15%, 43%)",
        "placeholder-text": "hsl(206, 6%, 79%)",
        "main-heading": "hsl(271, 36%, 24%)",
        "paragraph": "hsl(270, 7%, 64%)",

        "gradient-magenta": "hsl(293, 100%, 63%)",
        "gradient-violet": "hsl(264, 100%, 61%)",

        "White": "hsl(0, 0%, 100%)",
        "app-bg": "hsl(270, 20%, 96%)",
        "submit-btn-bg": "hsl(271, 36%, 24%)",
        "radio-btn-outline": "hsl(289, 100%, 72%)",
      }, 
      fontFamily: {
        "rubik": "Rubik, sans-serif"
      }
    },
  },
  plugins: [],
}

