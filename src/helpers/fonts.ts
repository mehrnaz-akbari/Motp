
import localFont from "next/font/local";

 export const geistIranYekan = localFont({
    variable: "--font-iran-yekan",
    src: [
      {
        path: "../assets/fonts/iranyekan/ttf/IRANYekanXFaNum-Regular.ttf",
        weight: "700",
        style: "normal",
      },
      {
        path: "../assets/fonts/iranyekan/ttf/IRANYekanXFaNum-Bold.ttf",
        weight: "900",
      },
      {
        path: "../assets/fonts/iranyekan/ttf/IRANYekanXFaNum-Light.ttf",
        weight: "300",
        style: "normal",
      },
      {
        path: "../assets/fonts/iranyekan/ttf/IRANYekanXFaNum-Regular.ttf",
        weight: "500",
        style: "normal",
      },
    ],
  });
  