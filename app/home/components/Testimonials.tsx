"use client";

import Image from "next/image";

const testimonials = [
  {
    id: 1,
    tag: "Customer",
    review:
      "Thank you for dinner last night. It was amazing — the best meal I've had in quite some time. The flavors are unlike anything else I've tried.",
    name: "Brendon Garrey",
    role: "Customer · New York",
    icon: "/home/customer.png", 
  },
  {
    id: 2,
    tag: "Retail Partner",
    review:
      "The demand data and margin insights transformed how we stock shelves. Noxx Patties consistently outsells comparable SKUs by 3x.",
    name: "Marcus T.",
    role: "Retail Buyer · Chicago",
    icon: "/home/retail-partner.png", 
  },
  {
    id: 3,
    tag: "Franchise Owner",
    review:
      "The infrastructure support from Zoiko Foods Corp is unlike any franchise I've seen. Payback period beat their projection by 4 months.",
    name: "Amara K.",
    role: "Franchisee · London, UK",
    icon: "/home/franchise-owner.png", 
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-[#FDFAF6] pt-0 pb-15">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-[75px]">

        {/* Heading */}
        <h2 className="text-center text-[64px] font-bold uppercase tracking-wider leading-[60.8px] text-[#1A0E04] font-['Bebas_Neue']">
          WHAT THEY SAY.
        </h2>

        {/* Cards */}
        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-3">
                      {testimonials.map((item) => (
            <div
              key={item.id}
              className="rounded-[20px] border border-[#EAE4D9] bg-white p-8 shadow-[0px_2px_8px_rgba(26,14,4,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Category */}
              <p className="text-xs font-bold uppercase tracking-wide text-[#E8920A] font-['DM_Sans']">
                {item.tag}
              </p>

              {/* Rating */}
              <div className="mt-2 text-sm tracking-[0.3em] text-[#E8920A] font-['DM_Sans']">
                ★★★★★
              </div>

              {/* Review */}
              <p className="mt-4 min-h-[96px] text-base leading-6 text-[#1A0E04] font-['DM_Sans']">
                "{item.review}"
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-4">

                {/* Replace with your PNG */}
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F5F1EA]">
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={22}
                    height={22}
                  />
                </div>

                <div>
                  <h4 className="text-sm font-bold text-[#1A0E04] font-['DM_Sans']">
                    {item.name}
                  </h4>

                  <p className="mt-1 text-xs text-[#8C8070] font-['DM_Sans']">
                    {item.role}
                  </p>
                </div>

              </div>
            </div>
          ))}
                  </div>

      </div>
    </section>
  );
}