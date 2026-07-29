import HelpRoutingNotice from "./HelpRoutingNotice";
import HelpChannels from "./HelpChannels";
import HelpGeneralEnquiries from "./HelpGeneralEnquiries";
import HelpHowItWorks from "./HelpHowItWorks";

export default function HelpBody() {
  return (
    <section className="w-full bg-[#FFFAF4] py-14 lg:py-[53px]">
      <div className="mx-auto w-full max-w-[836px] px-6 sm:px-8 lg:px-0">
        <HelpRoutingNotice />

        <div className="mt-[70px]">
          <HelpChannels />
        </div>

        <div className="mt-[50px]">
          <HelpGeneralEnquiries />
        </div>

        <div className="mt-[82px]">
          <HelpHowItWorks />
        </div>
      </div>
    </section>
  );
}
