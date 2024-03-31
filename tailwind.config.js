module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    // screens: { md: { max: "1050px" }, sm: { max: "650px" } },
    extend: {
      colors: {
        current: "#FFFFFF",
        transparent: "transparent",
        white: "#FFFFFF",
        black: "#1C2434",
        "black-2": "#010101",
        body: "#64748B",
        bodydark: "#AEB7C0",
        bodydark1: "#DEE4EE",
        bodydark2: "#8A99AF",
        primary: "#3C50E0",
        secondary: "#80CAEE",
        stroke: "#E2E8F0",
        gray: "#EFF4FB",
        graydark: "#20C5F2",
        "gray-2": "#F7F9FC",
        "gray-3": "#FAFAFA",
        whiten: "#F1F5F9",
        whiter: "#F5F7FD",
        boxdark: "#24303F",
        "boxdark-2": "#1A222C",
        strokedark: "#2E3A47",
        "form-strokedark": "#3d4d60",
        "form-input": "#1d2a39",
        "meta-1": "#DC3545",
        "meta-2": "#EFF2F7",
        "meta-3": "#10B981",
        "meta-4": "#20C5F2",
        "meta-5": "#259AE6",
        "meta-6": "#FFBA00",
        "meta-7": "#FF6766",
        "meta-8": "#F0950C",
        "meta-9": "#E5E7EB",
        success: "#219653",
        danger: "#D34053",
        warning: "#FFA70B",
        gray: {
          100: "#fbfbfb",
          200: "#fafafa",
          300: "#212121",
          400: "rgba(33, 33, 33, 0.3)",
          500: "rgba(0, 0, 0, 0.3)",
          600: "rgba(1, 17, 29, 0.6)",
          700: "rgba(1, 17, 29, 0.1)",
          800: "rgba(0, 0, 0, 0.1)",
          900: "rgba(255, 255, 255, 0.5)",
          1000: "rgba(0, 0, 0, 0.7)",
          1100: "rgba(0, 0, 0, 0.8)",
          1200: "rgba(0, 0, 0, 0.5)",
        },
        whitesmoke: {
          100: "#f6f7f9",
          200: "#f6f6f6",
        },
        white: "#fff",
        black: "#000",
        gainsboro: {
          100: "#e8e8e8",
          200: "rgba(217, 217, 217, 0.27)",
          300: "rgba(217, 217, 217, 0.2)",
          400: "rgba(217, 217, 217, 0.3)",
        },
        crimson: "#fa0037",
        nd: "#20c5f2",
        steelblue: {
          100: "#0c92b2",
          200: "rgba(11, 144, 175, 0.5)",
        },
        deepskyblue: "rgba(32, 197, 242, 0.2)",
        lightgray: "#d3d3d3",
        "main-color": "#0b90af",
        lightslategray: "#848199",
        lavender: "#dae2ed",
        darkslategray: "#333",
        dimgray: "#666",
        red: "rgba(255, 0, 0, 0.1)",
        "main-color1": "#01111d",
        lawngreen: "#2ddf00",
        white: {
          A700: "#ffffff",
          A700_63: "#ffffff63",
          A700_a2: "#ffffffa2",
          A700_99: "#ffffff99",
        },
        gray: {
          50: "#f9f9f9",
          800: "#4d4d4d",
          900: "#212121",
          "100_01": "#f6f7f9",
          "200_01": "#e7e7e7",
          "50_01": "#f8f8f8",
        },
        red: {
          500: "#ff3838",
          A400_01: "#fa0037",
          A700_7e: "#ff00007e",
          A700: "#ff0000",
        },
        light_blue: { 400: "#20c5f2" },
        blue_gray: {
          "100_01": "#d3d3d3",
          "100_75": "#d9d9d975",
          "100_19": "#d9d9d919",
          "100_33": "#d9d9d933",
          "100_03": "#d9d9d9",
        },
        black: {
          "900_87": "#00000087",
          "900_99": "#00000099",
          "900_03": "#000000",
          "900_7e": "#0000007e",
          "900_75": "#00000075",
          "900_6f": "#0000006f",
          "900_33": "#00000033",
          "900_90_01": "#00000090",
        },
        cyan: { 700: "#0c92b2", "700_01": "#0b90af" },
        teal: { 900: "#003d4c" },
        gray_500: "#9e9e9e",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        aleo: "Aleo",
        "open-sans": "'Open Sans'",
        lato: "Lato",
        comfortaa: "Comfortaa",
      },
      borderRadius: {
        "31xl": "50px",
        xl: "20px",
        "3xs": "10px",
        "61xl": "80px",
        "21xl": "40px",
        mini: "15px",
        "12xs": "1px",
        "10xl-9": "29.9px",
        "8xl-6": "27.6px",
        "11xl": "30px",
        "7xs-3": "5.3px",
        "9xs": "4px",
        "10xs": "3px",
        "76xl": "95px",
        "7xl": "26px",
        "mid-5": "17.5px",
        "4xs-8": "8.8px",
      },
      boxShadow: {
        xs: "0px 0px  3px 0px #00000019",
        sm: "0px 0px  10px 0px #00000026",
      },
      backgroundImage: {
        gradient: "linear-gradient(135deg, #0b90af,#20c5f2)",
        gradient1: "linear-gradient(90deg, #fcb100,#ed893e)",
      },
      fontFamily: {
        poppins: "Poppins",
        aleo: "Aleo",
        inter: "Inter",
        publicsans: "Public Sans",
      },
      opacity: {
        0.5: 0.5,
        0.3: 0.3,
        0.1: 0.1,
        0.7: 0.7,
        0.4: 0.4,
        0.2: 0.2,
        0.8: 0.8,
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      "5xl": "24px",
      "9xl": "28px",
      "3xl": "22px",
      lg: "18px",
      "31xl": "50px",
      "21xl": "40px",
      "11xl": "30px",
      "7xl": "26px",
      lgi: "19px",
      "25xl": "44px",
      "16xl": "35px",
      "6xl": "25px",
      "2xl": "21px",
      sm: "14px",
      "mid-3": "17.3px",
      "13xl-2": "32.2px",
      "lgi-6": "19.6px",
      "22xl-5": "41.5px",
      "14xl": "33px",
      "lg-6": "18.6px",
      "15xl": "34px",
      "8xl": "27px",
      "9xl-1": "28.1px",
      "xl-4": "20.4px",
      "mid-5": "17.5px",
      "5xl-5": "24.5px",
      "base-8": "15.8px",
      inherit: "inherit",
    },

    // screens: {
    //   sm: { min: "100px", max: "767px" },
    //   md: { min: "768px", max: "1023px" },
    //   lg: { min: "1024px", max: "1279px" },
      // mq1500: {
      //   raw: "screen and (max-width: 1500px)",
      // },
      // mq1325: {
      //   raw: "screen and (max-width: 1325px)",
      // },
      // mq1125: {
      //   raw: "screen and (max-width: 1125px)",
      // },
      // mq1050: {
      //   raw: "screen and (max-width: 1050px)",
      // },
      // mq825: {
      //   raw: "screen and (max-width: 825px)",
      // },
      // mq800: {
      //   raw: "screen and (max-width: 800px)",
      // },
      // mq750: {
      //   raw: "screen and (max-width: 750px)",
      // },
      // mq500: {
      //   raw: "screen and (max-width: 500px)",
      // },
      // mq450: {
      //   raw: "screen and (max-width: 450px)",
      // },
      // mq400: {
      //   raw: "screen and (max-width: 400px)",
      // },
      // mq350: {
      //   raw: "screen and (max-width: 350px)",
      //  },
   // },
    screens: {
      // smx: { min: "100px", max: "767px" },
      // mdx: { min: "768px", max: "1023px" },
      // lgx: { min: "1024px", max: "1279px" },
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      mq1500: {
        raw: "screen and (max-width: 1500px)",
      },
      mq1325: {
        raw: "screen and (max-width: 1325px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq500: {
        raw: "screen and (max-width: 500px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
      mq400: {
        raw: "screen and (max-width: 400px)",
      },
      mq350: {
        raw: "screen and (max-width: 350px)",
      },
    },
    // Other Tailwind CSS configurations...
  },
  plugins: [require("@tailwindcss/forms")],

  corePlugins: {
    preflight: false,
  },
};