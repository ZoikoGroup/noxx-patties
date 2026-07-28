"use client";

import Image from "next/image";

const visionPoints = [
  {
    title: "Preserve Cultural Identity Without Compromise",
    description:
      "Heritage is not decoration. It is the foundation every product is built from.",
  },
  {
    title: "Scale With Discipline",
    description:
      "Ambition without execution is failure. We build systems that withstand scale — not just announce it.",
  },
  {
    title: "Deliver Measurable Value",
    description:
      "For every participant in the platform — consumer, retailer, distributor, or franchisee.",
  },
  {
    title: "Institutional Credibility",
    description:
      "Food safety, transparent labeling, process integrity, and regulatory readiness — across all markets.",
  },
];

export default function AboutVision() {
  return (
    <section className="w-full bg-[#3C893F] py-[58px]">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-[92px]">

        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-5">

          {/* Left Content */}
          <div className="w-[588px] max-w-full">

            <h2 className="font-['Poppins'] text-[24px] lg:text-[36px] font-semibold leading-tight lg:leading-[57px] text-white">
              BUILDING FOR THE
              <br />
              NEXT PHASE OF
              <br />
              THE FOOD SYSTEM.
            </h2>

            <p className="mt-3 w-[511px] max-w-full font-['Poppins'] text-[16px] font-normal leading-7 text-white/40">
              We are not building for the present market alone. Our long-term
              vision is a world in which culturally authentic food is no longer
              marginalized as niche, but recognized as mainstream, scalable,
              and operationally intelligent.
            </p>

            {/* Vision Points */}
            <div className="mt-3 flex flex-col gap-4">
                {visionPoints.map((point) => (
  <div key={point.title} className="flex items-start">

    {/* Check Box */}
    <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md border border-white bg-white">
      <span className="font-['Poppins'] text-[14px] font-bold text-[#3C893F]">
        ✓
      </span>
    </div>

    {/* Text */}
    <div className="ml-4">

      <h3 className="font-['Poppins'] text-[16px] font-bold text-white">
        {point.title}
      </h3>

      <p className="mt-[1px] max-w-[530px] font-['Poppins'] text-[12px] font-normal leading-5 text-white/40">
        {point.description}
      </p>

    </div>

  </div>
))}

          </div>

        </div>

        {/* Right Image */}
        <div className="relative min-h-[600px] w-[588px] max-w-full overflow-hidden rounded-[20px] border border-white/10 bg-[#A3A3A3] flex-shrink-0">
          <Image
            src="/about/vision.png"
            alt="Future of the food system"
            width={588}
            height={20}
            className="absolute left-[0px] top-[-14px] h-[620px] w-[588px] max-w-none object-cover"
            priority
          />
        </div>

      </div>
            </div>
    </section>
  );
}