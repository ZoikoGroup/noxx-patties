"use client";

import Image from "next/image";

export default function NewsletterCTA() {
  return (
    <section className="w-full bg-[#FDFAF6]">
      <div className="mx-auto max-w-[1440px]">

        <div className="flex flex-col overflow-hidden bg-[#E8920A] lg:h-[501px] lg:flex-row">

          {/* Left Content */}
          <div className="flex w-full flex-col justify-center px-6 py-12 lg:w-[656px] lg:px-[92px]">

            {/* Heading */}
            <h2 className="font-['Bebas_Neue'] text-[56px] leading-[64.6px] text-white lg:text-7xl">
              JOIN THE
              <br />
              FLAVOR
              <br />
              MOVEMENT.
            </h2>

            {/* Description */}
            <p className="mt-4 w-[440px]  font-['DM_Sans'] text-base leading-6 text-white/80">
              Get early access to new products, first-order discount,
              and exclusive offers from the Noxx Patties community.
            </p>

            {/* Email Form */}
            <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center">
                              {/* Email Input */}
              <div className="relative h-12 w-full max-w-[320px] overflow-hidden rounded-full border-2 border-white/40 bg-white/25">

                <input
                  type="email"
                  placeholder="Your email address"
                  className="h-full w-full bg-transparent px-6 text-base text-white placeholder:text-white/60 focus:outline-none font-['DM_Sans']"
                />

              </div>

              {/* Join Button */}
              <button className="flex h-12 w-[132px] items-center justify-center rounded-full bg-white transition-all duration-300 hover:scale-105">

                <span className="font-['Space_Grotesk'] text-base font-bold text-[#E8920A]">
                  Join Now
                </span>

              </button>

            </div>

          </div>

          {/* Right Image */}
          <div className="relative h-[320px] w-full lg:h-full lg:w-[784px]">

            <Image
              src="/home/newsletter-image.png"
              alt="Newsletter"
              fill
              priority
              className="object-cover"
            />

          </div>
                  </div>

      </div>
    </section>
  );
}