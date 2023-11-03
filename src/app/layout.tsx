import type { Metadata } from "next";
import { Inter, VT323 } from "next/font/google";
import "./globals.css";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";
import Script from "next/script";
import { Provider as JotaiProvider } from "jotai";
import MainWidthContainer from "./_components/MainWidthContainer";
import DarkModeProvider from "@/providers/DarkModeProvider";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"] });
const vt323 = VT323({
  subsets: ["latin"],
  weight: "400",
  variable: "--vt323",
});

export const metadata: Metadata = {
  title: "Kebabhan - Full-stack Developer",
  description:
    "Hi I'm Farhan, a fullstack developer who loves to work on high standard apps",
  keywords: [
    "developer",
    "frontend",
    "fullstack",
    "fullstack developer",
    "programming",
    "web developer",
    "frontend developer",
    "programmer",
    "react",
    "nextjs",
    "creative",
    "threejs",
    "gsap",
    "web animation",
    "interactive developer",
  ],
  authors: [
    {
      name: "Tengku Farhan",
      url: "https://kebabhan.vercel.app",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-0WR3LJ2YHC"
        />
        <meta
          name="google-site-verification"
          content="7X1vfPqLdiWlvgEI0w7LEe9g-m30JvVefpujJ4qDK4Y"
        />
        <Script id="google-analytics">
          {` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-0WR3LJ2YHC');`}
        </Script>
      </head>
      <body
        suppressHydrationWarning
        className={twMerge(
          inter.className,
          vt323.variable,
          "bg-white dark:bg-[#171717]"
        )}
      >
        <DarkModeProvider>
          <JotaiProvider>
            <main className="w-full flex flex-col items-center tracking-normal">
              <Navbar />
              {children}
              <MainWidthContainer>
                <Footer />
              </MainWidthContainer>
            </main>
          </JotaiProvider>
        </DarkModeProvider>
      </body>
    </html>
  );
}
