module.exports = {
  // purge: [],
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: [
        'Inter', "Helvetica Neue", 'Arial', "Hiragino Kaku Gothic ProN", "Hiragino Sans", 'Meiryo', 'sans-serif'
      ],
      body: [
        'Inter', "Helvetica Neue", 'Arial', "Hiragino Kaku Gothic ProN", "Hiragino Sans", 'Meiryo', 'sans-serif'
      ],
      mono: [
        'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'
      ]
    },
    extend: {
      colors: {
        'primary': '#5CACF2',
        'bg-primary': '#F2F2F2',
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active']
    },
  },
  plugins: [
  ],
}
