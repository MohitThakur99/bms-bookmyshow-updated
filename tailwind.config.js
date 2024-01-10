/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mohit: {
          50: '#ffeaec',
          100: '#edc8cb',
          200: '#dba3ab',
          300: '#cb8089',
          400: '#bc5d67',
          500: '#a2434e',
          600: '#7f343c',
          700: '#5c242b',
          800: '#381419',
          900: '#1a0308',
        },
        bms: {
          50: '#edf1fc',
          100: '#d3d4e1',
          200: '#b6b8c9',
          300: '#989bb2',
          400: '#7c7f9b',
          500: '#636582',
          600: '#4c4f66',
          700: '#363849',
          800: '#2b3148',
          900: '#0a0a16',
        },
      },
    },
  },
  plugins: [],
}

