import "./components/menu.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import MenuHero from "./components/MenuHero";
import MenuTicker from "./components/MenuTicker";
import MenuCurated from "./components/MenuCurated";
import MenuPopularItems from "./components/MenuPopularItems";
import MenuBusinessData from "./components/MenuBusinessData";
import MenuTopSellers from "./components/MenuTopSellers";
import MenuReadyToOrder from "./components/MenuReadyToOrder";

export default function MenuPage() {
  return (
    <>
      <Header />

      <main className="bg-[#FFFAF4]">
        <MenuHero />
        <MenuTicker />
        <MenuCurated />
        <MenuPopularItems />
        <MenuBusinessData />
        <MenuTopSellers />
        <MenuReadyToOrder />
      </main>

      <Footer />
    </>
  );
}
