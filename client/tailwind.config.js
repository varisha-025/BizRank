/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'AuthBackground': '#121212',
        'AuthForm': '#151515',
        'AuthButton': '#273c75',
        'AuthSignup':'#495b94',
        'AuthInput':'#1e1e1e'
      })
    },
  },
  plugins: [],
}


