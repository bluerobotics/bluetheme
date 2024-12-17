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
                'green-kelp': '#4fa483',
                'blue-br': '#2699d0',
                'blue-mariner': '#135da3',
            },
            cockpit: {
                'green-kelp': '#924fa4',
                'blue-br': '#528846',
                'blue-mariner': '#8f5656',
            },
        }),
    ]
}

