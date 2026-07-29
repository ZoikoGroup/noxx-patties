const stats = [
  { value: "4", label: "Active Markets", black: true },
  { value: "AI", label: "Demand Intelligence", black: true },
  { value: "Live", label: "SKU Performance Data", black: true },
  { value: "↑", label: "Faster Sell-Through", black: false },
  { value: "↓", label: "Working Capital Tied in Inventory", black: false },
];

export default function RetailStats() {
  return (
    <section className="w-full bg-[#E8920A] py-[21px]">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-[92px]">
        <div className="flex flex-wrap items-center justify-between gap-y-6">
          {stats.map((stat, index) => (
            <div key={stat.label} className="flex items-center">
              {/* Divider */}
              {index > 0 && (
                <span className="mr-6 hidden h-9 w-px bg-white/20 lg:block xl:mr-10" />
              )}

              <div className="flex flex-col items-center">
                {/* Value */}
                <span
                  className={`font-[Poppins] text-3xl leading-10 text-white ${
                    stat.black ? "font-black" : "font-bold"
                  }`}
                >
                  {stat.value}
                </span>

                {/* Label */}
                <span className="mt-[3px] whitespace-nowrap font-[Poppins] text-xs font-semibold uppercase tracking-wide text-white/75">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
