"use client";

import Link from "next/link";

export default function CateringHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#3C893F]">
      <div className="relative mx-auto flex min-h-[400px] max-w-[1440px] items-center justify-center px-5 py-12 lg:py-0">

        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(232,146,10,0.20),transparent_60%)]" />

        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center">

          {/* Badge */}
          <div className="flex h-8 w-[268px] max-w-full items-center rounded-full border border-[#E8920A]/30 bg-[#E8920A]/20 px-4">

            <span className="mr-3 h-[6px] w-[6px] rounded-full bg-[#E8920A]" />

            <span className="font-['Poppins'] text-[12px] font-bold uppercase tracking-wider text-[#E8920A]">
              AI-Powered Ordering Engine
            </span>

          </div>

          {/* Heading */}
          <h1 className="mt-0 font-['Poppins'] text-[30px] lg:text-[48px] font-semibold leading-tight lg:leading-[101.2px]">
            <span className="text-white">FEED MORE. </span>
            <span className="text-[#E8920A]">EFFORTLESSLY.</span>
          </h1>

          {/* Description */}
          <p className="mt-[-10] max-w-[779px] font-['Poppins'] text-[16px] font-light leading-7 text-white">
            Catering, bulk orders, and business supply — optimized
            <br />
            for scale, validated for fulfillment. The system builds your
            order before you start thinking.
          </p>

          {/* Buttons */}
          <div className="mt-4 flex items-center gap-4">

            <Link
              href="/shop"
              className="flex h-12 w-64 items-center justify-center rounded-full bg-[#E8920A] font-['Arial'] text-[16px] font-bold text-white shadow-[0px_6px_20px_rgba(232,146,10,0.40)] transition-all duration-300 hover:scale-[1.02]"
            >
              Order Now
            </Link>

            <Link
              href="/wholesale"
              className="flex h-12 w-64 items-center justify-center rounded-full border border-white bg-transparent font-['Arial'] text-[16px] font-bold text-white transition-all duration-300 hover:bg-white hover:text-[#3C893F]"
            >
              For Business Supply
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}