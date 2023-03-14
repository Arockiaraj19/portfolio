
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'body':['Poppins']
    },
  
    colors: {
      'primary': '#F9F9F9',
      'secondary': '#363636',
      'white': '#FFFFFF',
      'black':'#141414',
      'grey':'#dfdfdf',
      'dark_grey':'#909090'
      
     
    },
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    
    },
    backgroundImage: {
      'background-pattern': "url('~/assets/bg.png')",
      'top-logo': "url('~/assets/logo1.svg')",
      'user': "url('~/assets/test.svg')"
    },
    extend: {
      boxShadow:{
'generated':'-32px 28px 0px -9px rgba(0,0,0,0.89)'
      },
      animation: {
    after: 'after 2s cubic-bezier(.77,0,.18,1) forwards',
    before: 'before 2s cubic-bezier(.77,0,.18,1) forwards',
    swipe: 'swipe 5000 linear infinite backwards',
      },
      keyframes: {
       swipe:{
      
          '0%': {
            transform: 'translate(0)'
          },
        
          '100%': {
            transform: 'translate(-100%)'
          }
      
        
       },
      after: {
        '0%': { transform: 'translateX(-100%)' },
        '100%': { transform: 'translateX(101%)' },
      },
      before: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(200%)' },
      }
      }
    }
  
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
  }
  ],
}
