/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
    theme: {
        extend: {},
        colors: {
            'first' : "#ffff",
            'second' : "#FF000D",
            'third' : "oklch(68.12% 0.2477 224.11)",
            "black" : '#000000',
            "white" : '#ffff',
            "lite_content" : "#73726f",
            "content" : "#48494a",
            "gray" : "#f5efed",
            "dark_gray" : "#d4d6d5", 
            "lite_gray" : "#fafcfb",
            "dark_third" : "#0abaf5",
            "lite_blue" : "#f0f4fc"
        },
        fontFamily: {
            'roboto': ['Roboto', 'sans-serif'],
            "serif" : ['serif']
        }
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["light" ],
      },
}

