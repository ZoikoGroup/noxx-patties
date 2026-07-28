const agreementTypes = [
  {
    name: "Standard Wholesale",
    badge: "Annual supply agreement",
    badgeClass: "bg-[#FCDFA0] text-[#9A5E00]",
  },
  {
    name: "Major Regional",
    badge: "Multi-year strategic",
    badgeClass: "bg-[#E8F5EE] text-[#1A5C3A]",
  },
  {
    name: "Volume Commitment",
    badge: "Rights + rebates tied to thresholds",
    badgeClass: "bg-[#FCDFA0] text-[#9A5E00]",
  },
  {
    name: "Multi-Territory",
    badge: "Master distribution agreement",
    badgeClass: "bg-[#E8F5EE] text-[#1A5C3A]",
  },
];

const commercialTerms = [
  {
    label: "Minimum order quantities",
    value: "By SKU, case & pallet",
  },
  {
    label: "Volume pricing",
    value: "Tiered breakpoints",
  },
  {
    label: "Rebate structures",
    value: "Throughput + growth",
  },
  {
    label: "Promotional funding",
    value: "Launch & activation",
  },
  {
    label: "SLA commitment",
    value: "Order → shipment window",
  },
];

const pricingTiers = [
  {
    title: "STANDARD PARTNER",
    heading: "Entry Volume Pricing",
    color: "bg-[#E8920A]",
    titleColor: "text-[#E8920A]",
    description:
      "Minimum order thresholds apply. Standard case pricing with delivery SLAs confirmed at order. Access to full SKU catalog.",
  },
  {
    title: "STRATEGIC PARTNER",
    heading: "Preferred Volume Pricing",
    color: "bg-[#1A5C3A]",
    titleColor: "text-[#1A5C3A]",
    description:
      "Enhanced per-unit economics for partners meeting quarterly throughput thresholds. Priority allocation during constrained periods.",
  },
  {
    title: "ENTERPRISE / MULTI-TERRITORY",
    heading: "Master Agreement Pricing",
    color: "bg-[#7C3AED]",
    titleColor: "text-[#7C3AED]",
    description:
      "Best available terms for multi-territory, high-volume, and strategic partners. Includes rebate structures and co-branding eligibility.",
  },
];

export default function WholesalePricingTerms() {
  return (
    <section className="w-full border-t border-[#EAE4D9] bg-[#FFFAF4] py-16 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[92px]">
        {/* Heading */}
        <h2 className="text-center font-[Poppins] text-3xl font-semibold leading-tight text-[#1A0E04] lg:text-4xl lg:leading-[57px]">
          TIERED PRICING. STRUCTURED TERMS.
        </h2>

        {/* Top Grid */}
<div className="mt-12 flex flex-col gap-8 xl:flex-row xl:items-start xl:justify-between">          {/* Agreement Types */}
<div className="w-full xl:w-[598px] self-start overflow-hidden rounded-[20px] border border-[#EAE4D9] bg-white shadow-[0px_2px_8px_rgba(26,14,4,0.06)]">            <div className="bg-[#1A0E04] px-6 py-5">
              <h3 className="font-[Poppins] text-base font-bold text-white">
                Agreement Types
              </h3>
              <p className="mt-1 font-[Poppins] text-xs text-white/40">
                Based on partner scale and territory
              </p>
            </div>

            {agreementTypes.map((item, index) => (
              <div
                key={item.name}
                className={`flex items-center justify-between px-6 py-4 ${
                  index % 2 === 0 ? "bg-[#F5F1EA]" : "bg-white"
                } ${
                  index !== agreementTypes.length - 1
                    ? "border-b border-[#EAE4D9]"
                    : ""
                }`}
              >
                <span className="font-[Poppins] text-sm text-[#4A3F32]">
                  {item.name}
                </span>

                <span
                  className={`rounded-sm px-3 py-1 font-[Poppins] text-xs font-bold ${item.badgeClass}`}
                >
                  {item.badge}
                </span>
              </div>
            ))}
          </div>

          {/* Commercial Terms */}
<div className="w-full xl:w-[598px] self-start overflow-hidden rounded-[20px] border border-[#EAE4D9] bg-white shadow-[0px_2px_8px_rgba(26,14,4,0.06)]">            <div className="bg-[#1A0E04] px-6 py-5">
              <h3 className="font-[Poppins] text-base font-bold text-white">
                Core Commercial Terms
              </h3>
              <p className="mt-1 font-[Poppins] text-xs text-white/40">
                Applicable to all partner classes
              </p>
            </div>

            {commercialTerms.map((item, index) => (
              <div
                key={item.label}
                className={`flex items-center justify-between px-6 py-4 ${
                  index % 2 === 0 ? "bg-[#F5F1EA]" : "bg-white"
                } ${
                  index !== commercialTerms.length - 1
                    ? "border-b border-[#EAE4D9]"
                    : ""
                }`}
              >
                <span className="font-[Poppins] text-sm text-[#4A3F32]">
                  {item.label}
                </span>

                <span className="text-right font-[Poppins] text-sm font-bold text-[#1A0E04]">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Volume Pricing */}
        <h3 className="mt-16 text-center font-[Poppins] text-2xl font-bold text-[#1A0E04]">
          Volume Pricing Tiers
        </h3>

        <div className="mt-5 grid grid-cols-1 gap-6 xl:grid-cols-3">
                      {pricingTiers.map((tier) => (
            <div
              key={tier.heading}
              className="relative overflow-hidden rounded-[20px] border border-[#EAE4D9] bg-white"
            >
              {/* Left Accent */}
              <div className={`absolute left-0 top-0 h-full w-1 ${tier.color}`} />

              <div className="px-2 py-8 pl-4">
                <p
                  className={`font-[Poppins] text-xs font-bold uppercase tracking-wide ${tier.titleColor}`}
                >
                  {tier.title}
                </p>

                <h4 className="mt-2 font-[Poppins] text-base font-bold text-[#1A0E04]">
                  {tier.heading}
                </h4>

                <p className="mt-2 font-[Poppins] text-sm leading-6 text-[#8C8070]">
                  {tier.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Private Label Banner */}
        <div className="mt-4 rounded-[20px] border border-[#FCDFA0] bg-[#FEF3DC] px-0 py-4 text-center">
          <h4 className="font-[Poppins] text-sm font-bold uppercase tracking-wide text-[#9A5E00]">
            Private Label &amp; Co-Branding
          </h4>

          <p className="mx-auto mt-1 max-w-5xl font-[Poppins] text-sm leading-6 text-[#4A3F32]">
            Private Label, Co-Branded, and selective White Label programs
            available for qualifying enterprise accounts. Governed by formula
            protection, packaging standards, and anti-cannibalization controls.
          </p>
        </div>
      </div>
    </section>
  );
}