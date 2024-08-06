/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Tailwind CSS files in the app folder
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Tailwind CSS files in components
        "./layout/**/*.{js,ts,jsx,tsx,mdx}", // Tailwind CSS files in the layout folder at the root level
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
