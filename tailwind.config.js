/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'title-text': '#0b2629ff',
      'gray': '#f5f5f5ff',
      'green': '#438f79ff',
      'darkgreen': '#0d332bff',
      'lightgreen': '#defff2ff',
      'lightblue': '#edf4f7ff',
      'white': '#ffff',
      'goldenyellow': '#edc00cff'

    },
    screens: {
      'sm': [

        { 'max': '950px' },

      ],
      // => @media (min-width: 640px) { ... }

      // => @media (min-width: 768px) { ... }

      'lg': [

        { 'max': '1023' },

      ],
      // => @media (min-width: 1024px) { ... }


      // => @media (min-width: 1280px) { ... }
    },

    extend: {},
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

