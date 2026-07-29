const meta = ["0.4 miles away", "Delivery & Collection", "Est. 20–28 min delivery"];

export default function LocationsFeaturedBar() {
  return (
    <section className="w-full border-b border-[#FEE1A3] bg-[#D92127] py-6 lg:py-[27px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-6 px-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-[92px]">
        {/* Left Content */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-[26px]">
          {/* Badge */}
          <span className="inline-flex h-6 w-[222.7px] shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-white px-3 font-[Poppins] text-[10px] font-bold uppercase tracking-wide text-[#E8920A]">
            ⭐ Best Access Point for You
          </span>

          <div className="min-w-0">
            {/* Title */}
            <h2 className="font-[Poppins] text-2xl font-semibold whitespace-nowrap text-white lg:text-3xl">
              Noxx Patties — Brixton Market
            </h2>

            {/* Meta */}
            <div className="mt-[6px] flex flex-wrap items-center gap-x-6 gap-y-1 lg:flex-nowrap">
              <span className="whitespace-nowrap font-[Poppins] text-xs font-bold text-white">
                ● Open Now
              </span>

              {meta.map((item) => (
                <span
                  key={item}
                  className="whitespace-nowrap font-[Poppins] text-xs font-normal text-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex shrink-0 flex-col gap-4 sm:flex-row">
          <button className="flex h-12 items-center justify-center rounded-full bg-[#E8920A] px-8 font-[Poppins] text-sm font-bold text-white shadow-[0px_4px_12px_rgba(232,146,10,0.30)] transition hover:opacity-90">
            🛒 Order Now
          </button>

          <button className="flex h-12 items-center justify-center rounded-full border border-[#D5CCBE] px-8 font-[Poppins] text-sm font-semibold text-white transition hover:bg-white hover:text-[#D92127]">
            View Location
          </button>
        </div>
      </div>
    </section>
  );
}
