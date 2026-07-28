import Header from "@/components/Header";


import FranchiseHero from "./components/FranchiseHero";
import FranchiseFormats from "./components/FranchiseFormats";
import FranchiseScenarios from "./components/FranchiseScenarios";
import FranchiseJourney from "./components/FranchiseJourney";
import FranchiseIntelligence from "./components/FranchiseIntelligence";
import FranchiseGovernance from "./components/FranchiseGovernance";
import FranchiseQualification from "./components/FranchiseQualification";
import FranchiseCTA from "./components/FranchiseCTA";

export default function FranchisePage() {
  return (
    <>
      <Header />

      <main>
        <FranchiseHero />
        <FranchiseFormats />
        <FranchiseScenarios />
        <FranchiseJourney />
        <FranchiseIntelligence />
        <FranchiseGovernance />
        <FranchiseQualification />
        <FranchiseCTA />
      </main>


      
    </>
  );
}