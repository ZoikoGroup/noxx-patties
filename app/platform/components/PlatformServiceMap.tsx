import Image from "next/image";

const domains = [
  {
    id: 1,
    accent: "#E8920A",
    label: "Commerce Domain",
    icon: "/platform/domain-commerce.png",
    title: "Commerce Domain",
    description:
      "Owns all customer orders, carts, checkouts, payments, and order lifecycle across D2C, catering, and partner channels.",
    services: [
      "Cart Service",
      "Checkout Service",
      "Order Service",
      "Payment Service",
      "Subscription Service",
    ],
  },
  {
    id: 2,
    accent: "#166534",
    label: "Product Domain",
    icon: "/platform/domain-product.png",
    title: "Product Domain",
    description:
      "Owns catalog, SKUs, bundles, recipe visibility, pricing display, and menu configuration across all channels.",
    services: [
      "Product Catalog",
      "SKU Service",
      "Bundle Service",
      "Availability Service",
    ],
  },
  {
    id: 3,
    accent: "#1D4ED8",
    label: "Inventory & Supply",
    icon: "/platform/domain-inventory-supply.png",
    title: "Inventory & Supply Domain",
    description:
      "Owns stock positions, allocation rules, replenishment logic, warehouse balances, and safety stock thresholds.",
    services: [
      "Inventory Service",
      "Stock Allocation",
      "Replenishment Service",
      "Warehouse Service",
    ],
  },
  {
    id: 4,
    accent: "#6B21A8",
    label: "Logistics Domain",
    icon: "/platform/domain-logistics.png",
    title: "Logistics Domain",
    description:
      "Owns shipments, routing, cold-chain milestones, carrier management, and proof-of-delivery confirmation.",
    services: [
      "Shipment Service",
      "Carrier Service",
      "Route Service",
      "Delivery Confirmation",
    ],
  },
  {
    id: 5,
    accent: "#F97316",
    label: "Partner Domain",
    icon: "/platform/domain-partner.png",
    title: "Partner Domain",
    description:
      "Owns franchise, retail, distribution, and institutional buyer lifecycle — from qualification through performance management.",
    services: [
      "Partner Service",
      "Tenant Config",
      "Qualification Service",
      "Performance Service",
    ],
  },
  {
    id: 6,
    accent: "#0891B2",
    label: "Pricing & Contracts",
    icon: "/platform/domain-pricing-contracts.png",
    title: "Pricing & Contracts Domain",
    description:
      "Owns list prices, regional pricing, margin rules, rebate structures, contract commitments, and commercial rules enforcement.",
    services: [
      "Pricing Service",
      "Contract Service",
      "Rebate Service",
      "Commercial Rules",
    ],
  },
  {
    id: 7,
    accent: "#6B21A8",
    label: "Intelligence Domain",
    icon: "/platform/domain-intelligence.png",
    title: "Intelligence Domain",
    description:
      "Owns forecasting, recommendations, optimization, anomaly detection, model registry, and human-in-the-loop governance workflows.",
    services: [
      "Forecast Service",
      "Recommendation Engine",
      "Optimization Service",
      "Risk Detection",
      "Model Registry",
    ],
  },
  {
    id: 8,
    accent: "#D92127",
    label: "Compliance & Governance",
    icon: "/platform/domain-compliance.png",
    title: "Compliance & Governance Domain",
    description:
      "Owns food safety, regulatory rules, policy enforcement, audit trails, and AI governance records across all jurisdictions.",
    services: [
      "Compliance Service",
      "Audit Service",
      "Policy Service",
      "AI Governance",
    ],
  },
  {
    id: 9,
    accent: "#166534",
    label: "Analytics Domain",
    icon: "/platform/domain-analytics.png",
    title: "Analytics Domain",
    description:
      "Owns metrics, dashboards, data marts, KPI definitions, and business event reporting for all operational roles.",
    services: ["Metrics Service", "Dashboard Service", "Analytics Export"],
  },
];

export default function PlatformServiceMap() {
  return (
    <section className="w-full border-t border-[#EAE4D9] bg-[#FFB936] py-16 lg:py-[50px]">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-[92px]">
        {/* Heading */}
        <h2 className="text-center font-[Poppins] text-3xl font-semibold leading-tight text-[#1A0E04] lg:text-4xl lg:leading-[57px]">
          BOUNDED CONTEXT SERVICE MAP.
        </h2>

        {/* Description */}
        <p className="mx-auto mt-3 max-w-[655px] text-center font-[Poppins] text-base font-normal leading-7 text-[#404040]">
          Each domain owns its transactional records, write operations, emitted
          events, and business rules. No domain may become a catch-all utility
          bucket.
        </p>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 xl:grid-cols-3">
          {domains.map((domain) => (
            <div
              key={domain.id}
              className="relative overflow-hidden rounded-[20px] border border-[#EAE4D9] bg-white px-7 pb-8 pt-[29px] shadow-[7px_6px_0px_0px_rgba(26,14,4,1)]"
            >
              {/* Accent Bar */}
              <div
                className="absolute inset-x-[1px] top-[1px] h-[3px]"
                style={{ backgroundColor: domain.accent }}
              />

              {/* Label */}
              <div
                className="font-[Poppins] text-[10px] font-bold uppercase tracking-wide"
                style={{ color: domain.accent }}
              >
                {domain.label}
              </div>

              {/* Icon */}
              <Image
                src={domain.icon}
                alt={domain.title}
                width={28}
                height={39}
                className="mt-3 h-[39px] w-[28px] object-contain"
              />

              {/* Title */}
              <h3 className="mt-4 font-[Poppins] text-base font-bold text-[#1A0E04]">
                {domain.title}
              </h3>

              {/* Description */}
              <p className="mt-2 font-[Poppins] text-xs font-normal leading-5 text-[#8C8070]">
                {domain.description}
              </p>

              {/* Services */}
              <ul className="mt-5 space-y-[6px]">
                {domain.services.map((service) => (
                  <li
                    key={service}
                    className="flex items-start font-[Poppins] text-xs font-normal text-[#44403C]"
                  >
                    <span className="mr-2 font-bold text-[#E8920A]">·</span>
                    {service}
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
