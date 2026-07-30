"use client";

import Link from "next/link";

export default function CateringCTA() {
  return (
    <section className="w-full bg-[#FDB735] py-[49px]">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-5 lg:flex-row lg:items-start lg:justify-between lg:gap-5 lg:px-[92px]">

        {/* Left Content */}
        <div className="max-w-[678px]">
          <h2 className="font-['Poppins'] text-[24px] lg:text-[36px] font-semibold leading-tight lg:leading-[53.2px] text-[#373737]">
            READY TO FEED YOUR CROWD?
          </h2>

          <p className="mt-2 font-['Poppins'] text-[16px] font-normal leading-7 text-[#373737]/95">
            Your optimized order is already waiting. Start with our AI <br/>
            recommendation or build your own — either way, fulfillment is
            guaranteed.
          </p>
        </div>

        {/* Right Buttons */}
        <div className="flex flex-col gap-4">

          <Link
            href="/shop"
            className="flex h-14 w-[384px] max-w-full items-center justify-center rounded-full bg-[#272727] font-['Poppins'] text-[16px] font-bold text-[#FDB735] transition-all duration-300 hover:bg-black"
          >
            🍔 Start My Order
          </Link>

          <Link
            href="/help"
            className="flex h-14 w-[384px] max-w-full items-center justify-center rounded-full border-2 border-[#353535] bg-transparent font-['Poppins'] text-[16px] font-semibold text-[#373737] transition-all duration-300 hover:bg-[#353535] hover:text-white"
          >
            Talk to Sales →
          </Link>

        </div>

      </div>
    </section>
  );
}