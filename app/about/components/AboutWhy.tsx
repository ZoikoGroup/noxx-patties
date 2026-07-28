"use client";

import Image from "next/image";

export default function AboutWhy() {
  return (
    <section className="w-full bg-[#FDFAF6] py-20">
     <div className="mx-auto max-w-[1440px] px-[92px]">

<div className="mx-auto flex w-full max-w-[1256px] items-center justify-between gap-[30px]">
          {/* Left Image */}
<div className="relative h-[407px] w-[629px] overflow-hidden rounded-[20px] shadow-[0px_20px_48px_rgba(26,14,4,0.14)]">
  <Image
  src="/about/why-exist.png"
  alt="Why this needed to exist"
  fill
  className="object-cover rounded-[20px]"
/>
</div>

          {/* Right Content */}
          <div className="w-[569px]">

<h2 className="w-[569px] font-['Poppins'] text-[36px] font-semibold leading-[57px] tracking-wider text-[#1A0E04]">              WHY THIS NEEDED TO EXIST
            </h2>

<h3 className="mt-3 w-[569px] font-['Poppins'] text-[20px] font-semibold leading-8 text-[#1A0E04]">              The global food industry has optimized for scale, but too
              often at the expense of identity, differentiation, and
              intelligence.
            </h3>
<p className="mt-4 w-[553px] font-['Poppins'] text-base leading-7 text-[#8C8070]">              Culturally rooted products are frequently diluted into generic
              formats that travel operationally but lose their meaning
              commercially.
              <br />
              Consumers are underserved by repetitive, low-distinction
              offerings.
              <br />
              Retailers must choose between authenticity and reliability.
            </p>

<p className="mt-4 w-[571px] font-['Poppins'] text-base leading-7 text-[#8C8070]">              The result is a structural gap — a lack of intelligent,
              system-ready food platforms capable of preserving authenticity
              while performing across modern retail, DTC, wholesale, and
              franchise channels. Noxx Patties was built to close that gap.
            </p>

          </div>

        </div>
              </div>
    </section>
  );
}