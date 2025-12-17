const { hairlineWidth } = require('nativewind/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        // Brand colors
        brand: {
          primary: '#0C3265',
          secondary: '#2F80ED',
        },
        // State colors
        state: {
          info: '#2F80ED',
          success: '#27AE60',
          warning: '#E2B93B',
          error: '#EB5757',
          orange: '#F29921',
        },
        // Black & White
        black: {
          1: '#000000',
          2: '#1D1D1D',
          3: '#282828',
        },
        white: '#FFFFFF',
        // Grey scale
        gray: {
          1: '#333333',
          2: '#4F4F4F',
          3: '#828282',
          4: '#A4ABB4',
          5: '#BDBDBD',
          6: '#E0E0E0',
        },
        // Blue colors with states
        blue: {
          light: '#e7ebf0',
          'light-hover': '#dbe0e8',
          'light-active': '#b4bfcf',
          normal: '#0c3265',
          'normal-hover': '#0b2d5b',
          'normal-active': '#0a2851',
          dark: '#09264c',
          'dark-hover': '#071e3d',
          'dark-active': '#05162d',
          darker: '#041223',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      borderWidth: {
        hairline: hairlineWidth(),
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require('tailwindcss-animate')],
};
