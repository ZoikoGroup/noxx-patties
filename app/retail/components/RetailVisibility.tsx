import Image from "next/image";

const capabilities = [
  {
    id: 1,
    icon: "/retail/visibility-sku-velocity.png",
    title: "SKU Velocity by Market",
    description:
      "Which products are driving sell-through in comparable markets. Know what works before committing shelf space — not after you've locked in the assortment.",
  },
  {
    id: 2,
    icon: "/retail/visibility-product-mix.png",
    title: "Product Mix Optimisation",
    description:
      "What combination of SKUs maximises sell-through and margin contribution for your specific format, demographic, and purchasing patterns.",
  },
  {
    id: 3,
    icon: "/retail/visibility-reorder.png",
    title: "Reorder Intelligence",
    description:
      "When to reorder — and when to stop ordering entirely. Restock timing aligned to real throughput, not static schedules that ignore actual demand movement.",
  },
  {
    id: 4,
    icon: "/retail/visibility-early-warning.png",
    title: "Early Warning Signals",
    description:
      "Underperforming inventory is identified before it becomes waste. Demand shifts are flagged early so decisions are made proactively, not reactively.",
  },
];

export default function RetailVisibility() {
  return (
    <section className="w-full bg-[#FFFAF4] py-14 lg:py-[42px]">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-[92px]">
        {/* Eyebrow */}
        <p className="text-center font-[Poppins] text-xs font-bold uppercase tracking-wider text-[#E8920A]">
          AI-Powered Intelligence
        </p>

        {/* Heading */}
        <h2 className="mt-[17px] text-center font-[Poppins] text-3xl font-extrabold leading-10 text-[#1A0E04] lg:text-4xl">
          What our system gives you visibility into.
        </h2>

        {/* Description */}
        <p className="mx-auto mt-[24px] max-w-[599px] text-center font-[Poppins] text-base font-normal leading-7 text-[#8C8070]">
          Real-time demand signals that convert guesswork into guided decisions —
          before the outcome, not after it.
        </p>

        {/* Cards */}
        <div className="mt-[42px] grid grid-cols-1 gap-x-[20px] gap-y-[26px] lg:grid-cols-2">
          {capabilities.map((capability) => (
            <div
              key={capability.id}
              className="rounded-[20px] border border-[#EAE4D9] bg-white px-[29px] pb-[29px] pt-[30px] shadow-[0px_2px_8px_rgba(26,14,4,0.06)]"
            >
              {/* Icon */}
              <Image
                src={capability.icon}
                alt={capability.title}
                width={28}
                height={39}
                className="h-[39px] w-[28px] object-contain"
              />

              {/* Title */}
              <h3 className="mt-4 font-[Poppins] text-base font-bold text-[#1A0E04]">
                {capability.title}
              </h3>

              {/* Description */}
              <p className="mt-[9px] font-[Poppins] text-sm font-normal leading-6 text-[#8C8070]">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
