import Image from "next/image";

const capabilities = [
  {
    icon: "/partner-portal/icon-order-management.png",
    title: "Order Management",
    points: [
      "Place and manage wholesale and supply orders",
      "Access structured SKU catalogues by category and region",
      "Track fulfilment status and delivery scheduling in real time",
    ],
  },
  {
    icon: "/partner-portal/icon-demand-intelligence.png",
    title: "Demand Intelligence",
    points: [
      "View demand trends by product, territory, and channel",
      "Identify high-velocity SKUs and underperforming inventory",
      "Access system-generated reorder recommendations",
    ],
  },
  {
    icon: "/partner-portal/icon-supply-planning.png",
    title: "Supply Planning",
    points: [
      "Forecast replenishment cycles based on real movement data",
      "Align purchasing with regional demand patterns",
      "Reduce overstock and stockout risk through guided planning",
    ],
  },
  {
    icon: null,
    title: "Performance Visibility",
    points: [
      "Monitor order history and purchasing behaviour",
      "Review supply consistency and fulfilment metrics",
      "Access account-level operational insights",
    ],
  },
];

export default function PartnerPortalCapabilities() {
  return (
    <section className="w-full border-t border-[#EAE4D9] bg-[#FDB735] py-14 lg:py-[46px]">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-[92px]">
        {/* Eyebrow */}
        <p className="text-center font-['Poppins'] text-xs font-bold uppercase tracking-wider text-white">
          What the Portal Enables
        </p>

        {/* Heading */}
        <h2 className="mt-[14px] text-center font-['Poppins'] text-3xl font-semibold leading-10 text-[#1A0E04] lg:text-4xl">
          Operate within the <br/> Noxx system in real time.
        </h2>

        {/* Description */}
        <p className="mx-auto mt-[16px] max-w-[810px] text-center font-['Poppins'] text-base font-normal leading-7 text-[#8C8070]">
          Approved partners use the portal to manage ordering, performance,
          forecasting, and structured commercial engagement with the platform —
          not view static reports.
        </p>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 gap-[20px] lg:grid-cols-2">
          {capabilities.map((capability) => (
            <div
              key={capability.title}
              className="overflow-hidden rounded-[20px] border border-[#EAE4D9] bg-white px-[33px] py-[34px] shadow-[0px_2px_8px_rgba(26,14,4,0.06)]"
            >
              {/* Icon */}
              {capability.icon ? (
                <Image
                  src={capability.icon}
                  alt=""
                  width={28}
                  height={28}
                  className="h-7 w-7 object-contain"
                />
              ) : (
                <span className="block h-7 font-['Poppins'] text-2xl leading-7">
                  👁️
                </span>
              )}

              {/* Title */}
              <h3 className="mt-[24px] font-['Poppins'] text-base font-extrabold text-[#1A0E04]">
                {capability.title}
              </h3>

              {/* Points */}
              <ul className="mt-[11px] flex flex-col gap-[8px]">
                {capability.points.map((point) => (
                  <li key={point} className="flex gap-[8px]">
                    <span className="font-['Poppins'] text-sm font-bold leading-5 text-[#E8920A]">
                      →
                    </span>

                    <span className="font-['Poppins'] text-sm font-normal leading-5 text-[#8C8070]">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
