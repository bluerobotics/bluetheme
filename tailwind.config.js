/** @type {import('tailwindcss').Config} */
const { createThemes } = require('tw-colors');
module.exports = {
    content: [
        "./node_modules/flowbite/**/*.js",
        "./static/**/*.js",
        "./templates/*.html",
        "./templates/**/*.html",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('flowbite/plugin'),
        require('flowbite-typography'),
        createThemes({
            bluetheme: {
                'primary':    '#135da3',  // Mariner Blue
                'secondary':  '#2699d0',  // BR Blue
                'tertiary':   '#012f46',  // Blue Whale
                'quaternary': '#2699d0',  // BR Blue
            },
        }),
    ]
}

