import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        body: ["'Press Start 2P'", 'monospace'],
        headline: ["'Press Start 2P'", 'monospace'],
        code: ['monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        'pixel-blue': '#0066ff',
        'pixel-green': '#00ff00',
        'pixel-red': '#ff0000',
        'pixel-yellow': '#ffff00',
        'pixel-purple': '#9400d3',
        'dark-gray': '#333333',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        pixel: '4px 4px 0px hsl(var(--foreground))',
        'pixel-sm': '2px 2px 0px hsl(var(--foreground))',
        'pixel-light': '4px 4px 0px hsl(var(--foreground) / 0.25)',
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
        blink: {
          '50%': { opacity: '0' },
        },
        'pulse-8bit': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        heartbeat: {
          '0%': { transform: 'scale(1)' },
          '10%': { transform: 'scale(1.03)' },
          '20%': { transform: 'scale(1)' },
          '30%': { transform: 'scale(1.03)' },
          '40%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1)' },
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        blink: 'blink 1s step-end infinite',
        'pulse-8bit': 'pulse-8bit 1s ease-in-out infinite',
        heartbeat: 'heartbeat 2s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require("tailwindcss-debug-screens")],
} satisfies Config;
