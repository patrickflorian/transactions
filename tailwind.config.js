const colors = require('tailwindcss/colors')

module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      './src/**/*.{js,jsx,ts,tsx}',
    ],
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
      ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            width: {
                '70': '18rem',
            },
            padding: {
                '70': '18rem',
            },
            spacing: {
                '70': '18rem',
            },
            transitionProperty: {
                'height': 'height'
            },
            colors: {
                ...colors,
                green: {
                    '50': '#f3f8ed',
                    '100': '#e6f1db',
                    '200': '#bbf7d0',
                    '300': '#cee2b6',
                    '400': '#b5d492',
                    '500': '#84b749',
                    '600': '#77a542',
                    '700': '#6a923a',
                    '800': '#5c8033',
                    '900': '#4f6e2c',
                    DEFAULT: '#84b749'
                },
                green1: {
                    '50': '#ffe6f1',
                    '100': '#ffcce2',
                    '200': '#ff9ac5',
                    '300': '#ff67a8',
                    '400': '#ff358b',
                    '500': '#ff026e',
                    '600': '#ff1b7d',
                    '700': '#ff358b',
                    '800': '#ff4e9a',
                    '900': '#ff67a8',
                    DEFAULT: '#ff026e'
                },
                green2: {
                    '50': '#ffeee6',
                    '100': '#ffddcc',
                    '200': '#ffbc99',
                    '300': '#ff9a66',
                    '400': '#ff7933',
                    '500': '#ff5700',
                    '600': '#ff681a',
                    '700': '#ff7933',
                    '800': '#ff894d',
                    '900': '#ff9a66',
                    DEFAULT: '#ff5700'
                }
            }
        },
        graphicUser: {}
    },
    variants: {
        extend: {},
        height: ['responsive', 'hover', 'focus']
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}
