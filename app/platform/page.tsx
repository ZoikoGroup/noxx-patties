import Header from "@/components/Header";
import Footer from "@/components/Footer";

import PlatformHero from "./components/PlatformHero";
import PlatformPrinciples from "./components/PlatformPrinciples";
import PlatformLayerStack from "./components/PlatformLayerStack";
import PlatformServiceMap from "./components/PlatformServiceMap";
import PlatformScale from "./components/PlatformScale";
import PlatformSecurity from "./components/PlatformSecurity";
import PlatformCTA from "./components/PlatformCTA";

export default function PlatformPage() {
  return (
    <>
      <Header />

      <main className="bg-[#FAFAF9]">
        <PlatformHero />
        <PlatformPrinciples />
        <PlatformLayerStack />
        <PlatformServiceMap />
        <PlatformScale />
        <PlatformSecurity />
        <PlatformCTA />
      </main>

      <Footer />
    </>
  );
}
