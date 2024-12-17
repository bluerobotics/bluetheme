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
            blueos: {
                'navbar': '#2699d0',
                'primary': '#2699d0',
                'secondary': '#135da3',
                'tertiary': '#4fa483',
            },
            cockpit: {
                'navbar': '#d026b9',
                'primary': '#2699d0',
                'secondary': '#135da3',
                'tertiary': '#4fa483',
            },
        }),
    ]
}

