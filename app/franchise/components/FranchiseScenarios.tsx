const scenarios = [
  {
    id: 1,
    label: "CONSERVATIVE SCENARIO",
    title: "Disciplined Entry",
    labelColor: "text-neutral-800",
    valueColor: "text-zinc-900/60",
    rows: [
      ["Daily orders (avg)", "80–100"],
      ["Revenue velocity", "Base tier"],
      ["Food cost %", "~32%"],
      ["Contribution margin", "Positive"],
      ["Payback period", "Extended"],
    ],
  },
  {
    id: 2,
    label: "BASE CASE",
    title: "On-Plan Performance",
    labelColor: "text-neutral-700",
    valueColor: "text-neutral-700",
    rows: [
      ["Daily orders (avg)", "150–200"],
      ["Revenue velocity", "On plan"],
      ["Food cost %", "~28%"],
      ["Contribution margin", "Healthy"],
      ["Payback period", "Within target"],
    ],
  },
  {
    id: 3,
    label: "HIGH PERFORMANCE",
    title: "Outperformance",
    labelColor: "text-stone-900",
    valueColor: "text-stone-900",
    rows: [
      ["Daily orders (avg)", "250–300+"],
      ["Revenue velocity", "Above plan"],
      ["Food cost %", "~25%"],
      ["Contribution margin", "Strong"],
      ["Payback period", "Accelerated"],
    ],
  },
];

export default function FranchiseScenarios() {
  return (
    <section className="w-full bg-[#FFF5E8] py-[72px]">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-[92px]">
        {/* Heading */}
        <h2 className="text-center font-[Poppins] text-4xl font-semibold leading-tight lg:leading-[57px] text-neutral-900">
          MODELLED SCENARIOS. NO SINGLE-POINT PROMISES.
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-[1001px] text-center font-[Poppins] text-base font-normal leading-7 text-black">
          Economics are presented through conservative, base-case, and
          high-performance scenarios to preserve credibility and avoid
          overstatement. Operators see what strong, average, and
          underperformance look like.
        </p>

        {/* Scenario Cards */}
        <div className="mt-[56px] grid grid-cols-1 gap-[41px] sm:grid-cols-2 lg:grid-cols-3">
          {scenarios.map((scenario) => (
            <div
              key={scenario.id}
              className="w-[384px] max-w-full rounded-[20px] border border-neutral-700 bg-[#FFB936] px-[33px] pt-[33px] pb-[34px] shadow-[5px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              {/* Card Label */}
              <p
                className={`font-[Poppins] text-xs font-bold uppercase tracking-wide ${scenario.labelColor}`}
              >
                {scenario.label}
              </p>

              {/* Card Title */}
              <h3 className="mt-[10px] font-[Bebas_Neue] text-3xl font-normal text-neutral-900">
                {scenario.title}
              </h3>

              {/* Data Rows */}
              <div className="mt-[37px] space-y-[14px]">
                                {scenario.rows.map(([label, value], index) => (
                  <div
                    key={label}
                    className={`flex items-center justify-between ${
                      index !== scenario.rows.length - 1
                        ? "border-b border-neutral-800 pb-[14px]"
                        : "pt-[10px]"
                    }`}
                  >
                    <span className="font-[Poppins] text-xs font-normal text-black">
                      {label}
                    </span>

                    <span
                      className={`font-[Poppins] text-sm font-bold ${scenario.valueColor}`}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="mx-auto mt-[30px] max-w-[887px] text-center font-[Poppins] text-xs font-normal leading-5 text-neutral-900">
          These are indicative scenario models only. Actual results depend on
          format, location, operator capability, market conditions, and
          execution discipline. Full unit economics are shared during the formal
          qualification and diligence process.
        </p>
      </div>
    </section>
  );
}
            