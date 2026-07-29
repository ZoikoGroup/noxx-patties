import Header from "@/components/Header";
import Footer from "@/components/Footer";

import ShopHero from "./components/ShopHero";
import ShopCategoryTabs from "./components/ShopCategoryTabs";
import ShopEssentials from "./components/ShopEssentials";
import ShopByOccasion from "./components/ShopByOccasion";
import ShopBuildYourBox from "./components/ShopBuildYourBox";
import ShopWhyNoxx from "./components/ShopWhyNoxx";
import ShopCTA from "./components/ShopCTA";

export default function ShopPage() {
  return (
    <>
      <Header />

      <main className="bg-[#FAFAF9]">
        <ShopHero />
        <ShopCategoryTabs />
        <ShopEssentials />
        <ShopByOccasion />
        <ShopBuildYourBox />
        <ShopWhyNoxx />
        <ShopCTA />
      </main>

      <Footer />
    </>
  );
}
