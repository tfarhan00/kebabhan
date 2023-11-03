import { Metadata } from "next";
import AboutHero from "./components/AboutHero";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Kebabhan - About",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
    </>
  );
}
