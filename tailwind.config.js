/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        StatusNeutralPaleblue: "hsl(221, 100%, 96%)",
        StatusNeutralLightlavender: "hsl(241, 100%, 89%)",
        StatusNeutralDarkgrayblue: "hsl(224, 30%, 27%)",

        StatusForGradientLightslateblue: "hsl(252, 100%, 67%)",
        "StatusForGradientLightroyalblue": "hsl(241, 81%, 54%",
        StatusForGradientVioletblue: "hsla(256, 72%, 46%, 1)",
        StatusForGradientPersianblue: "hsla(241, 72%, 46%, 0)",

        StatusPrimaryLightred: "hsl(0, 100%, 67%)",
        StatusPrimaryOrangeyyellow: "hsl(39, 100%, 56%)",
        StatusPrimaryGreenteal: "hsl(166, 100%, 37%)",
        StatusPrimaryCobaltblue: "hsl(234, 85%, 45%)",
      },

      fontFamily: {
        Hanken: ["Hanken Grotesk, sans-serif"],
      },
      borderRadius: {
        50: "40px",
        full: "50%",
      },
      boxShadow: {
        borderCard: "0px 0px 90px rgba(0, 0, 255, 0.1)"
      }
    },

    container: {
      center: true,
      screens: {
        sm: "700px",
      }
    }
  },
  plugins: [],
};
