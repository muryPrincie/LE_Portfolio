// tailwind.config.js
module.exports = {
    
    darkMode: 'class',

  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3bcebf',
        secondary: '#8c93e3',
        accent: '#7b5fd8',
        light: '#f4fbfb',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
