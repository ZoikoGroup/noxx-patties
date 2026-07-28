import Header from "@/components/Header";

import AboutHero from "./components/AboutHero";
import AboutWhy from "./components/AboutWhy";
import AboutSystemAdvantage from "./components/AboutSystemAdvantage";
import AboutInfrastructure from "./components/AboutInfrastructure";
import AboutIntelligenceLayer from "./components/AboutIntelligenceLayer";
import AboutParticipants from "./components/AboutParticipants";
import AboutFoodSystem from "./components/AboutFoodSystem";
import AboutVision from "./components/AboutVision";
import AboutCTA from "./components/AboutCTA";

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="bg-[#FDFAF6]">
        <AboutHero />
        <AboutWhy />
        <AboutSystemAdvantage />
        <AboutInfrastructure />
        <AboutIntelligenceLayer />
        <AboutParticipants />
        <AboutFoodSystem />
        <AboutVision />
        <AboutCTA />
      </main>

      
    </>
  );
}