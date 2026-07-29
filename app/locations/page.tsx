import Header from "@/components/Header";
import Footer from "@/components/Footer";

import LocationsHero from "./components/LocationsHero";
import LocationsAccessTabs from "./components/LocationsAccessTabs";
import LocationsFeaturedBar from "./components/LocationsFeaturedBar";
import LocationsAccessPoints from "./components/LocationsAccessPoints";
import LocationsCatering from "./components/LocationsCatering";
import LocationsRetail from "./components/LocationsRetail";
import LocationsComingSoon from "./components/LocationsComingSoon";
import LocationsPartnerCTA from "./components/LocationsPartnerCTA";

export default function LocationsPage() {
  return (
    <>
      <Header />

      <main className="bg-[#FFFAF4]">
        <LocationsHero />
        <LocationsAccessTabs />
        <LocationsFeaturedBar />
        <LocationsAccessPoints />
        <LocationsCatering />
        <LocationsRetail />
        <LocationsComingSoon />
        <LocationsPartnerCTA />
      </main>

      <Footer />
    </>
  );
}
