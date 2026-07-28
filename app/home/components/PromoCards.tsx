"use client";

import Image from "next/image";

export default function PromoCards() {
  return (
    <section className="w-full bg-[#FDFAF6] pb-24">
      <div className="mx-auto w-full max-w-[1290px] px-5 lg:px-8">

        <div className="flex flex-col lg:flex-row gap-6">

          {/* Left Banner */}
          <div className="relative min-h-[384px] w-full lg:w-[523px] overflow-hidden rounded-[20px] flex-shrink-0">
            <Image
              src="/home/promo-left.png"
              alt="Super Delicious"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Right Banner */}
          <div className="relative min-h-[384px] flex-1 overflow-hidden rounded-[20px] min-w-0">
            <Image
              src="/home/promo-right.png"
              alt="Buy More Save More"
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