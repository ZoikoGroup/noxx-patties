import Header from "@/components/Header";
import Footer from "@/components/Footer";

import MenuHero from "./components/MenuHero";
import MenuDeliveryBar from "./components/MenuDeliveryBar";
import MenuMostOrdered from "./components/MenuMostOrdered";
import MenuMealBuilder from "./components/MenuMealBuilder";
import MenuExploreRange from "./components/MenuExploreRange";
import MenuDeals from "./components/MenuDeals";
import MenuAddOns from "./components/MenuAddOns";
import MenuReorder from "./components/MenuReorder";

export default function MenuPage() {
  return (
    <>
      <Header />

      <main className="bg-[#FFFAF4]">
        <MenuHero />
        <MenuDeliveryBar />
        <MenuMostOrdered />
        <MenuMealBuilder />
        <MenuExploreRange />
        <MenuDeals />
        <MenuAddOns />
        <MenuReorder />
      </main>

      <Footer />
    </>
  );
}
