"use client";

import Image from "next/image";

const intelligenceCards = [
  {
    title: "Consumer Intelligence",
    description:
      "Taste discovery, personalization, and more intelligent product recommendations based on behavior and preference data.",
    icon: "/about/consumers.png",
  },
  {
    title: "Retail Intelligence",
    description:
      "Strengthens SKU selection, sell-through performance, and inventory confidence for retail partners.",
    icon: "/about/retailer.png",
  },
  {
    title: "Distribution Intelligence",
    description:
      "Improves forecasting, planning, and regional product-mix decisions for wholesalers and distributors.",
    icon: "/about/distributions.png",
  },
  {
    title: "Franchise Intelligence",
    description:
      "Supports site selection, demand visibility, and operating confidence for franchise operators.",
    icon: "/about/franchises.png",
  },
];

export default function AboutIntelligenceLayer() {
  return (
    <section className="w-full bg-[#FDB735]">
      <div className="mx-auto w-full max-w-[1440px] px-[92px] py-[70px]">

        {/* Main Layout */}
        <div className="flex items-start gap-[40px]">

          {/* LEFT COLUMN */}
          <div className="w-[588px] flex-shrink-0">

            <h2 className="font-['Poppins'] text-[36px] font-semibold leading-[57px] text-[#2A2A2A]">
              THE NOXX INTELLIGENCE LAYER
            </h2>

            <p className="mt-0 w-[588px] font-['Poppins'] text-[16px] font-normal leading-7 text-[#454545]">
              At the center of the platform is the Noxx Intelligence Layer —
              a continuously learning system that optimizes flavor, demand,
              and distribution across markets. NIL is not an ornamental AI
              feature. It is a commercial capability.
            </p>

            {/* Cards */}
            <div className="mt-[15px] flex flex-col gap-4">
                {intelligenceCards.map((card) => (
  <div
    key={card.title}
    className="flex h-[112px] w-[588px] items-start rounded-[12px] border border-white/5 bg-white/10 px-[21px] py-[21px]"
  >
    {/* Icon */}
    <div className="flex h-[44px] w-[44px] flex-shrink-0 items-center justify-center rounded-[10px] bg-[#FFD486]">
      <Image
        src={card.icon}
        alt={card.title}
        width={22}
        height={22}
        className="object-contain"
      />
    </div>

    {/* Content */}
    <div className="ml-4 flex flex-col">
      <h3 className="font-['Poppins'] text-[16px] font-bold leading-5 text-[#2A2A2A]">
        {card.title}
      </h3>

      <p className="mt-[2px] w-[460px] font-['Poppins'] text-[16px] font-normal leading-5 text-[#454545E6]">
        {card.description}
      </p>
    </div>
  </div>
))}

            </div>

          </div>
                    {/* RIGHT IMAGE */}
          <div className="relative h-[652px] w-[528px] flex-shrink-0 overflow-hidden rounded-[24px]">

            <Image
              src="/about/intelligence-layer.png"
              alt="Noxx Intelligence Layer"
              width={552}
              height={652}
              className="absolute left-[-12px] top-0 h-[652px] w-[552px] max-w-none object-cover"
              priority
            />

          </div>

        </div>
              </div>
    </section>
  );
}