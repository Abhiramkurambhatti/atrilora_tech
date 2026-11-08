/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FBF7F1',
        sand: '#F3EBDD',
        'rich-black': '#0E0E0E',
        gold: '#9A7B4F',
        'gold-light': '#C9A66B',
        'gold-dark': '#8A6A3C',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '32px',
        '3xl': '28px',
        '2xl': '24px',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A66B 0%, #8A6A3C 100%)',
        'gold-gradient-h': 'linear-gradient(90deg, #C9A66B 0%, #8A6A3C 100%)',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-fast': 'marquee 15s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'card': '0 4px 32px rgba(154, 123, 79, 0.08), 0 1px 4px rgba(14, 14, 14, 0.04)',
        'card-hover': '0 8px 48px rgba(154, 123, 79, 0.16), 0 2px 8px rgba(14, 14, 14, 0.06)',
        'gold': '0 0 60px rgba(201, 166, 107, 0.25), 0 0 120px rgba(201, 166, 107, 0.1)',
        'gold-sm': '0 4px 24px rgba(154, 123, 79, 0.3)',
      },
    },
  },
  plugins: [],
};
