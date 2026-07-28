"use client";

import Image from "next/image";

const participants = [
  {
    tag: "Consumer",
    title: "Bold, Culturally Rooted Products",
    description:
      "We provide bold, culturally rooted products that break the monotony of generic fast-food and convenience offerings. Products that are memorable because of their identity, not despite it.",
    icon: "/about/consumer.png",
  },
  {
    tag: "Retailer",
    title: "Category Differentiation",
    description:
      "High-distinction, high-interest products that can support category differentiation, improved basket excitement, and attractive margin potential — backed by real demand data.",
    icon: "/about/retailer.png",
  },
  {
    tag: "Wholesaler & Distributor",
    title: "Scalable Product Family",
    description:
      "A scalable, transportable product family with clearer demand signals and structured expansion opportunities — designed for commercial confidence, not guesswork.",
    icon: "/about/distributions.png",
  },
  {
    tag: "Franchise Operator",
    title: "Standardized Operating Model",
    description:
      "A standardized model supported by brand equity, product consistency, and operational systems designed for long-term growth — not simply another franchise concept.",
    icon: "/about/franchises.png",
  },
];

export default function AboutParticipants() {
  return (
    <section className="w-full bg-[#FDFAF6] py-[67px]">
      <div className="mx-auto max-w-[1440px] px-[60px]">

        {/* Heading */}
        <h2 className="text-center font-['Poppins'] text-[36px] font-semibold leading-[57px] tracking-wider text-[#1A0E04]">
          BUILT FOR EVERY PARTICIPANT
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mt-2 max-w-[664px] text-center font-['Poppins'] text-[16px] font-normal leading-7 text-[#8C8070]">
          Noxx Patties is built to create value across the entire ecosystem
          <br />
          not optimized for one channel at the expense of others.
        </p>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-2 gap-x-[20px] gap-y-[24px]">
            {participants.map((item) => (
  <div
    key={item.tag}
    className="relative h-[236px] w-[565px] overflow-hidden rounded-[20px] border border-[#EAE4D9] bg-white shadow-[0px_2px_8px_rgba(26,14,4,0.06)]"
  >
    {/* Left Accent */}
    <div className="absolute left-0 top-0 h-full w-1 bg-[#E8920A]" />

    {/* Content */}
    <div className="px-[33px] pt-[34px]">

      {/* Icon */}
      <div className="relative h-[24.34px] w-[32px]">
        <Image
          src={item.icon}
          alt={item.tag}
          fill
          className="object-contain"
        />
      </div>

      {/* Tag */}
      <p className="mt-[18px] font-['Poppins'] text-[12px] font-bold uppercase tracking-wide text-[#E8920A]">
        {item.tag}
      </p>

      {/* Title */}
      <h3 className="mt-[4px] font-['Poppins'] text-[18px] font-bold leading-[27px] text-[#1A0E04]">
        {item.title}
      </h3>

      {/* Description */}
      <p className="mt-[8px] max-w-[528px] font-['Poppins'] text-[14px] font-normal leading-6 text-[#8C8070]">
        {item.description}
      </p>

    </div>
  </div>
))}
        </div>

      </div>
    </section>
  );
}
