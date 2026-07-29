import Header from "@/components/Header";
import Footer from "@/components/Footer";

import PressHero from "./components/PressHero";
import PressBody from "./components/PressBody";

export default function PressPage() {
  return (
    <>
      <Header />

      <main className="bg-[#FFFAF4]">
        <PressHero />
        <PressBody />
      </main>

      <Footer />
    </>
  );
}
