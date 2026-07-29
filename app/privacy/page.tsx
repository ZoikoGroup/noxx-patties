import Header from "@/components/Header";
import Footer from "@/components/Footer";

import PrivacyHero from "./components/PrivacyHero";
import PrivacyBody from "./components/PrivacyBody";

export default function PrivacyPage() {
  return (
    <>
      <Header />

      <main className="bg-[#FFFAF4]">
        <PrivacyHero />
        <PrivacyBody />
      </main>

      <Footer />
    </>
  );
}
