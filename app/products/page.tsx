import "./components/products.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import ProductsHero from "./components/ProductsHero";
import ProductsTicker from "./components/ProductsTicker";
import ProductsCurated from "./components/ProductsCurated";
import ProductsPopularItems from "./components/ProductsPopularItems";
import ProductsBusinessData from "./components/ProductsBusinessData";
import ProductsTopSellers from "./components/ProductsTopSellers";
import ProductsReadyToOrder from "./components/ProductsReadyToOrder";

export default function ProductsPage() {
  return (
    <>
      <Header />

      <main className="bg-[#FFFAF4]">
        <ProductsHero />
        <ProductsTicker />
        <ProductsCurated />
        <ProductsPopularItems />
        <ProductsBusinessData />
        <ProductsTopSellers />
        <ProductsReadyToOrder />
      </main>

      <Footer />
    </>
  );
}
