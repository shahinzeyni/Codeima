/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {

      screens: {
        "4sm":"280px",
        "2sm": "420px",
        "1sm":"480px",
        "sm": "640px",

        "md": "768px",

        "2md": "960px",

        "lg": "1024px",

        "xl": "1280px"
      },
    extend: {
      fontFamily: {
        Dana: "Dana",
        DanaMedium: "Dana Medium",
        DanaDemiBold: "Dana Bold",
        DanaExtraLight: "Dana ExtraLight",
        DanaExtraBold: "Dana ExtraBold",
        DanaFaNumExtraBold:"DanaFaNum ExtraBold",
        DanaFaNumMed:"DanaFaNum Med"
        
      },
      backgroundColor: {
        btn: "#496CFC",
        icon: "#77A4FB",
        whiteColor:"#FFFFFF",
        title:"#2A2D53",
        
      },
      colors: {
        title: "#2A2D53",
        titleDescription:"#3E434D",
        title2: "#9CA3AF",
        des: "#3F4264",
        cblack: "#111827"
      },
      container: {
        center: true,
        padding: {
          "DEFAULT":"1rem",
          "sm": "0rem",

          "md": "0rem",
  
          "2md": "0rem",
  
  
          "xl": "2rem"
        }
      },
     
        // '2xl': { max: '1535px' },
        // 'xl': { max: '1279px' },
        // 'lg': { max: '1023px' },
        // 'md': { max: '767px' },
        // 'sm': { max: '639px' },
        // 'sm-2': {'max': '480px'},
        // 'sm-3': {'max': '430px'},
        // 'sm-4': {'max': '380px'},
        // 'sm-5': {'max': '320px'},
        // 'sm-6': {'max': '280px'},
      }
    
  },

  plugins: []
};
