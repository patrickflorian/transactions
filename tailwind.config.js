const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],   
    plugins: [
        require('@tailwindcss/forms'),
    ],
}
