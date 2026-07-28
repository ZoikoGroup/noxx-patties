"use client";

import Image from "next/image";

const planningCards = [
  {
    title: "Office Catering",
    description:
      "Team lunches, meetings, and corporate events. Balanced flavors, punctual delivery, low friction reorders.",
    highlight: "↑ Repeat orders",
    icon: "/catering/office.png",
    featured: true,
  },
  {
    title: "Party or Social Event",
    description:
      "Variety, crowd-pleasers, and abundance. The system optimizes for broad appeal and minimal waste.",
    highlight: "↑ Basket size",
    icon: "/catering/party.png",
  },
  {
    title: "Retail or Resale Supply",
    description:
      "Fast-moving, margin-accretive SKUs. Case logic, shelf life, and reorder cycle intelligence included.",
    highlight: "↑ B2B account",
    icon: "/catering/retail.png",
  },
  {
    title: "Personal Bulk Order",
    description:
      "Freezer-friendly value packs. The system optimizes for value tiers, convenience, and reorder speed.",
    highlight: "↑ Household stock",
    icon: "/catering/bulk.png",
  },
];

export default function CateringPlanning() {
  return (
    <section className="w-full border-t border-[#EAE4D9] bg-[#FDB735] py-[36px]">
      <div className="mx-auto max-w-[1440px] px-[92px]">

        {/* Heading */}
        <h2 className="text-center font-['Poppins'] text-[36px] font-semibold leading-[57px] text-[#1A0E04]">
          WHAT ARE YOU PLANNING?
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mt-0 max-w-[860px] text-center font-['Poppins'] text-[16px] font-normal leading-7 text-[#3F3F3F]">
          Tell us your event type — the system adapts the order logic, mix
          bias, and fulfillment priorities automatically.
        </p>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-4 gap-[30px]">
            {planningCards.map((card) => (
  <div
    key={card.title}
    className={`relative h-[220px] w-[268px] rounded-[20px] bg-white ${
      card.featured
        ? "shadow-[0px_0px_0px_3px_rgba(232,146,10,0.10)]"
        : "border-2 border-[#EAE4D9]"
    }`}
  >
    <div className="flex h-full flex-col items-center px-0 pt-8 text-center">

      {/* Icon */}
      <div className="relative h-8 w-8">
        <Image
          src={card.icon}
          alt={card.title}
          fill
          className="object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="mt-4 font-['Poppins'] text-[16px] font-bold text-[#1A0E04]">
        {card.title}
      </h3>

      {/* Description */}
      <p className="mt-1 max-w-[236px] font-['Poppins'] text-[12px] font-normal leading-5 text-[#8C8070]">
        {card.description}
      </p>

      {/* Bottom Highlight */}
      <p className="mt-1 font-['Poppins'] text-[14px] font-bold uppercase tracking-wide text-[#E8920A]">
        {card.highlight}
      </p>

    </div>
  </div>
))}
        </div>

      </div>
    </section>
  );
}