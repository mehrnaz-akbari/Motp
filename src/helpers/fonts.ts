import localFont from "next/font/local";

export const geistIranYekan = localFont({
  variable: "--font-iran-yekan",
  src: [
    {
      path: "../assets/fonts/iranyekan/ttf/IRANYekanMobileMedium.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/iranyekan/ttf/IRANYekanMobileBold.ttf",
      weight: "900",
    },
    {
      path: "../assets/fonts/iranyekan/ttf/IRANYekanMobileLight.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/iranyekan/ttf/IRANYekanMobileRegular.ttf",
      weight: "500",
      style: "normal",
    },
  ],
});
