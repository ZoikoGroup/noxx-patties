"use client";

const advantageCards = [
  {
    number: "01",
    title: "Product Architecture",
    description:
      "Every Noxx Pattie begins with Afro-Caribbean culinary heritage as foundation. Our flavor system draws from Jamaican and wider Caribbean tradition while remaining globally legible and commercially disciplined.",
  },
  {
    number: "02",
    title: "AI Demand Intelligence",
    description:
      "The Noxx Intelligence Layer is a continuously learning system that optimizes flavor, demand, and distribution across markets — converting raw data into commercially actionable decisions.",
  },
  {
    number: "03",
    title: "Supply Chain Control",
    description:
      "Cold chain logistics, ingredient traceability, quality assurance, and repeatable in-market experience — built to withstand scale, not just announce it.",
  },
  {
    number: "04",
    title: "Multi-Channel Distribution",
    description:
      "Direct-to-consumer, retail supply, wholesale distribution, and franchise expansion — four channels designed to reinforce one another commercially and operationally, not operate as isolated silos.",
  },
  {
    number: "05",
    title: "Cultural Authenticity Engine",
    description:
      "Boldness, warmth, spice layering, texture integrity, and identity — our portfolio spans core heritage SKUs, premium extensions, plant-based lines, innovation formats, and functional products.",
  },
  {
    number: "06",
    title: "System-Level Defensibility",
    description:
      "Better data improves product decisions. Better product strengthens demand. Stronger demand improves distribution. Better distribution generates more data. The loop compounds over time.",
  },
];

export default function AboutSystemAdvantage() {
  return (
    <section className="w-full border-t border-[#EAE4D9] bg-[#FFF5E8] py-10">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-[92px]">

        {/* Heading */}
        <h2 className="text-center font-['Poppins'] text-[24px] lg:text-[36px] font-semibold tracking-wider leading-tight lg:leading-[57px] text-[#1A0E04]">
          THE SYSTEM ADVANTAGE
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mt-4 max-w-[663px] text-center font-['Poppins'] text-base leading-7 text-[#8C8070]">
          Our advantage comes from the interaction of multiple systems working
          together — each reinforcing the next in a compounding loop.
        </p>

        {/* Cards */}
        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                      {advantageCards.map((card) => (
            <div
              key={card.number}
              className="rounded-[20px] border border-[#EAE4D9] bg-white px-[15px] pt-[30px] pb-[25px] shadow-[0px_2px_8px_rgba(26,14,4,0.06)]"
            >
              {/* Number */}
              <div className="font-['Bebas_Neue'] text-[30px] lg:text-[56px] leading-tight lg:leading-[56px] text-[#E8920A]">
                {card.number}
              </div>

              {/* Title */}
              <h3 className="mt-3 font-['Poppins'] text-[18px] font-bold leading-[27px] text-[#1A0E04]">
                {card.title}
              </h3>

              {/* Description */}
              <p className="mt-2 font-['Poppins'] text-[14px] leading-6 text-[#8C8070]">
                {card.description}
              </p>
            </div>
          ))}
                  </div>
      </div>
    </section>
  );
}