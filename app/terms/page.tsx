import Header from "@/components/Header";
import Footer from "@/components/Footer";

import TermsHero from "./components/TermsHero";
import TermsBody from "./components/TermsBody";

export default function TermsPage() {
  return (
    <>
      <Header />

      <main className="bg-[#FFFAF4]">
        <TermsHero />
        <TermsBody />
      </main>

      <Footer />
    </>
  );
}
