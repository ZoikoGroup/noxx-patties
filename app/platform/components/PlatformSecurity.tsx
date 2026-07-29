import Image from "next/image";

const securityItems = [
  {
    id: 1,
    icon: "/platform/security-encryption.png",
    title: "Encryption Everywhere",
    description:
      "All sensitive data encrypted in transit (TLS 1.3+) and at rest. Secret management through vault solutions — no plaintext credentials anywhere.",
  },
  {
    id: 2,
    icon: "/platform/security-rbac.png",
    title: "RBAC + Policy Controls",
    description:
      "Role-based and policy-based access controls for all privileged operations. Separation of duties for sensitive approvals and configuration changes.",
  },
  {
    id: 3,
    icon: "/platform/security-fraud-detection.png",
    title: "Fraud & Anomaly Detection",
    description:
      "Continuous monitoring for suspicious order, pricing, or partner activity. Automated alerts with human escalation for high-severity events.",
  },
  {
    id: 4,
    icon: "/platform/security-audit-ledger.png",
    title: "Immutable Audit Ledger",
    description:
      "Every approval, override, pricing change, territory decision, and contract action creates an immutable, attributable audit record.",
  },
  {
    id: 5,
    icon: "/platform/security-jurisdiction.png",
    title: "Jurisdiction-Aware Compliance",
    description:
      "Food safety, labeling, labor law, tax, and franchise/distribution obligations mapped per jurisdiction — USA, UK, EU, and Africa.",
  },
  {
    id: 6,
    icon: "/platform/security-observability.png",
    title: "Observability Stack",
    description:
      "Structured logs, distributed traces, and business KPI dashboards via Datadog / Grafana / Prometheus / OpenTelemetry. Correlation IDs on every request.",
  },
];

export default function PlatformSecurity() {
  return (
    <section className="w-full bg-[#FAFAF9] py-16 lg:py-[56px]">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-[92px]">
        {/* Heading */}
        <h2 className="text-center font-[Poppins] text-3xl font-semibold leading-tight text-[#1A0E04] lg:text-4xl lg:leading-[57px]">
          ENTERPRISE SECURITY. REGULATOR-CREDIBLE.
        </h2>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {securityItems.map((item) => (
            <div
              key={item.id}
              className="rounded-[20px] border border-[#EAE4D9] bg-white px-7 py-[30px] shadow-[0px_2px_8px_rgba(26,14,4,0.06)]"
            >
              {/* Icon */}
              <Image
                src={item.icon}
                alt={item.title}
                width={28}
                height={39}
                className="h-[39px] w-[28px] object-contain"
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
