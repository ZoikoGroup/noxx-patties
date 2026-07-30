import Image from "next/image";

const controls = [
  {
    title: "Partner Tier Classification",
    description:
      "Access, pricing, and allocation rights determined by your partner tier and commercial agreement status.",
  },
  {
    title: "Regional Demand Conditions",
    description:
      "Availability and SKU mix aligned to live demand signals in your operating territory.",
  },
  {
    title: "Supply Chain Capacity",
    description:
      "Order processing governed by real fulfilment capacity — not oversold commitments that fail downstream.",
  },
  {
    title: "Commercial Agreements & Compliance",
    description:
      "Pricing, volumes, and operational standards enforced within the terms of your active commercial agreement.",
  },
];

const flow = [
  {
    icon: "/partner-portal/flow-consumer-demand.png",
    iconBg: "bg-[#E8920A]/20",
    title: "Consumer Demand Signals",
    description: "Real purchase behaviour across all D2C and retail channels",
  },
  {
    icon: "/partner-portal/flow-retail-performance.png",
    iconBg: "bg-[#1D4ED8]/20",
    title: "Retail Performance Data",
    description: "SKU velocity, sell-through, and margin by store and region",
  },
  {
    icon: "/partner-portal/flow-wholesale-distribution.png",
    iconBg: "bg-[#1A5C3A]/20",
    title: "Wholesale Distribution Flow",
    description: "Case movement, reorder patterns, and fulfilment metrics",
  },
  {
    icon: "/partner-portal/flow-franchise-operational.png",
    iconBg: "bg-[#5B21B6]/20",
    title: "Franchise Operational Data",
    description: "Unit-level ordering, replenishment cycles, and performance",
  },
];

export default function PartnerPortalControl() {
  return (
    <section className="w-full bg-[#E8920A] py-14 lg:py-[71px]">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-[64px] px-6 sm:px-8 lg:grid-cols-2 lg:px-[92px]">
        {/* Commercial Control Layer */}
        <div>
          {/* Heading */}
          <h2 className="max-w-[584px] font-['Poppins'] text-3xl font-semibold leading-10 text-white">
            Pricing, availability, and allocation are governed not open.
          </h2>

          {/* Description */}
          <p className="mt-[16px] max-w-[584px] font-['Poppins'] text-base font-normal leading-6 text-white">
            The portal functions as a controlled system environment. Every
            commercial variable is governed to ensure consistency, fairness, and
            stability across the entire partner network.
          </p>

          {/* Control Cards */}
          <div className="mt-[24px] flex flex-col gap-[12px]">
            {controls.map((control) => (
              <div
                key={control.title}
                className="rounded-[20px] border border-white/5 bg-white/5 px-[25px] py-[22px]"
              >
                {/* Title */}
                <h3 className="font-['Poppins'] text-base font-bold text-white">
                  {control.title}
                </h3>

                {/* Description */}
                <p className="mt-[6px] font-['Poppins'] text-xs font-normal leading-5 text-white">
                  {control.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* System Integration */}
        <div>
          {/* Heading */}
          <h2 className="font-['Poppins'] text-3xl font-semibold leading-10 text-white">
            Directly connected to the Noxx Intelligence Layer.
          </h2>

          {/* Intelligence Card */}
          <div className="mt-[24px] rounded-[20px] border border-white/10 bg-white/5 px-[33px] py-[33px]">
            {/* Label */}
            <p className="font-['Poppins'] text-xs font-bold uppercase tracking-wider text-white/90">
              Closed-Loop Intelligence System
            </p>

            {/* Flow */}
            <div className="mt-[24px]">
              {flow.map((step, index) => (
                <div key={step.title}>
                  <div
                    className={`flex items-center gap-[14px] pb-[16px] ${
                      index < flow.length - 1 ? "border-b border-white/5" : ""
                    }`}
                  >
                    {/* Icon */}
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl ${step.iconBg}`}
                    >
                      <Image
                        src={step.icon}
                        alt=""
                        width={16}
                        height={16}
                        className="h-4 w-4 object-contain"
                      />
                    </span>

                    <div>
                      {/* Title */}
                      <h3 className="font-['Poppins'] text-sm font-semibold text-white/95">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="font-['Poppins'] text-xs font-normal text-white/60">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Connector */}
                  {index < flow.length - 1 && (
                    <div className="py-[22px] pl-[13px] font-['Poppins'] text-lg font-normal leading-none text-white/20">
                      ↓
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="mt-[24px] rounded-xl border border-[#E8920A]/20 bg-[#E8920A]/10 px-[19px] py-[17px]">
              <p className="font-['Poppins'] text-xs font-normal italic leading-5 text-white">
                &quot;Decisions improve over time through real usage data. The
                more partners engage with the system, the more accurate and
                actionable the intelligence becomes.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
