/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      margin: {
        '128': '50rem'
      },
      colors: {
        'body-purple': '#150a19',
        'navbar-purple': '#511069',
        'stroke-purple': '#740d9a'
      }
    }
  },
  plugins: []
};
