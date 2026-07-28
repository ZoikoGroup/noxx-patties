"use client";

import Image from "next/image";

const foodSystems = [
  {
    title: "Noxx Patties",
    description:
      "The flagship — culturally authentic beef & chicken patties at global scale.",
    icon: "/about/noxx-patties.png",
    featured: true,
  },
  {
    title: "Noxx Chicken",
    description:
      "Crispy chicken range built for volume — wings, tenders, strips, and delivery formats.",
    icon: "/about/noxx-chicken.png",
  },
  {
    title: "GingerNoxx™",
    description:
      "Ginger-forward condiments, spice blends, beverages, and snacks.",
    icon: "/about/gingernoxx.png",
  },
  {
    title: "VitaNoxx",
    description:
      "Functional food range — nutrition-forward products aligned with wellness trends.",
    icon: "/about/vitanoxx.png",
  },
  {
    title: "Zoiko Coffee & Teas",
    description:
      "Hot beverages platform extending the Noxx in-store and DTC experience.",
    icon: "/about/coffee.png",
  },
  {
    title: "AquaNoxx & Noxx Wines",
    description:
      "Refreshment and occasion-led drink extensions completing the full meal occasion.",
    icon: "/about/aquanoxx.png",
  },
];

export default function AboutFoodSystem() {
  return (
    <section className="w-full border-t border-[#EAE4D9] bg-[#E0E8D7] py-[46px]">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-[92px]">

        {/* Heading */}
        <h2 className="text-center font-['Poppins'] text-[24px] lg:text-[36px] font-semibold leading-tight lg:leading-[57px] tracking-wider text-[#3C893F]">
          THE NOXX FOOD SYSTEM
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mt-4 max-w-[650px] text-center font-['Poppins'] text-[16px] leading-7 text-[#8C8070]">
          Noxx Patties forms part of a broader ecosystem designed to increase
          order value, broaden occasion participation, and improve long-term
          economics.
        </p>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-x-[50px] gap-y-[19px] sm:grid-cols-2 lg:grid-cols-3">
            {foodSystems.map((item) => (
  <div
    key={item.title}
    className="relative h-[128px] w-[364px] max-w-full rounded-[20px] border border-[#EAE4D9] bg-white shadow-[0px_2px_8px_rgba(26,14,4,0.06)]"
  >
    <div className="flex h-full items-center px-[20px]">

      {/* Icon */}
      <div className="relative h-[51px] w-[36px] flex-shrink-0">
        <Image
          src={item.icon}
          alt={item.title}
          fill
          className="object-contain"
        />
      </div>

      {/* Text */}
      <div className="ml-[10px]">

        <h3 className="font-['Poppins'] text-[16px] font-bold text-[#1A0E04]">
          {item.title}
        </h3>

        <p className="mt-[3px] w-[272px] max-w-full font-['Poppins'] text-[13px] font-normal leading-5 text-[#8C8070]">
          {item.description}
        </p>

      </div>

    </div>

  </div>
))}
        </div>

      </div>
    </section>
  );
}