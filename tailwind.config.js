/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./node_modules/flowbite-react/**/*.js', './components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        sm: '5px 5px 0px 0px rgba(0, 0, 0, 1)',
        md: '10px 10px 0px 0px rgba(0, 0, 0, 1)',
      },
      dropShadow: {
        'neolg': '0 10px 10px rgba(0, 0, 0, 1)',
        'neomd': '0 5px 5px rgba(0, 0, 0, 1)',
	  },
    },
  },
  plugins: [
	  require("flowbite/plugin")
  ],
}
