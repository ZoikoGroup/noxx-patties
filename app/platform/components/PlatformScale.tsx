const stats = [
  {
    id: 1,
    value: "99.9%",
    label: "Uptime Target",
    description: "Critical transaction services SLA across all regions",
  },
  {
    id: 2,
    value: "3",
    label: "Environments",
    description:
      "Development, Staging, Production — with controlled promotion gates",
  },
  {
    id: 3,
    value: "4",
    label: "Deployment Phases",
    description:
      "Commercial Core → Operational Core → Intelligence Core → Enterprise Scale",
  },
  {
    id: 4,
    value: "DLQ",
    label: "Dead-Letter Queues",
    description:
      "All failed async messages captured, inspected, and replayed without data loss",
  },
];

export default function PlatformScale() {
  return (
    <section className="w-full border-t border-[#EAE4D9] bg-[#3C893F] py-16 lg:py-[54px]">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-[92px]">
        {/* Heading */}
        <h2 className="text-center font-[Poppins] text-3xl font-semibold leading-tight text-white lg:text-4xl lg:leading-[57px]">
          BUILT TO STAY UP. BUILT TO SCALE.
        </h2>

        {/* Stat Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="rounded-[20px] border border-[#EAE4D9] bg-white px-6 py-[25px] text-center shadow-[0px_2px_8px_rgba(26,14,4,0.06)]"
            >
              {/* Value */}
              <div className="font-[Bebas_Neue] text-5xl leading-10 text-[#E8920A]">
                {stat.value}
              </div>

              {/* Label */}
              <h3 className="mt-4 font-[Poppins] text-sm font-bold text-[#1A0E04]">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="mt-2 font-[Poppins] text-xs font-normal leading-[18px] text-[#8C8070]">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
