import Header from "@/components/Header";
import Footer from "@/components/Footer";

import HelpHero from "./components/HelpHero";
import HelpBody from "./components/HelpBody";

export default function HelpPage() {
  return (
    <>
      <Header />

      <main className="bg-[#FFFAF4]">
        <HelpHero />
        <HelpBody />
      </main>

      <Footer />
    </>
  );
}
