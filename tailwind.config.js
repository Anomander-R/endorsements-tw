module.exports = {
  content: ['./*.html'],
  screens:{
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px'
  },
  theme: {
    extend: {
      fontFamily:{
        sans: ['Barlow Semi Condesed', 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {
      translate: ['group-hover', 'hover'],
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
