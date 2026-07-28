"use client";

import Image from "next/image";

export default function StackingDay() {
  return (
    <section className="w-full bg-[#FDFAF6] pt-10 pb-20">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-[75px]">

        <div className="overflow-hidden rounded-[20px]">
          <Image
            src="/home/stacking-day.png"
            alt="Today's Stacking Day"
            width={1290}
            height={519}
            priority
            className="h-auto w-full"
          />
        </div>

      </div>
    </section>
  );
}