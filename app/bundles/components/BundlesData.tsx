const signals = [
  {
    title: "Product demand patterns",
    description:
      "SKUs included because they are proven high-velocity performers across active markets.",
  },
  {
    title: "SKU performance and repeat purchase rates",
    description:
      "The products that come back — not just the products that sold once.",
  },
  {
    title: "Regional consumption trends",
    description:
      "Bundle composition reflects what moves in your market, not a generic global average.",
  },
];

export default function BundlesData() {
  return (
    <section className="w-full bg-[#FFFAF4] py-14 lg:py-[66px]">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-[92px]">
        {/* Heading */}
        <h2 className="text-center font-['Poppins'] text-3xl font-extrabold leading-10 text-[#1A0E04] lg:text-4xl">
          Every bundle engineered from real data
        </h2>

        {/* Description */}
        <p className="mx-auto mt-[13px] max-w-[819px] text-center font-['Poppins'] text-base font-normal leading-7 text-[#8C8070]">
          Bundles are not put together by gut feel or promotional logic. Every
          configuration is built from the same data that drives SKU selection
          across the entire platform.
        </p>

        <div className="mt-10 grid grid-cols-1 items-start gap-[64px] lg:grid-cols-2">
          {/* Signal Cards */}
          <div className="flex flex-col gap-[15px]">
            {signals.map((signal) => (
              <div
                key={signal.title}
                className="flex gap-[14px] rounded-[20px] border border-[#EAE4D9] bg-white px-[21px] py-[15px] shadow-[0px_2px_8px_rgba(26,14,4,0.06)]"
              >
                {/* Check */}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FEF3DC] font-['Poppins'] text-xs font-bold text-[#E8920A]">
                  ✓
                </span>

                <div>
                  {/* Title */}
                  <h3 className="font-['Poppins'] text-base font-bold text-[#1A0E04]">
                    {signal.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-[5px] font-['Poppins'] text-xs font-normal leading-5 text-[#8C8070]">
                    {signal.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Principle Card */}
          <div className="rounded-[20px] bg-[#E8920A] px-[40px] py-[40px] shadow-[0px_20px_48px_rgba(26,14,4,0.14)]">
            {/* Eyebrow */}
            <span className="font-['Poppins'] text-xs font-bold uppercase tracking-wide text-white">
              System Principle
            </span>

            {/* Title */}
            <h3 className="mt-[4px] font-['Poppins'] text-xl font-bold leading-7 text-white">
              Bundles are not promotional packs. They are structured product
              configurations within the Noxx Patties system.
            </h3>

            {/* Description */}
            <p className="mt-[20px] font-['Poppins'] text-[14px] font-normal leading-6 text-white">
              Designed to increase order efficiency, improve product
              distribution, and accelerate purchasing decisions. Every bundle
              reflects what actually performs in the market — not what we want
              to move.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
