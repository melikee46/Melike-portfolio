import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#F1EDE1',
        'paper-deep': '#E7E0CD',
        ink: '#34322A',
        'ink-soft': '#6E6A5A',
        sage: '#7C8B6F',
        'sage-deep': '#4F5C42',
        'moss-light': '#B7C1A8',
        line: '#D9D2BC',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        hand: ['"Caveat"', 'cursive'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
