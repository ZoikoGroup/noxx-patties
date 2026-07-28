"use client";

import { Calendar } from "lucide-react";

export default function CateringOrderBuilder() {
  return (
    <section className="w-full border-t border-[#EAE4D9] bg-[#E0E8D7] py-[67px]">
      <div className="mx-auto flex justify-center">

        {/* Form Card */}
        <div className="min-h-[582px] w-[846px] max-w-full rounded-[20px] bg-[#3C893F] px-10 pt-10 shadow-[0px_20px_48px_rgba(26,14,4,0.14)]">

          {/* Heading */}
          <h2 className="font-['Bebas_Neue'] text-[24px] lg:text-[32px] font-normal text-white">
            Build Your Order
          </h2>

          {/* Subtitle */}
          <p className="mt-2 font-['Poppins'] text-[14px] font-normal text-white/95">
            Adjust any parameter — the system rebalances automatically.
          </p>

          {/* Form */}
          <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
                        {/* Event Type */}
            <div>
              <label className="mb-2 block font-['Poppins'] text-[12px] font-bold uppercase tracking-wide text-white/80">
                Event Type
              </label>

              <select className="h-12 w-full rounded-xl border border-white/10 bg-white px-5 font-['Poppins'] text-[14px] font-normal text-[#919191] outline-none">
                <option>Office Catering</option>
                <option>Party or Social Event</option>
                <option>Retail or Resale Supply</option>
                <option>Personal Bulk Order</option>
              </select>
            </div>

            {/* Budget */}
            <div>
              <label className="mb-2 block font-['Poppins'] text-[12px] font-bold uppercase tracking-wide text-white/80">
                Budget Range
              </label>

              <select className="h-12 w-full rounded-xl border border-white/10 bg-white px-5 font-['Poppins'] text-[14px] font-normal text-[#919191] outline-none">
                <option>$250 – $500</option>
                <option>$500 – $1,000</option>
                <option>$1,000+</option>
              </select>
            </div>

            {/* Dietary */}
            <div>
              <label className="mb-2 block font-['Poppins'] text-[12px] font-bold uppercase tracking-wide text-white/80">
                Dietary Requirements
              </label>

              <select className="h-12 w-full rounded-xl border border-white/10 bg-white px-5 font-['Poppins'] text-[14px] font-normal text-[#919191] outline-none">
                <option>Mixed (all options)</option>
                <option>Vegetarian</option>
                <option>Vegan</option>
                <option>Halal</option>
              </select>
            </div>

            {/* Delivery Date */}
            <div>
              <label className="mb-2 block font-['Poppins'] text-[12px] font-bold uppercase tracking-wide text-white/80">
                Delivery Date
              </label>

              <div className="flex h-12 items-center justify-between rounded-xl border border-white/10 bg-white px-5">
                <span className="font-['Poppins'] text-[14px] text-[#919191]">
                  mm/dd/yyyy
                </span>

                <Calendar size={18} className="text-[#3C893F]" />
              </div>
            </div>

            {/* Group Size */}
            <div>
              <label className="mb-2 block font-['Poppins'] text-[12px] font-bold uppercase tracking-wide text-white/80">
                Group Size (guests)
              </label>

              <div className="flex h-12 w-[192px] items-center rounded-xl border border-white/10 bg-white/10">

                <button className="w-14 text-center font-['Arial'] text-[24px] text-white">
                  −
                </button>

                <div className="flex h-full w-20 items-center justify-center rounded-xl border border-white/10 bg-white">
                  <span className="font-['Bebas_Neue'] text-[30px] text-[#494949]">
                    25
                  </span>
                </div>

                <button className="w-14 text-center font-['Arial'] text-[24px] text-white">
                  +
                </button>

              </div>
            </div>
                        {/* Empty space to match Figma */}
            <div></div>

          </div>

          {/* CTA Button */}
          <button className="mt-14 flex h-14 w-full items-center justify-center rounded-xl bg-white font-['Poppins'] text-[16px] font-bold text-[#3C893F] shadow-[0px_4px_14px_rgba(232,146,10,0.40)] transition-all duration-300 hover:scale-[1.01]">
            Generate Optimized Order
          </button>

        </div>

      </div>

    </section>
  );
}