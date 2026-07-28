import Image from "next/image";

const aiFeatures = [
  {
    id: 1,
    icon: "/wholesale/demand-forecasting.png",
    title: "Demand Forecasting",
    description:
      "By region, channel, account type, and seasonality. Continuously refined against real movement data.",
  },
  {
    id: 2,
    icon: "/wholesale/sku-mix.png",
    title: "SKU Mix Optimization",
    description:
      "Based on movement rates, margin contribution, and local demand patterns across active territories.",
  },
  {
    id: 3,
    icon: "/wholesale/restock.png",
    title: "Restock Recommendations",
    description:
      "Automated shipment planning support and reorder trigger logic aligned to your inventory position.",
  },
  {
    id: 4,
    icon: "/wholesale/early-warning.png",
    title: "Early Warning Signals",
    description:
      "Underperformance detection, stock imbalance alerts, and shortage risk signals before they become supply failures.",
  },
];

export default function WholesaleAIPlanning() {
  return (
    <section className="w-full bg-[#FFFAF4] py-16 ">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[92px]">
        {/* Heading */}
        <h2 className="text-center font-[Poppins] text-3xl font-semibold leading-tight lg:leading-[57px] text-[#1A0E04]">
          AI-DRIVEN DEMAND &amp; SUPPLY PLANNING.
        </h2>

        {/* Description */}
        <p className="mx-auto mt-1 max-w-[917px] text-center font-[Poppins] text-base leading-7 text-[#8C8070]">
          Wholesale becomes materially more valuable when converted from manual
          supply into intelligent distribution. The platform&apos;s AI layer
          improves forecasting, allocation, and replenishment discipline for
          every partner.
        </p>

       {/* Content */}
<div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch">
  {/* Left Cards */}
  <div className="flex flex-col gap-4">
    {aiFeatures.map((item) => (
      <div
        key={item.id}
        className="flex gap-4 rounded-xl border border-[#EAE4D9] bg-white px-5 py-4 shadow-[0px_2px_8px_rgba(26,14,4,0.06)]"
      >
        {/* Icon */}
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[8px] bg-[#FEF3DC]">
          <Image
            src={item.icon}
            alt={item.title}
            width={20}
            height={20}
            className="object-contain"
          />
        </div>

        {/* Text */}
        <div>
          <h3 className="font-[Poppins] text-base font-bold text-[#1A0E04]">
            {item.title}
          </h3>

          <p className="mt-1 font-[Poppins] text-xs leading-5 text-[#8C8070]">
            {item.description}
          </p>
        </div>
      </div>
    ))}
  </div>

  {/* Right Image */}
  <div className="h-full overflow-hidden rounded-[20px]">
    <Image
      src="/wholesale/ai-demand-planning.png"
      alt="AI Demand Planning"
      width={932}
      height={700}
      className="h-full w-full object-cover"
    />
  </div>
</div>
      </div>
    </section>
  );
}