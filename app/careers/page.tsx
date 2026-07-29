import Header from "@/components/Header";
import Footer from "@/components/Footer";

import CareersHero from "./components/CareersHero";
import CareersEnvironments from "./components/CareersEnvironments";
import CareersHowWeWork from "./components/CareersHowWeWork";
import CareersApply from "./components/CareersApply";
import CareersCTA from "./components/CareersCTA";

export default function CareersPage() {
  return (
    <>
      <Header />

      <main className="bg-[#FFFAF4]">
        <CareersHero />
        <CareersEnvironments />
        <CareersHowWeWork />
        <CareersApply />
        <CareersCTA />
      </main>

      <Footer />
    </>
  );
}
