/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./node_modules/flowbite/**/*.js",
        "./templates/*.html",
        "./templates/**/*.html",
    ],
    theme: {
        colors: {
            'green-kelp': '#4fa483',
            'blue-br': '#2699d0',
            'blue-mariner': '#135da3',
        },
        extend: {},
    },
    plugins: [
        require('flowbite/plugin')
    ]
}

