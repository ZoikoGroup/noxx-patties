import Image from "next/image";

const audiences = [
  {
    icon: "/bundles/icon-everyday-meals.png",
    title: "Everyday Meals",
    description:
      "Personal consumption made easy. The right mix, the right quantity, ready to order without browsing through individual SKUs.",
  },
  {
    icon: "/bundles/icon-family-household.png",
    title: "Family & Household",
    description:
      "Stock your household with a single order. Variety built in. Formats that freeze and reheat without compromise on quality.",
  },
  {
    icon: "/bundles/icon-office-groups.png",
    title: "Office Lunches & Groups",
    description:
      "Catering for a team without the complexity of individual orders. Balanced flavour spread, predictable quantities.",
  },
  {
    icon: "/bundles/icon-events-catering.png",
    title: "Events & Catering",
    description:
      "Group orders for events, parties, and functions. Pre-optimised for crowd sizes to minimise waste and overspend.",
  },
  {
    icon: "/bundles/icon-retail-resale.png",
    title: "Retail & Resale Planning",
    description:
      "For retail buyers and resellers — structured case packs aligned to sell-through data and margin expectations.",
  },
];

export default function BundlesAudience() {
  return (
    <section className="w-full border-t border-[#EAE4D9] bg-[#FDB735] py-14 lg:py-[84px]">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-[92px]">
        {/* Heading */}
        <h2 className="text-center font-['Poppins'] text-3xl font-extrabold leading-10 text-[#1A0E04] lg:text-4xl">
          Whether it&apos;s one person or a hundred.
        </h2>

        {/* Description */}
        <p className="mx-auto mt-[13px] max-w-[592px] text-center font-['Poppins'] text-base font-normal leading-7 text-[#8C8070]">
          Bundles are designed to reduce decision time and improve consistency
          regardless of who you are ordering for.
        </p>

        {/* Cards */}
        <div className="mt-4 flex flex-wrap justify-center gap-[20px]">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="w-full max-w-[405.33px] rounded-[20px] border border-[#EAE4D9] bg-white px-[29px] py-[30px] shadow-[0px_2px_8px_rgba(26,14,4,0.06)] sm:w-[calc(50%_-_10px)] lg:w-[calc(33.333%_-_13.34px)]"
            >
              {/* Icon */}
              <Image
                src={audience.icon}
                alt=""
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />

              {/* Title */}
              <h3 className="mt-[28px] font-['Poppins'] text-base font-bold text-[#1A0E04]">
                {audience.title}
              </h3>

              {/* Description */}
              <p className="mt-[9px] font-['Poppins'] text-sm font-normal leading-6 text-[#8C8070]">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
