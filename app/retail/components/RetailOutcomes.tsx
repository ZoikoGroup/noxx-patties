import { Fragment } from "react";

const outcomes = [
  {
    title: "Faster sell-through",
    description:
      "SKUs that move at the right cadence reduce dead stock and free up shelf space for performance.",
  },
  {
    title: "Higher basket value",
    description:
      "Category intelligence ensures the right mix drives complementary purchases and repeat visits.",
  },
  {
    title: "Lower working capital in inventory",
    description:
      "Aligned replenishment cadence removes overstock and reduces capital tied up in slow lines.",
  },
  {
    title: "Stronger differentiation",
    description:
      "Culturally authentic, high-demand products that generic competitors cannot replicate.",
  },
];

const metrics = [
  { value: "↑34%", label: "Estimated retail margin on core SKUs" },
  { value: "7–10d", label: "Average reorder cycle for high-velocity lines" },
  { value: "21d", label: "Shelf life (chilled) — 3 months frozen" },
  {
    value: "Live",
    label: "AI demand intelligence — updated continuously across markets",
  },
];

export default function RetailOutcomes() {
  return (
    <section className="w-full bg-[#E8920A] py-14 lg:py-[47px]">
      <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-8 lg:px-0">
        {/* Heading */}
        <h2 className="text-center font-[Poppins] text-3xl font-extrabold leading-10 text-white lg:text-4xl">
          The result: a tighter, more productive category.
        </h2>

        {/* Description */}
        <p className="mx-auto mt-[7px] max-w-[1130px] text-center font-[Poppins] text-base font-normal leading-6 text-white">
          Retail is becoming increasingly unforgiving. Data-driven operators are
          outperforming intuition-led buyers. Continuing to stock based on habit
          is a measurable commercial risk.
        </p>

        <div className="mt-[40px] grid grid-cols-1 items-stretch gap-x-[24px] gap-y-[31px] lg:grid-cols-2">
          {outcomes.map((outcome, index) => (
            <Fragment key={outcome.title}>
              {/* Outcome Card */}
              <div className="flex gap-4 rounded-xl border border-white/40 bg-white/5 px-[21px] py-[19px]">
                {/* Check */}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white font-[Poppins] text-sm font-bold text-[#E8920A]">
                  ✓
                </span>

                <div>
                  {/* Title */}
                  <h3 className="font-[Poppins] text-base font-bold text-white">
                    {outcome.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-[5px] font-[Poppins] text-xs font-normal leading-5 text-white">
                    {outcome.description}
                  </p>
                </div>
              </div>

              {/* Metric Card */}
              <div className="flex flex-col justify-center rounded-[20px] border border-[#F2C379] bg-white/5 px-[29px] py-[25px]">
                {/* Value */}
                <div className="font-[Poppins] text-3xl font-black leading-10 text-white">
                  {metrics[index].value}
                </div>

                {/* Label */}
                <p className="mt-[6px] font-[Poppins] text-xs font-normal text-white">
                  {metrics[index].label}
                </p>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
