"use client";

import Image from "next/image";

const features = [
  {
    title: "Taste Prediction Engine",
    description:
      "Personalized bundles & flavor recommendations driven by purchase history and regional preference data.",
    icon: "/home/taste-icon.png",
  },
  {
    title: "SKU Demand Intelligence",
    description:
      "Real-time regional demand forecasting for retailers. Know what sells before you stock it.",
    icon: "/home/demand-icon.png",
  },
  {
    title: "Cultural Authenticity Engine",
    description:
      "Recipes adapted per market — USA, UK, Europe, Africa — without compromising core identity.",
    icon: "/home/culture-icon.png",
  },
];

export default function WhyNoxx() {
  return (
    <section className="w-full bg-[#D92127] border-y border-[#EAE4D9] py-16 lg:py-20">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-12 px-5 lg:flex-row lg:items-start lg:px-[75px]">

        {/* Left Content */}
        <div className="w-full lg:max-w-[588px]">

          <h2 className="font-['Poppins'] text-[39px] font-semibold uppercase leading-tight tracking-wider text-white lg:text-4xl">
            WE DIDN'T BUILD ANOTHER
            <br />
            FOOD BRAND
          </h2>

          <p className="mt-3 font-['Poppins'] text-[19px] leading-7 text-white">
            We built a global flavor infrastructure. A continuously learning AI
            system that optimizes flavor, demand, and distribution — across
            every market, every customer, every order.
          </p>

          <div className="mt-5 space-y-4">

            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex items-start gap-5 rounded-xl border border-[#EAE4D9] bg-white p-5"
              >
                {/* Icon */}
                <div className="flex h-104px w-588px shrink-0 items-center justify-center rounded-[10px] bg-[#D92127]/20">

                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={24}
                    height={24}
                  />

                </div>

                {/* Text */}
                <div>

                  <h3 className="font-['Poppins'] text-[15px] font-bold text-[#D92127]">
                    {feature.title}
                  </h3>

                  <p className="mt-1 font-['Poppins'] text-{13px} leading-5 text-[#8C8070]">
                    {feature.description}
                  </p>

                </div>
              </div>
            ))}

          </div>

        </div>

        {/* Right Image */}
        <div className="relative h-[551px] w-672px overflow-hidden rounded-3xl bg-[#B0B0B0] lg:h-[554px] lg:w-[672px]">

          <Image
            src="/home/why-noxx.png"
            alt="Why Noxx"
            fill
            className="object-cover"
          />

        </div>

      </div>
    </section>
  );
}