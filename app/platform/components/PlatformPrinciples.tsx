import Image from "next/image";

const principles = [
  {
    id: 1,
    icon: "/platform/principle-event-driven.png",
    title: "Event-Driven First",
    description:
      "Asynchronous communication for scale, resilience, and near real-time orchestration. No synchronous coupling between bounded domains.",
  },
  {
    id: 2,
    icon: "/platform/principle-api-first.png",
    title: "API-First",
    description:
      "All capabilities exposed as governed APIs. Integrations are first-class platform features — not bolt-ons added after the fact.",
  },
  {
    id: 3,
    icon: "/platform/principle-multi-tenant.png",
    title: "Multi-Tenant by Design",
    description:
      "Consumer, franchise, retailer, wholesale, and institutional channels share infrastructure but maintain strict data and operational isolation.",
  },
  {
    id: 4,
    icon: "/platform/principle-auditability.png",
    title: "Auditability by Default",
    description:
      "Every order, pricing change, contract action, AI recommendation, and override is immutably logged. Audit trails are not optional features.",
  },
  {
    id: 5,
    icon: "/platform/principle-explainable-ai.png",
    title: "Explainable AI",
    description:
      "AI may recommend, optimize, and forecast. All material recommendations must be explainable, governable, and subject to human override.",
  },
  {
    id: 6,
    icon: "/platform/principle-region-aware.png",
    title: "Region-Aware Deployment",
    description:
      "Regional deployment capability with centralized governance and local compliance adaptation for USA, UK, Europe, and Africa.",
  },
  {
    id: 7,
    icon: "/platform/principle-embedded-security.png",
    title: "Embedded Security",
    description:
      "Encryption in transit and at rest. Vault-managed secrets. Role-based and policy-based access controls for all privileged operations.",
  },
  {
    id: 8,
    icon: "/platform/principle-operational-truth.png",
    title: "Single Operational Truth",
    description:
      "One authoritative record for every order, product, inventory position, contract, and partner state. No conflicting system-of-record.",
  },
  {
    id: 9,
    icon: "/platform/principle-human-override.png",
    title: "Human Override Rights",
    description:
      "Critical workflows — pricing overrides, territory changes, AI recommendation acceptance — always preserve human override and audit capture.",
  },
];

export default function PlatformPrinciples() {
  return (
    <section className="w-full border-t border-[#EAE4D9] bg-[#FEF9F0] py-16 lg:py-[59px]">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-[92px]">
        {/* Heading */}
        <h2 className="text-center font-[Poppins] text-3xl font-semibold leading-tight text-[#1A0E04] lg:text-4xl lg:leading-[57px]">
          ARCHITECTURE PRINCIPLES.
        </h2>

        {/* Description */}
        <p className="mx-auto mt-3 max-w-[752px] text-center font-[Poppins] text-base font-normal leading-7 text-[#8C8070]">
          Non-negotiable rules that govern how every part of the platform is
          designed, deployed, and operated. No service, integration, or AI model
          is exempt.
        </p>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {principles.map((item) => (
            <div
              key={item.id}
              className="rounded-[20px] border border-[#EAE4D9] bg-white px-7 py-[30px] shadow-[0px_2px_8px_rgba(26,14,4,0.06)]"
            >
              {/* Icon */}
              <Image
                src={item.icon}
                alt={item.title}
                width={28}
                height={29}
                className="h-[29px] w-[28px] object-contain"
              />

              {/* Title */}
              <h3 className="mt-4 font-[Poppins] text-base font-bold text-[#1A0E04]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-2 font-[Poppins] text-xs font-normal leading-5 text-[#8C8070]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
