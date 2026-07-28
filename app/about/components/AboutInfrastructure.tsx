"use client";

import Image from "next/image";

export default function AboutInfrastructure() {
  return (
    <section className="w-full bg-[#D92127]">
      <div className="mx-auto flex h-[256px] max-w-[1440px] items-center overflow-hidden">

        {/* Left Image */}
        <div className="relative h-full w-[384px] max-w-full shrink-0 overflow-hidden bg-[#9A9A9A]">
          {/* Replace with your image */}
          <Image
            src="/about/infrastructure.png"
            alt="Infrastructure"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="ml-[40px]">
          <h2 className="font-['Poppins'] text-[24px] font-semibold leading-10 tracking-wide text-white">
            BOLD FLAVOR. CULTURAL HERITAGE. GLOBAL INFRASTRUCTURE.
          </h2>

          <p className="mt-0 w-[589px] max-w-full font-['Poppins'] text-[16px] font-normal leading-6 text-white/80">
            Operating as a trading name of Zoiko Foods Corp, we don&rsquo;t compete
            within the traditional boundaries of QSR or packaged food brands.
            We operate beneath them — at the infrastructure layer.
          </p>
        </div>

      </div>
    </section>
  );
}