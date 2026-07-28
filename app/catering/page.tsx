import "./components/catering.css";

import Header from "@/components/Header";

import CateringHero from "./components/CateringHero";
import CateringTicker from "./components/CateringTicker";
import CateringPlanning from "./components/CateringPlanning";
import CateringOrderBuilder from "./components/CateringOrderBuilder";
import CateringValueTiers from "./components/CateringValueTiers";
import CateringOperationalValidation from "./components/CateringOperationalValidation";
import CateringSmartOrders from "./components/CateringSmartOrders";
import CateringCTA from "./components/CateringCTA";

export default function CateringPage() {
  return (
    <>
      <Header />

      <main className="flex flex-col items-center bg-[#FDFAF6]">
        <CateringHero />
        <CateringTicker />
        <CateringPlanning />
        <CateringOrderBuilder />
        <CateringValueTiers />
        <CateringOperationalValidation />
        <CateringSmartOrders />
        <CateringCTA />
      </main>

     
    </>
  );
}