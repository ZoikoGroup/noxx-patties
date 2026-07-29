import Image from "next/image";

const reasons = [
  {
    id: 1,
    icon: "/shop/why-flavour-dna.png",
    title: "Caribbean Flavour DNA",
    description:
      "Every recipe roots in Afro-Caribbean culinary tradition — not approximated, but authentically built.",
  },
  {
    id: 2,
    icon: "/shop/why-category-architecture.png",
    title: "Structured Category Architecture",
    description:
      "Core Heritage, Cultural Signatures, Premium, Ital, Sweet, Mini — a complete category system, not a random selection.",
  },
  {
    id: 3,
    icon: "/shop/why-format-intelligence.png",
    title: "Format Intelligence Across Occasions",
    description:
      "From breakfast patties to premium oxtail, from mini bites to family boxes — built for every moment.",
  },
  {
    id: 4,
    icon: "/shop/why-clean-label.png",
    title: "Clean-Label Ambition",
    description:
      "Transparent ingredients, honest production, and a product system built for consumer trust at scale.",
  },
  {
    id: 5,
    icon: "/shop/why-quality-systems.png",
    title: "Scalable Quality Systems",
    description:
      "Cold chain, traceability, halal pathways, and vegan certification — consistent quality across all formats and markets.",
  },
];

export default function ShopWhyNoxx() {
  return (
    <section className="w-full border-t border-[#EAE4D9] bg-[#FEF9F0] py-14 lg:py-[64px]">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-[92px]">
        {/* Eyebrow */}
        <div className="flex items-center gap-2">
          <span className="h-[2px] w-6 bg-[#E8920A]" />

          <span className="font-[Poppins] text-xs font-bold uppercase tracking-wider text-[#E8920A]">
            Why Noxx Patties
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-2 font-[Poppins] text-3xl font-semibold leading-tight text-[#1A0E04] lg:leading-[53px]">
          WHY NOXX.
        </h2>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className="flex flex-col items-center rounded-[20px] border border-[#EAE4D9] bg-white px-6 py-[26px] text-center"
            >
              {/* Icon */}
              <Image
                src={reason.icon}
                alt={reason.title}
                width={28}
                height={39}
                className="h-[39px] w-[28px] object-contain"
              />

              {/* Title */}
              <h3 className="mt-3 font-[Poppins] text-sm font-bold text-[#1A0E04]">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="mt-[6px] font-[Poppins] text-xs font-normal leading-4 text-[#8C8070]">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
