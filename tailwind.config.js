module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  variants: {
    textColor: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
  },
  theme: {
    // stroke: theme => ({
    //   'logoLight': theme('colors.msy-blue-100'),
    //   'logoOrig': theme('colors.msy-blue-500'),
    //   'logoDark': theme('colors.msy-blue-900'),
    // }),
    extend: {
      fontFamily: {
        sans:
          '-apple-system, "Helvetica Neue", "Segoe UI", Roboto, Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        quicksand:
          '"Quicksand", sans-serif',
      },
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
        //msy blue
        'msy-blue-100': "#D0DEE8",
        'msy-blue-200': "#A1BDD1",
        'msy-blue-300': "#719CB9",
        'msy-blue-400': "#427BA2",
        'msy-blue-500': "#135A8B",
        'msy-blue-600': "#114F7A",
        'msy-blue-700': "#0E4468",
        'msy-blue-800': "#0C3857",
        'msy-blue-900': "#0A2D46",
        // msy yellow
        'msy-yellow-100': "#FFF3CC",
        'msy-yellow-200': "#FFE799",
        'msy-yellow-300': "#FFDC66",
        'msy-yellow-400': "#FFD033",
        'msy-yellow-500': "#FFC400",
        'msy-yellow-600': "#DFAC00",
        'msy-yellow-700': "#BF9300",
        'msy-yellow-800': "#9F7B00",
        'msy-yellow-900': "#806200",
        // msy green
        'msy-green-100': "#DCFCD8",
        'msy-green-200': "#B9F9B0",
        'msy-green-300': "#95F689",
        'msy-green-400': "#72F361",
        'msy-green-500': "#4FF03A",
        'msy-green-600': "#45D233",
        'msy-green-700': "#3BB42C",
        'msy-green-800': "#319624",
        'msy-green-900': "#28781D",
        // msy pink
        'msy-pink-100': "#FFD1F1",
        'msy-pink-200': "#FFA3E3",
        'msy-pink-300': "#FF76D6",
        'msy-pink-400': "#FF48C8",
        'msy-pink-500': "#FF1ABA",
        'msy-pink-600': "#DF17A3",
        'msy-pink-700': "#BF148C",
        'msy-pink-800': "#9F1074",
        'msy-pink-900': "#800D5D",
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
        'mini': '0.5rem',
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
}
