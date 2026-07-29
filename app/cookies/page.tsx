import Header from "@/components/Header";
import Footer from "@/components/Footer";

import CookiesHero from "./components/CookiesHero";
import CookiesBody from "./components/CookiesBody";

export default function CookiesPage() {
  return (
    <>
      <Header />

      <main className="bg-[#FFFAF4]">
        <CookiesHero />
        <CookiesBody />
      </main>

      <Footer />
    </>
  );
}
