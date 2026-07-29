import Header from "@/components/Header";
import Footer from "@/components/Footer";

import RetailHero from "./components/RetailHero";
import RetailStats from "./components/RetailStats";
import RetailProblemApproach from "./components/RetailProblemApproach";
import RetailVisibility from "./components/RetailVisibility";
import RetailOutcomes from "./components/RetailOutcomes";
import RetailReliability from "./components/RetailReliability";
import RetailCTA from "./components/RetailCTA";

export default function RetailPage() {
  return (
    <>
      <Header />

      <main className="bg-[#FFFAF4]">
        <RetailHero />
        <RetailStats />
        <RetailProblemApproach />
        <RetailVisibility />
        <RetailOutcomes />
        <RetailReliability />
        <RetailCTA />
      </main>

      <Footer />
    </>
  );
}
