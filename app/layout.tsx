import type { Metadata } from "next";
import { Geist, Geist_Mono, Urbanist, Plus_Jakarta_Sans, Inter, } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Local Fonts
const blauerNue = localFont({
  src: [
    { path: "./fonts/Blauer-Nue-Light-iF6626350c6db36.otf", weight: "300", style: "normal" },
    { path: "./fonts/Blauer-Nue-Regular-iF6626350c83fdf.otf", weight: "400", style: "normal" },
    { path: "./fonts/Blauer-Nue-Medium-iF6626350c78103.otf", weight: "500", style: "normal" },
    { path: "./fonts/Blauer-Nue-Semibold-iF6626350c8d55c.otf", weight: "600", style: "normal" },
    { path: "./fonts/Blauer-Nue-Extrabold-iF6626350c4c856.otf", weight: "800", style: "normal" }
  ],
  variable: "--font-blauer",
  display: "swap",
});

const sfProDisplay = localFont({
  src: [
    { path: "./fonts/SFPRODISPLAYREGULAR.otf", weight: "400", style: "normal" },
    { path: "./fonts/SFPRODISPLAYMEDIUM.otf", weight: "500", style: "normal" },
    { path: "./fonts/SFPRODISPLAYBOLD.otf", weight: "700", style: "normal" }
  ],
  variable: "--font-sf-pro",
  display: "swap",
});

const aeonik = localFont({
  src: [
    { path: "./fonts/Aeonik-Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/Aeonik-Bold.otf", weight: "700", style: "normal" }
  ],
  variable: "--font-aeonik",
  display: "swap",
});

const clashDisplay = localFont({
  src: [
    {
      path: "./fonts/ClashDisplay-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/ClashDisplay-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/ClashDisplay-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/ClashDisplay-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/ClashDisplay-Bold.otf",
      weight: "700",
      style: "normal",
    }
  ],
  variable: "--font-clash",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NestaDev",
  description: "NestaDev builds intelligent engines that automate compliance, accelerate acquisition, and secure new business for health & social care providers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${aeonik.variable} 
      ${geistSans.variable} 
      ${geistMono.variable} 
      ${urbanist.variable} 
      ${plusJakartaSans.variable} 
      ${inter.variable} 
      ${blauerNue.variable} 
      ${sfProDisplay.variable} 
      ${aeonik.variable} 
      ${clashDisplay.variable} 
      h-full bg-black antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f9fafb] text-gray-800 dark:bg-[#18181b] dark:text-gray-200">{children}</body>
    </html>
  );
}
