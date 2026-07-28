const governanceItems = [
  {
    id: "01",
    title: "Control Before Scale",
    description:
      "Market access is granted through governed rights, not opportunistic wholesaling.",
    note:
      "Prevents channel conflict and protects margin integrity across all active markets.",
  },
  {
    id: "02",
    title: "Performance Before Permanence",
    description:
      "Rights are retained only where partners meet throughput, coverage, and compliance standards.",
    note:
      "Low-performing partners can be restructured or replaced. Rights are not permanent.",
  },
  {
    id: "03",
    title: "Allocation Before Shortage",
    description:
      "When supply tightens, priority follows a pre-defined hierarchy.",
    note:
      "Strategic accounts and high-performing partners are protected during constrained periods.",
  },
  {
    id: "04",
    title: "Systems Before Promises",
    description:
      "Commercial commitments are supported by integration, reporting, and forecasting logic.",
    note:
      "Improves enterprise trust and scales commercial confidence over time.",
  },
];

export default function WholesaleGovernance() {
  return (
    <section className="w-full bg-[#FFB936] py-[86px]">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-[92px]">
        {/* Heading */}
        <h2 className="text-center font-[Poppins] text-4xl font-semibold leading-tight lg:leading-[57px] text-[#181818]">
          HOW THE SYSTEM IS GOVERNED.
        </h2>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 justify-items-center gap-x-5 gap-y-6 lg:grid-cols-2">
          {governanceItems.map((item) => (
            <div
              key={item.id}
              className="w-full max-w-[618px] rounded-[20px] border border-[#181818] bg-white px-[33px] pt-[28px] pb-[28px] shadow-[9px_10px_0px_0px_rgba(0,0,0,1)]"
            >
              {/* Number */}
              <div className="font-[Bebas_Neue] text-[36px] lg:text-[64px] leading-tight lg:leading-[48px] text-[#181818]">
                {item.id}
              </div>

              {/* Title */}
              <h3 className="mt-4 font-[Poppins] text-base font-bold text-[#181818]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-2 font-[Poppins] text-sm leading-5 text-[#181818]/75">
                {item.description}
              </p>

              {/* Note */}
              <p className="mt-2 font-[Poppins] text-xs italic leading-5 text-[#181818]/70">
                {item.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}