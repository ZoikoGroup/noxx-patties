const pillars = [
  {
    number: "01",
    title: "Cold Chain Integrity",
    description:
      "Product quality protected from production to shelf. Temperature-controlled throughout every stage of the supply chain.",
  },
  {
    number: "02",
    title: "Shelf-Life Optimisation",
    description:
      "Replenishment aligned to real throughput patterns — not static schedules that ignore how quickly product actually moves.",
  },
  {
    number: "03",
    title: "Format Consistency",
    description:
      "Packaging and presentation designed for high-frequency purchase environments and shelf adjacency performance.",
  },
  {
    number: "04",
    title: "Replenishment Cadence",
    description:
      "Engineered to reduce both overstock and stockouts simultaneously. Fewer exceptions, fewer write-offs, more consistent availability.",
  },
];

export default function RetailReliability() {
  return (
    <section className="w-full border-t border-[#EAE4D9] bg-[#FDB735] py-14 lg:py-[58px]">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-[92px]">
        {/* Eyebrow */}
        <p className="text-center font-[Poppins] text-xs font-bold uppercase tracking-wider text-[#E8920A]">
          Operational Reliability
        </p>

        {/* Heading */}
        <h2 className="mt-[19px] text-center font-[Poppins] text-3xl font-extrabold leading-10 text-[#1A0E04] lg:text-4xl">
          Built for retail reliability at scale
        </h2>

        {/* Description */}
        <p className="mx-auto mt-[26px] max-w-[608px] text-center font-[Poppins] text-base font-normal leading-7 text-[#8C8070]">
          Insight without execution is worthless. Noxx Patties is built for the
          operational demands of modern retail environments.
        </p>

        {/* Cards */}
        <div className="mt-[38px] grid grid-cols-1 gap-[31px] sm:grid-cols-2 xl:grid-cols-4">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="rounded-[20px] border border-[#EAE4D9] bg-white p-[25px] shadow-[0px_2px_8px_rgba(26,14,4,0.06)]"
            >
              {/* Number */}
              <span className="font-[Poppins] text-xs font-bold uppercase tracking-wide text-[#E8920A]">
                {pillar.number}
              </span>

              {/* Title */}
              <h3 className="mt-[12px] font-[Poppins] text-base font-bold text-[#1A0E04]">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="mt-[10px] font-[Poppins] text-xs font-normal leading-5 text-[#8C8070]">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
