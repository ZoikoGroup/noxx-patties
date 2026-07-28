import Image from "next/image";

const rightsClasses = [
  {
    id: 1,
    image: "/wholesale/tier-1.png",
    tier: "TIER 1",
    title: "Exclusive Distributor",
    highlight: true,
    description:
      "Granted territorial exclusivity for defined channels, subject to strict volume, coverage, and compliance thresholds. The highest-performance partner class with the strongest commercial terms.",
    points: [
      "Minimum annual purchase obligations met",
      "Coverage expectations fulfilled",
      "Full compliance with pricing framework",
      "System integration and reporting active",
    ],
  },
  {
    id: 2,
    image: "/wholesale/tier-2.png",
    tier: "TIER 2",
    title: "Non-Exclusive Distributor",
    highlight: false,
    description:
      "Permitted to trade within a defined territory or customer class without sole rights. Competitive terms based on throughput performance and account penetration.",
    points: [
      "Adherence to approved pricing bands",
      "Monthly commercial reporting",
      "Anti-diversion controls maintained",
    ],
  },
  {
    id: 3,
    image: "/wholesale/tier-3.png",
    tier: "TIER 3",
    title: "Strategic Distribution Partner",
    highlight: false,
    description:
      "Enhanced rights where the partner contributes scale, regional reach, enterprise account access, or logistics advantage. Eligible for multi-territory agreements and volume rebates.",
    points: [
      "Demonstrated enterprise account access",
      "Regional logistics capability",
      "Multi-year strategic agreement",
    ],
  },
  {
    id: 4,
    image: "/wholesale/tier-4.png",
    tier: "TIER 4",
    title: "Institutional Supply Partner",
    highlight: false,
    description:
      "Permitted to serve schools, corporations, hospitals, or government-linked channels under separate commercial controls. Focused on large-volume recurring supply.",
    points: [
      "Institutional procurement compliance",
      "Volume commitment agreements",
      "Separate commercial controls apply",
    ],
  },
];

export default function WholesaleRightsClasses() {
  return (
    <section className="w-full border-t border-[#EAE4D9] bg-[#FFF5E8] py-[72px]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-[92px]">
        {/* Heading */}
        <h2 className="text-center font-[Poppins] text-4xl font-semibold leading-tight lg:leading-[57px] text-[#1A0E04]">
          DISTRIBUTION RIGHTS CLASSES
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-[1254px] text-center font-[Poppins] text-base leading-7 text-[#8C8070]">
          Market access is granted through governed rights — not opportunistic
          wholesaling.
          <br />
          Each rights class carries defined obligations, performance
          thresholds, and commercial terms.
        </p>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {rightsClasses.map((item) => (
            <div
              key={item.id}
              className={`overflow-hidden rounded-[20px] border bg-white shadow-[0px_2px_8px_rgba(26,14,4,0.06)] ${
                item.highlight
                  ? "border-[#E8920A]"
                  : "border-[#EAE4D9]"
              }`}
            >
              {/* Top Border */}
              <div
                className={`h-1 w-full ${
                  item.highlight ? "bg-[#E8920A]" : "bg-[#EAE4D9]"
                }`}
              />

              <div className="px-8 py-8">
                {/* Icon */}
                <Image
                  src={item.image}
                  alt={item.title}
                  width={40}
                  height={40}
                  className="object-contain"
                />

                {/* Tier */}
                <p className="mt-5 font-[Poppins] text-xs font-bold uppercase tracking-wide text-[#E8920A]">
                  {item.tier}
                </p>

                {/* Title */}
                <h3 className="mt-2 font-[Poppins] text-lg font-bold text-[#1A0E04]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-5 font-[Poppins] text-sm leading-6 text-[#8C8070]">
                  {item.description}
                </p>

                {/* Points */}
                <div className="mt-6 space-y-3">
                                      {item.points.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <span className="mt-[2px] font-[Poppins] text-xs font-semibold text-[#1A5C3A]">
                        ✓
                      </span>

                      <span className="font-[Poppins] text-xs font-semibold text-[#1A5C3A]">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}