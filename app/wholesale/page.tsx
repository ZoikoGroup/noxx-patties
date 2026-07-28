import Header from "@/components/Header";
import Footer from "@/components/Footer";

import WholesaleHero from "./components/WholesaleHero";
import WholesaleRightsClasses from "./components/WholesaleRightsClasses";
import WholesaleGovernance from "./components/WholesaleGovernance";
import WholesalePricingTerms from "./components/WholesalePricingTerms";
import WholesaleAIPlanning from "./components/WholesaleAIPlanning";
import WholesalePriorityMarkets from "./components/WholesalePriorityMarkets";
import WholesaleDistributionApplication from "./components/WholesaleDistributionApplication";
import WholesalePartnerMetrics from "./components/WholesalePartnerMetrics";
import WholesaleReadyToDistribute from "./components/WholesaleReadyToDistribute";

export default function WholesalePage() {
  return (
    <>
      <Header />

      <main>
        <WholesaleHero />
        <WholesaleRightsClasses />
        <WholesaleGovernance />
        <WholesalePricingTerms />
        <WholesaleAIPlanning />
        <WholesalePriorityMarkets />
        <WholesaleDistributionApplication />
        <WholesalePartnerMetrics />
        <WholesaleReadyToDistribute />
      </main>

      <Footer />
    </>
  );
}
