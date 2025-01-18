/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
      colors: {
        // Light mode colors
        primary: {
          DEFAULT: '#ffffff',
          dark: '#1a1a1a',
        },
        secondary: {
          DEFAULT: '#f3f4f6',
          dark: '#2d2d2d',
        },
        // Adding a dimmed dark mode variant
        dim: {
          DEFAULT: '#242424',
          lighter: '#2d2d2d',
          darker: '#1a1a1a',
        },
        text: {
          DEFAULT: '#1a1a1a',
          dark: '#ffffff',
          muted: '#6b7280',
          'dark-muted': '#9ca3af',
        },
      },
    },
  },
  plugins: [],
}