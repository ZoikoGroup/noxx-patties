"use client";

import Image from "next/image";

const validationItems = [
  {
    title: "Halal-Friendly Process",
    description:
      "All applicable products certified halal-friendly. Clearly labelled and selectable within your order build.",
    icon: "/catering/halal.png",
  },
  {
    title: "Vegan Lines Available",
    description:
      "Dedicated plant-based range available across all order sizes. Included automatically when audience mix requires it.",
    icon: "/catering/vegan.png",
  },
  {
    title: "Cold Chain Guaranteed",
    description:
      "End-to-end temperature-controlled logistics. All orders are dispatched and delivered within safe handling windows.",
    icon: "/catering/cold-chain.png",
  },
  {
    title: "Operational Lead Times",
    description:
      "Minimum lead time clearly displayed at order build. Next available slot is always visible — no hidden surprises at checkout.",
    icon: "/catering/lead-time.png",
  },
  {
    title: "Standing Order Capability",
    description:
      "Weekly office catering plans, monthly event schedules, and auto-replenishment for retail and reseller accounts.",
    icon: "/catering/standing-order.png",
  },
  {
    title: "Order Summary Export",
    description:
      "Download or email your confirmed order summary. B2B buyers can justify orders internally with a full commercial breakdown.",
    icon: "/catering/order-summary.png",
  },
];

export default function CateringOperationalValidation() {
  return (
    <section className="w-full bg-[#F5F1EA] py-[40px]">
  <div className="mx-auto max-w-[1440px] px-5 lg:px-[62px]">

        {/* Heading */}
        <h2 className="text-center font-['Poppins'] text-[24px] lg:text-[36px] font-semibold leading-tight lg:leading-[57px] text-[#1A0E04]">
          OPERATIONALLY VALIDATED
        </h2>

        {/* Cards */}
        <div className="mt-6 grid grid-cols-1 gap-x-[20px] gap-y-[24px] sm:grid-cols-2 lg:grid-cols-3">
          {validationItems.map((item) => (
            <div
              key={item.title}
              className="min-h-[180px] rounded-[20px] border border-[#EAE4D9] bg-white px-[29px] pt-[30px] shadow-[0px_2px_8px_rgba(26,14,4,0.06)]"
            >
              {/* Icon */}
              <div className="relative h-6 w-6">
                <Image
                  src={item.icon}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
                            {/* Title */}
              <h3 className="mt-[10px] font-['Poppins'] text-[16px] font-bold text-[#1A0E04]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-[5px] w-[320px] max-w-full font-['Poppins'] text-[12px] font-normal leading-5 text-[#8C8070]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
              </div>
    </section>
  );
}