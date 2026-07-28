import Header from "@/components/Header";
import Footer from "@/components/Footer";

import ProductGallery from "./components/ProductGallery";
import ProductPurchasePanel from "./components/ProductPurchasePanel";
import ProductAddOns from "./components/ProductAddOns";
import ProductDetails from "./components/ProductDetails";
import ProductRecommendations from "./components/ProductRecommendations";
import ProductTestimonials from "./components/ProductTestimonials";

export default function ProductPage() {
  return (
    <>
      <Header />

      <main className="bg-[#FDFAF6]">
        <section className="mx-auto max-w-[1440px] px-5 pb-6 pt-10 lg:px-[75px] lg:pt-14">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <ProductGallery />

            <div className="flex flex-col gap-6">
              <ProductPurchasePanel />
              <ProductAddOns />
            </div>
          </div>

          <ProductDetails />
        </section>

        <ProductRecommendations />
        <ProductTestimonials />
      </main>

      <Footer />
    </>
  );
}
