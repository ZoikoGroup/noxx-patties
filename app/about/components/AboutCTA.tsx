"use client";

import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="w-full bg-[#FDB735]">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-5 py-12 lg:h-[240px] lg:flex-row lg:items-center lg:justify-between lg:gap-5 lg:py-0 lg:px-[92px]">

        {/* Left Content */}
        <div className="max-w-[677px]">
          <h2 className="font-['Poppins'] text-[24px] lg:text-[36px] font-semibold leading-tight lg:leading-[53.2px] text-[#373737]">
            JOIN THE SYSTEM.
          </h2>

          <p className="mt-3 font-['Poppins'] text-[16px] font-normal leading-7 text-black/80">
            Built for consumers seeking depth, retailers seeking performance,
            distributors seeking scalable opportunities, and franchisees
            seeking operating structure.
          </p>
        </div>

        {/* Right Buttons */}
        <div className="flex w-full shrink-0 flex-col gap-6 lg:w-auto">

          <Link
            href="/shop"
            className="flex h-[56px] w-[384px] max-w-full items-center justify-center rounded-full bg-black font-['Poppins'] text-[18px] font-bold text-[#FDB735] transition-all duration-300 hover:scale-[1.02]"
          >
            Order Now
          </Link>

          <Link
            href="/franchise"
            className="flex h-[56px] w-[384px] max-w-full items-center justify-center rounded-full border-2 border-[#373737]/50 bg-transparent font-['Poppins'] text-[18px] font-semibold text-[#373737] transition-all duration-300 hover:bg-black/5"
          >
            Become a Partner →
          </Link>

        </div>

      </div>
    </section>
  );
}