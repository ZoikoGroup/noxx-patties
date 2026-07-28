"use client";

import Image from "next/image";

const smartOrderCards = [
  {
    title: "One-Click Reorder",
    description:
      "Your last successful order is always one tap away. Pre-validated and ready to confirm.",
    icon: "/catering/reorder.png",
  },
  {
    title: "Standing Office Plan",
    description:
      "Set a weekly office catering schedule. The system handles confirmation, slot booking, and reminders.",
    icon: "/catering/office-plan.png",
  },
  {
    title: "Auto-Replenishment",
    description:
      "For retail and reseller accounts — auto-replenishment logic aligned to your reorder cycle and stock velocity.",
    icon: "/catering/auto-replenishment.png",
  },
];

export default function CateringSmartOrders() {
  return (
    <section className="w-full border-t border-[#EAE4D9] bg-[#D92127] py-[50px]">
      <div className="mx-auto max-w-[1440px] px-[32px]">

        {/* Heading */}
        <h2 className="text-center font-['Poppins'] text-[36px] font-semibold leading-[57px] text-white">
          EVERY ORDER GETS SMARTER
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mt-3 max-w-[729px] text-center font-['Poppins'] text-[16px] font-normal leading-7 text-white">
          The system stores your successful order pattern and makes it the
          default recommendation next time — continuously improving as it
          learns your needs.
        </p>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-3 gap-[20px]">
          {smartOrderCards.map((card) => (
            <div
              key={card.title}
              className="flex h-[200px] flex-col items-center rounded-[20px] border border-[#EAE4D9] bg-white px-10 pt-[31px] text-center shadow-[0px_2px_8px_rgba(26,14,4,0.06)]"
            >
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
              <h3 className="mt-5 font-['Poppins'] text-[16px] font-bold text-[#1A0E04]">
                {card.title}
              </h3>

              {/* Description */}
              <p className="mt-2 max-w-[320px] font-['Poppins'] text-[12px] font-normal leading-5 text-[#8C8070]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
              </div>
    </section>
  );
}