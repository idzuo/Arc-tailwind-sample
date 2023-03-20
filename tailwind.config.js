/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html"],
    theme: {
        fontFamily: {
            sans: ['Rubik', 'sans-serif'],
            serif: ['Prata', 'serif']
        },
        extend: {
            screens: {
                '3xl': '1920px'
            },
            spacing: {
                '10.25': '2.563rem',
                '11.25': '2.813rem',
                '12.5': '3.125rem',
                '13': '3.25rem',
                '13.75': '3.438rem',
                '15.75': '3.938rem',
                '16.75': '4.188rem',
                '17': '4.25rem',
                '18': '4.5rem',
                '19': '4.75rem',
                '22.25': '5.563rem',
                '27.25': '6.813rem',
                '31.5': '7.875rem',
                '32.75': '8.188rem',
                '50': '12.5rem',
                '54.5': '13.625rem',
                '62.5': '15.625rem',
                '74': '18.563rem',
                '78': '19.688rem',
                '89': '22.25rem',
                '99': '24.75rem',
                '105': '26.25rem',
                '109.25': '27.313rem',
                '114.25': '28.563rem',
                '120.5': '30.125rem',
                '149': '37.25rem',
                '182': '45.688rem',
                '193.75': '48.438rem',
                '202.5': '50.625rem',
                '231.5': '57.875rem',
                '234.5': '58.625rem',
                '240': '60rem',
                '297': '74.313rem',
                '322': '80.5rem',
                '382': '95.5rem',
            },
            backgroundImage: {
                'hero': "url('/assets/rectangle-14.jpg')",
                'blog1': "url('/assets/blog1.jpg')",
                'blog2': "url('/assets/blog2.jpg')",
                'blog3': "url('/assets/blog3.jpg')",
            },
            colors: {
                'default': '#939393',
                'primary': '#201f1f',
                'textDefault': '#363535',
                'hover': '#91795c',
                'light-grey': '#dedede',
                'dirty-white': '#fcfcfc',
                'footer-bg': '#f0f0f0',
                'footer-text': '#5b5b5b'
            },
            lineHeight: {
                'light': '1.1',
                'large': '2.26'
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}