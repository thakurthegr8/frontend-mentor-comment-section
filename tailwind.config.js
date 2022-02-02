module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "moderate-blue": "#5457B6",
          "soft-red": "#ed6468",
          "light-grayish-blue": "#c3c4ef",
          "pale-red": "#ffb8bb",
        },
        neutral: {
          "dark-blue": "#324152",
          "grayish-blue": "#67727E",
          "light-gray": "hsl(223, 19%, 93%)",
          "very-light-gray": "hsl(228, 33%, 97%)",
          white: "hsl(0, 0%, 100%)",
        },
      },
    },
  },
  plugins: [],
};
