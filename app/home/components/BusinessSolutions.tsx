"use client";

import Image from "next/image";
import Link from "next/link";

const businessCards = [
  {
    id: 1,
    tag: "Retail Supply",
    title: "Retail Partner Program",
    description:
      "Bring the highest-demand food SKUs to your shelves. AI-backed margin insights, case pack ordering, and demand velocity data.",
    features: [
      "Product catalog with case pricing",
      "Margin-per-SKU dashboard",
      "Regional demand overlays",
      "Dedicated account manager",
    ],
    button: "Become a Retail Partner →",
    href: "/retail",
    icon: "/home/retail.png",
    bg: "bg-[#D92127]",
    tagColor: "text-white/90",
    titleColor: "text-white",
    descColor: "text-white/90",
    featureColor: "text-white/90",
    checkColor: "text-[#E8920A]",
    buttonClass:
      "bg-[#E8920A] text-white shadow-[0px_4px_12px_rgba(232,146,10,0.35)]",
    circle: "bg-white/5",
  },
  {
    id: 2,
    tag: "Wholesale Distribution",
    title: "Wholesale Platform",
    description:
      "Volume pricing, territory mapping, and integrated logistics coordination for distributors operating at scale.",
    features: [
      "Volume pricing tiers",
      "Territory exclusivity options",
      "Inventory planning tools",
      "Cold chain logistics support",
    ],
    button: "Apply for Wholesale →",
    href: "/wholesale",
    icon: "/home/wholesale.png",
    bg: "bg-[#1A5C3A]",
    tagColor: "text-white/40",
    titleColor: "text-white",
    descColor: "text-white/50",
    featureColor: "text-white/70",
    checkColor: "text-[#A8E6C2]",
    buttonClass:
      "border border-white/25 bg-white/20 text-white",
    circle: "bg-white/5",
  },
  {
    id: 3,
    tag: "Franchise Ownership",
    title: "Build a Scalable Food Business",
    description:
      "Own a Noxx Patties location. AI site selection, proven investment models, and full infrastructure from Zoiko Foods Corp.",
    features: [
      "Transparent investment models",
      "ROI calculator & projections",
      "AI-powered site selection",
      "Revenue streams from day one",
    ],
    button: "Own a Location →",
    href: "/franchise",
    icon: "/home/franchise.png",
    bg: "bg-[#E8920A]",
    tagColor: "text-[#9A5E00]",
    titleColor: "text-[#1A0E04]",
    descColor: "text-[#4A3F32]",
    featureColor: "text-[#4A3F32]",
    checkColor: "text-[#E8920A]",
    buttonClass: "bg-[#1A0E04] text-white",
    circle: "bg-[#FCDFA0]/30",
  },
];

export default function BusinessSolutions() {
  return (
    <section className="w-full bg-[#FDFAF6] py-14">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-[75px]">

        {/* Heading */}
        <h2 className="text-center font-['Poppins'] text-[24px] lg:text-[36px] font-semibold uppercase tracking-wider leading-tight lg:leading-[60.8px] text-[#1A0E04]">
          STOCK WHAT SELLS BACKED BY DATA
        </h2>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
                      {businessCards.map((card) => (
            <div
              key={card.id}
              className={`relative min-h-[460px] overflow-hidden rounded-[20px] ${card.bg} p-8`}
            >
              {/* Icon */}
              <Image
                src={card.icon}
                alt={card.title}
                width={44}
                height={44}
                className="object-contain"
              />

              {/* Tag */}
              <p
                className={`mt-3 font-['Poppins'] text-xs font-bold uppercase tracking-wide ${card.tagColor}`}
              >
                {card.tag}
              </p>

              {/* Title */}
              <h3
                className={`mt-1 font-['Poppins'] text-xl font-bold ${card.titleColor}`}
              >
                {card.title}
              </h3>

              {/* Description */}
              <p
                className={`mt-3 font-['Poppins'] text-sm leading-6 ${card.descColor}`}
              >
                {card.description}
              </p>

              {/* Features */}
              <div className="mt-4 space-y-4">
                {card.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <span
                      className={`font-['DM_Sans'] text-xs font-bold ${card.checkColor}`}
                    >
                      ✓
                    </span>

                    <span
                      className={`font-['Poppins'] text-xs ${card.featureColor}`}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Button */}
              <Link
                href={card.href}
                className={`mt-7 flex h-10 w-fit items-center justify-center rounded-full px-6 font-['Poppins'] text-sm font-bold transition-all duration-300 hover:scale-105 ${card.buttonClass}`}
              >
                {card.button}
              </Link>

              {/* Decorative Circle */}
              <div
                className={`absolute -bottom-8 -right-8 h-36 w-36 rounded-full ${card.circle}`}
              />
            </div>
          ))}
        </div>

        {/* Metrics Banner */}
<div className="mt-16 rounded-[20px] bg-[#3C893F] px-10 py-12 lg:px-10"><div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr_1.4fr_1.4fr]">    {/* Fill Rate */}
    <div>
      <h3 className="font-['Poppins'] text-[30px] lg:text-[48px] font-semibold leading-tight lg:leading-[48px] text-[#E8920A]">
        98%
      </h3>

      <h4 className="mt-4 whitespace-nowrap font-['Poppins'] text-[20px] font-semibold uppercase leading-6 text-[#E8920A]">
        Fill Rate
      </h4>

      <p className=" mt-2 max-w-[228px] font-['Poppins'] text-[16px] leading-7 text-white">
        Consistently maintained across all partner orders
      </p>
    </div>

    {/* Delivery SLA */}
    <div>
      <h3 className="font-['Poppins'] text-[30px] lg:text-[48px] font-semibold leading-tight lg:leading-[48px] text-[#E8920A]">
        48h
      </h3>

      <h4 className="mt-4 whitespace-nowrap font-['Poppins'] text-[20px] font-semibold uppercase leading-6 text-[#E8920A]">
        Delivery SLA
      </h4>

      <p className=" mt-2 max-w-[253px] font-['Poppins'] text-[16px] leading-7 text-white">
        Standard turnaround for confirmed wholesale orders
      </p>
    </div>

    {/* Ingredient Traceability */}
    <div>
      <h3 className="font-['Poppins'] text-[30px] lg:text-[48px] font-semibold leading-tight lg:leading-[48px] text-[#E8920A]">
        QR
      </h3>

      <h4 className="mt-4 whitespace-nowrap font-['Poppins'] text-[20px] font-semibold uppercase leading-6 text-[#E8920A]">
        Ingredient Traceability
      </h4>

      <p className=" mt-2 max-w-[250px] font-['Poppins'] text-[16px] leading-7 text-white">
        Full supply chain transparency via QR-based tracking
      </p>
    </div>

    {/* Cold Chain */}
    <div>
      <h3 className="font-['Poppins'] text-5xl font-semibold leading-tight lg:leading-[48px] text-[#E8920A]">
        -18°C
      </h3>

      <h4 className="mt-4 whitespace-nowrap font-['Poppins'] text-[20px] font-semibold uppercase leading-6 text-[#E8920A]">
        Cold Chain Certified
      </h4>

      <p className="mt-2 max-w-[210px] font-['Poppins'] text-[16px] leading-7 text-white">
        End-to-end temperature-controlled logistics
      </p>
    </div>

  </div>

</div>
      </div>
    </section>
  );
}