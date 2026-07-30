import Header from "@/components/Header";
import Footer from "@/components/Footer";

import PartnerPortalHero from "./components/PartnerPortalHero";
import PartnerPortalCapabilities from "./components/PartnerPortalCapabilities";
import PartnerPortalControl from "./components/PartnerPortalControl";
import PartnerPortalAccess from "./components/PartnerPortalAccess";
import PartnerPortalCTA from "./components/PartnerPortalCTA";

export default function PartnerPortalPage() {
  return (
    <>
      <Header />

      <main className="bg-[#FFFAF4]">
        <PartnerPortalHero />
        <PartnerPortalCapabilities />
        <PartnerPortalControl />
        <PartnerPortalAccess />
        <PartnerPortalCTA />
      </main>

      <Footer />
    </>
  );
}
