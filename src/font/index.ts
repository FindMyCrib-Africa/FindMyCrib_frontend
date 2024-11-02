import { Montserrat, Quicksand } from "next/font/google";

export const quicksand = Quicksand({
  weight: ["300", "400", "500", "600", "700"],
  style: "normal",
  display: "auto",
  variable: "--font-quicksand",
  subsets: ["latin", "latin-ext", "vietnamese"],
  fallback: ["manrope"],
  preload: true,
  adjustFontFallback: true,
});

export const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "auto",
  variable: "--font-montserrat",
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
  preload: true,
  fallback: ["quicksand"],
  adjustFontFallback: true,
});
