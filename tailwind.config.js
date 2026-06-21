module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        bg2: 'var(--color-bg2)',
        bg3: 'var(--color-bg3)',
        card: 'var(--color-card)',
        foreground: 'var(--color-foreground)',
        muted: 'var(--color-muted)',
        accent: 'var(--color-accent)',
        'accent2': 'var(--color-accent-2)',
        'accent-soft': 'var(--color-accent-soft)',
        'accent-muted': 'var(--color-accent-muted)',
        'cta-text': 'var(--color-cta-text)',
        border: 'var(--color-border)',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        display: ['var(--font-display)'],
        mono: ['var(--font-mono)'],
      }
    }
  },
  plugins: [],
}

