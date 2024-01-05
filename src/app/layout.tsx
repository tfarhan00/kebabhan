import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";
import Script from "next/script";
import { Provider as JotaiProvider } from "jotai";
import MainWidthContainer from "./_components/MainWidthContainer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kebabhan - Front-End Developer",
  description:
    "Hi I'm Farhan, a frontend developer who loves to work on high standard apps",
  keywords: [
    "developer",
    "frontend",
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
      <body className={inter.className}>
        <JotaiProvider>
          <main className="w-full flex flex-col items-center">
            <Navbar />
            {children}
            <MainWidthContainer>
              <Footer />
            </MainWidthContainer>
          </main>
        </JotaiProvider>
      </body>
    </html>
  );
}
