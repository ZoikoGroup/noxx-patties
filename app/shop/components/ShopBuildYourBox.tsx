const steps = [
  {
    id: "01",
    title: "Choose Size",
    options: [
      { label: "6 Patties", active: true },
      { label: "12 Patties", active: false },
      { label: "24 Patties", active: false },
      { label: "Party Box", active: false },
    ],
  },
  {
    id: "02",
    title: "Choose Your Mix",
    options: [
      { label: "Bestsellers Mix", active: true },
      { label: "Chicken Lovers", active: false },
      { label: "Heritage Box", active: false },
      { label: "Premium Box", active: false },
      { label: "Plant-Based Box", active: false },
      { label: "Custom Mix", active: false },
    ],
  },
  {
    id: "03",
    title: "Add Format Upgrades",
    options: [
      { label: "+ Mini Bites", active: false },
      { label: "+ Breakfast Patties", active: false },
      { label: "+ Loaded Oxtail", active: false },
      { label: "+ Sweet Patties", active: false },
    ],
  },
];

const summaryRows = [
  { label: "Size", value: "6 Patties" },
  { label: "Mix", value: "Bestsellers" },
  { label: "Format Upgrades", value: "None" },
  { label: "Delivery", value: "Standard" },
];

export default function ShopBuildYourBox() {
  return (
    <section
      id="build-your-box"
      className="w-full scroll-mt-16 border-t border-[#EAE4D9] bg-[#E8920A] py-14 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-[92px]">
        {/* Heading */}
        <h2 className="text-center font-[Poppins] text-3xl font-semibold leading-tight text-[#1A0E04] lg:leading-[53px]">
          BUILD YOUR BOX.
        </h2>

        {/* Description */}
        <p className="mx-auto mt-2 max-w-[675px] text-center font-[Poppins] text-lg font-normal leading-6 text-[#292524]">
          Choose your favourites, mix formats, and create the box that fits your
          week, your household, or your craving.
        </p>

        <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-stretch lg:gap-[60px]">
          {/* Steps */}
          <div className="flex w-full flex-col gap-5 lg:max-w-[598px] lg:flex-1">
            {steps.map((step) => (
              <div
                key={step.id}
                className="rounded-[20px] border border-[#EAE4D9] bg-white p-[25px]"
              >
                {/* Number */}
                <div className="font-[Bebas_Neue] text-5xl leading-[48px] text-[#E8920A]/20">
                  {step.id}
                </div>

                {/* Title */}
                <h3 className="mt-1 font-[Poppins] text-base font-bold text-[#1A0E04]">
                  {step.title}
                </h3>

                {/* Options */}
                <div className="mt-3 flex flex-wrap gap-[5px]">
                  {step.options.map((option) => (
                    <button
                      key={option.label}
                      className={`flex h-8 shrink-0 items-center justify-center whitespace-nowrap rounded-full border px-[10px] font-[Poppins] text-[11px] font-bold transition ${
                        option.active
                          ? "border-[#E8920A] bg-[#E8920A] text-white"
                          : "border-[#EAE4D9] text-[#44403C] hover:border-[#E8920A] hover:text-[#E8920A]"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Summary Panel */}
          <div className="flex w-full flex-col rounded-[20px] bg-[#1A0E04] p-8 lg:max-w-[598px] lg:flex-1">
            {/* Title */}
            <h3 className="font-[Bebas_Neue] text-3xl text-white">Your Box</h3>

            <p className="mt-2 font-[Poppins] text-xs font-normal text-white/40">
              6 Patties · Bestsellers Mix
            </p>

            {/* Rows */}
            <div className="mt-6 flex flex-1 flex-col">
              {summaryRows.map((row, index) => (
                <div
                  key={row.label}
                  className={`flex flex-1 items-center justify-between py-[10px] ${
                    index < summaryRows.length - 1 ? "border-b border-white/5" : ""
                  }`}
                >
                  <span className="font-[Poppins] text-xs font-normal text-white/50">
                    {row.label}
                  </span>

                  <span className="font-[Poppins] text-xs font-bold text-white">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-[15px]">
              <span className="font-[Poppins] text-sm font-semibold text-white/60">
                Box Total
              </span>

              <span className="font-[Bebas_Neue] text-5xl text-[#E8920A]">
                £27.94
              </span>
            </div>

            {/* Saving Note */}
            <p className="mt-4 font-[Poppins] text-xs font-normal text-[#4ADE80]">
              ✓ Add 6 more for 12% saving + free delivery
            </p>

            {/* Buttons */}
            <button className="mt-5 flex h-12 w-full items-center justify-center rounded-xl bg-[#E8920A] font-[Poppins] text-base font-bold text-white shadow-[0px_4px_14px_rgba(232,146,10,0.40)] transition hover:opacity-90">
              🛒 Add Box to Cart
            </button>

            <button className="mt-[11px] flex h-10 w-full items-center justify-center rounded-xl border border-white/10 font-[Poppins] text-xs font-semibold text-white/40 transition hover:border-white/30 hover:text-white">
              💾 Save Box for Later
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
