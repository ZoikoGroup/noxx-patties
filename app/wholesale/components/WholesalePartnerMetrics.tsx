import Image from "next/image";

const metrics = [
  {
    id: 1,
    icon: "/wholesale/volume-throughput.png",
    title: "Volume Throughput",
    description:
      "Measured by period and by SKU family. Monthly reporting with quarterly business reviews for strategic accounts.",
  },
  {
    id: 2,
    icon: "/wholesale/market-coverage.png",
    title: "Market Coverage",
    description:
      "Outlet penetration and account activation effectiveness measured against territory commitment benchmarks.",
  },
  {
    id: 3,
    icon: "/wholesale/reorder-discipline.png",
    title: "Reorder Discipline",
    description:
      "Order frequency and reorder cadence tracked against supply plan commitments and volume tier targets.",
  },
  {
    id: 4,
    icon: "/wholesale/service-quality.png",
    title: "Service Quality",
    description:
      "Claims ratio, compliance performance, and handling standards monitored through the operational review cycle.",
  },
  {
    id: 5,
    icon: "/wholesale/pricing-compliance.png",
    title: "Pricing Compliance",
    description:
      "Anti-diversion controls and approved pricing framework adherence verified on a rolling basis.",
  },
  {
    id: 6,
    icon: "/wholesale/enforcement-logic.png",
    title: "Enforcement Logic",
    description:
      "Performance diagnostics → corrective action → probation → rights reduction or termination where necessary.",
  },
];

export default function WholesalePartnerMetrics() {
  return (
    <section className="w-full border-t border-[#EAE4D9] bg-[#D92127] py-16 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[92px]">
        {/* Heading */}
        <h2 className="text-center font-[Poppins] text-3xl font-semibold leading-tight text-white lg:text-4xl lg:leading-[57px]">
          PARTNERS ARE MEASURED. ALWAYS.
        </h2>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {metrics.map((item) => (
            <div
              key={item.id}
              className="rounded-[20px] border border-[#EAE4D9] bg-white p-7 shadow-[0px_2px_8px_rgba(26,14,4,0.06)]"
            >
              {/* Icon */}
              <Image
                src={item.icon}
                alt={item.title}
                width={40}
                height={40}
                className="object-contain"
              />

              {/* Title */}
              <h3 className="mt-6 font-[Poppins] text-base font-bold text-[#1A0E04]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-3 font-[Poppins] text-xs leading-5 text-[#8C8070]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}