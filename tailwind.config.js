/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          200: 'rgba(37, 37, 37, 0.8)',
          500: '#252525',
          700: '#1c1c1c'
        },
        whitePro:'rgba(255, 255, 255, 0.8)'
      },
      fontSize: {
        26: 26,
        32: 32
      },
      gap: {
        118: 118
      },
      borderRadius: {
        40: 40
      },
      inset: {
        15: '12%',
        35: '35%',
      },
      animation:{
        poper:'popation 3s infinite linear alternate',
        show:'show .5s linear',
        down:'down .5s linear'
      },
      keyframes:{
        popation:{
          '0%':{
            transform: 'translateY(-10px)'
          },
          '100%':{
            transform: 'translateY(10px)'
          },
        },
        show:{
          '0%':{
            opacity: '0'
          },
          '100%':{
            opacity: '1'
          },
        },
        down:{
          from:{
            transform: 'translateY(-20px)',
          },
          to:{
            transform: 'translateY(0)'
          }
        }
      }
    },
    fontFamily: {
      'avenir': ['avenir', 'arial'],
      'avenir-book': ['avenir-book', 'arial']
    }
  },
  plugins: [],
}

