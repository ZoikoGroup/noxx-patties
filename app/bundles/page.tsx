import Header from "@/components/Header";
import Footer from "@/components/Footer";

import BundlesHero from "./components/BundlesHero";
import BundlesAudience from "./components/BundlesAudience";
import BundlesData from "./components/BundlesData";
import BundlesGrid from "./components/BundlesGrid";
import BundlesBusiness from "./components/BundlesBusiness";
import BundlesCTA from "./components/BundlesCTA";

export default function BundlesPage() {
  return (
    <>
      <Header />

      <main className="bg-[#FFFAF4]">
        <BundlesHero />
        <BundlesAudience />
        <BundlesData />
        <BundlesGrid />
        <BundlesBusiness />
        <BundlesCTA />
      </main>

      <Footer />
    </>
  );
}
