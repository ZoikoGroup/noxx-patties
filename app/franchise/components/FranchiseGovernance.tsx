import Image from "next/image";

const governanceCards = [
  {
    id: 1,
    image: "/franchise/performance-accountability.png",
    title: "Performance Accountability",
    description:
      "Weekly operational views, monthly performance reviews, and formal escalation thresholds. Intervention rights, corrective action protocols, and termination pathways where material underperformance persists.",
  },
  {
    id: 2,
    image: "/franchise/jurisdictional-compliance.png",
    title: "Jurisdictional Compliance",
    description:
      "Expansion across the USA, UK, Europe, and Africa requires structured compliance adaptation. Food safety, labor law, tax, advertising, consumer protection — all covered.",
  },
  {
    id: 3,
    image: "/franchise/legal-architecture.png",
    title: "Legal Architecture",
    description:
      "Franchise Agreement, Territory Agreement, Supply Agreement. Performance obligations, brand protection controls, renewal conditions, and termination rights — all clearly defined.",
  },
  {
    id: 4,
    image: "/franchise/network-effect.png",
    title: "Network Effect",
    description:
      "Each new unit deepens supply efficiency, strengthens local brand familiarity, adds demand data, and improves portfolio learning. Scale increases control — not fragmentation.",
  },
  {
    id: 5,
    image: "/franchise/exit-pathway.png",
    title: "Exit & Liquidity Pathway",
    description:
      "Single-unit resale, portfolio sale, transfer to an approved operator, or strategic aggregation within the network. Valuation is driven by EBITDA quality, store maturity, and network standing.",
  },
  {
    id: 6,
    image: "/franchise/risk-disclosure.png",
    title: "Risk Disclosure",
    description:
      "Execution risk, cost volatility, local demand variation, labor pressure, and regulatory complexity are all acknowledged. This filters unserious candidates and improves legal defensibility.",
  },
];

export default function FranchiseGovernance() {
  return (
    <section className="w-full border-t border-[#EAE4D9] bg-[#D92127] py-[72px]">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-[92px]">
        {/* Heading */}
        <h2 className="text-center font-[Poppins] text-4xl font-semibold leading-tight lg:leading-[57px] text-white">
          CONTROLLED GROWTH IS A DIFFERENTIATOR.
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-[670px] text-center font-[Poppins] text-base font-normal leading-7 text-white">
          Governance is not a legal afterthought. It is a core part of what
          makes this platform credible to serious operators, investors, and
          institutional partners.
        </p>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-x-[41px] gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
          {governanceCards.map((card) => (
            <div
              key={card.id}
              className="rounded-[20px] border border-[#EAE4D9] bg-white px-7 py-8 shadow-[0px_2px_8px_rgba(26,14,4,0.06)]"
            >
              {/* Icon */}
              <Image
                src={card.image}
                alt={card.title}
                width={28}
                height={39}
                className="object-contain"
              />

              {/* Title */}
              <h3 className="mt-6 font-[Poppins] text-base font-bold text-[#1A0E04]">
                {card.title}
              </h3>

              {/* Description */}
              <p className="mt-4 font-[Poppins] text-xs font-normal leading-6 text-[#8C8070]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
              </div>
    </section>
  );
}