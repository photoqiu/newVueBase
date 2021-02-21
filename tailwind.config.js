module.exports = {
  purge: ['./src/template/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {}
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
