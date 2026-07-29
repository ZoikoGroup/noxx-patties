import Image from "next/image";

const layers = [
  {
    id: 1,
    icon: "/platform/layer-experience.png",
    title: "Experience Layer",
    badge: "Consumer + B2B",
    description:
      "Consumer storefront, partner portals (franchise, retail, wholesale), HQ operations console, mobile apps",
  },
  {
    id: 2,
    icon: "/platform/layer-identity-access.png",
    title: "Identity & Access Layer",
    badge: "Security",
    description:
      "JWT-based authentication, RBAC, multi-tenant isolation, API key management, SSO integration",
  },
  {
    id: 3,
    icon: "/platform/layer-api-gateway.png",
    title: "API Gateway Layer",
    badge: "Gateway",
    description:
      "Rate limiting, routing, versioning, observability hook, contract enforcement, authentication pass-through",
  },
  {
    id: 4,
    icon: "/platform/layer-intelligence.png",
    title: "Intelligence Layer",
    badge: "AI Governed",
    description:
      "Forecast service, recommendation engine, price optimization, site intelligence, partner risk scoring, anomaly detection, model registry, human-in-the-loop governance",
  },
  {
    id: 5,
    icon: "/platform/layer-domain-services.png",
    title: "Domain Services Layer",
    badge: "Core Logic",
    description:
      "11 bounded-context microservices — Commerce, Product, Inventory, Logistics, Partner, Pricing, Territory, Compliance, Intelligence, Analytics, Manufacturing",
  },
  {
    id: 6,
    icon: "/platform/layer-workflow-event.png",
    title: "Workflow & Event Layer",
    badge: "Event-Driven",
    description:
      "Kafka event backbone, domain event contracts, async workflows, dead-letter queues, CQRS read-model projections",
  },
  {
    id: 7,
    icon: "/platform/layer-integration.png",
    title: "Integration Layer",
    badge: "Integrations",
    description:
      "ERP connectors, POS integrations, payment processors, delivery platform APIs, compliance/certification feeds, 3PL logistics systems",
  },
  {
    id: 8,
    icon: "/platform/layer-infrastructure-devops.png",
    title: "Infrastructure & DevOps Layer",
    badge: "Cloud Native",
    description:
      "Kubernetes orchestration, Terraform IaC, GitHub Actions CI/CD, multi-region cloud deployment, feature flags, blue-green releases",
  },
  {
    id: 9,
    icon: "/platform/layer-observability.png",
    title: "Observability & Governance Layer",
    badge: "Visibility",
    description:
      "Datadog / Grafana / Prometheus / OpenTelemetry, distributed tracing, SLA monitoring, AI audit logs, compliance dashboards, immutable audit ledger",
  },
];

export default function PlatformLayerStack() {
  return (
    <section className="w-full bg-[#D92127] py-16 lg:py-[50px]">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-[92px]">
        {/* Heading */}
        <h2 className="text-center font-[Poppins] text-3xl font-semibold leading-tight text-white lg:text-4xl lg:leading-[57px]">
          PLATFORM LAYER STACK.
        </h2>

        {/* Description */}
        <p className="mx-auto mt-3 max-w-[1007px] text-center font-[Poppins] text-base font-normal leading-7 text-white">
          Architecture type: event-driven microservices with domain-driven
          design and CQRS. Multi-tenant SaaS with transactional services, shared
          event backbone, governed AI layer, and analytical warehouse.
        </p>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {layers.map((layer) => (
            <div
              key={layer.id}
              className="relative rounded-[20px] border border-[#FFB936] bg-[#6B21A8]/20 px-[17px] pb-6 pt-[23px]"
            >
              {/* Badge */}
              <span className="absolute right-[17px] top-2 rounded-full bg-[#FFB936] px-[10px] py-[3px] font-[Poppins] text-xs font-bold text-black">
                {layer.badge}
              </span>

              {/* Icon */}
              <Image
                src={layer.icon}
                alt={layer.title}
                width={24}
                height={24}
                className="h-6 w-6 object-contain"
              />

              {/* Title */}
              <h3 className="mt-3 font-[Poppins] text-base font-bold text-white">
                {layer.title}
              </h3>

              {/* Description */}
              <p className="mt-2 font-[Poppins] text-xs font-normal leading-5 text-white">
                {layer.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
