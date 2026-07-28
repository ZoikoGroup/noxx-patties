const journeyPhases = [
  {
    id: 1,
    phase: "PHASE 1",
    timeline: "DAY 0–30",
    title: "Launch & Onboarding",
    accent: "#E8920A",
    steps: [
      "Onboarding and training certification",
      "Site setup and brand installation",
      <>
        Systems integration and operational
        <br />
        certification
      </>,
      "Supply chain activation and first orders",
      "Launch execution and demand activation",
    ],
  },
  {
    id: 2,
    phase: "PHASE 2",
    timeline: "DAY 30–90",
    title: "Stabilization",
    accent: "#1A5C3A",
    steps: [
      "Local optimization and KPI calibration",
      "Early performance review and feedback loop",
      "Demand velocity analysis and SKU optimization",
      "Catering and B2B supply activation",
      "First formal performance review",
    ],
  },
  {
    id: 3,
    phase: "PHASE 3",
    timeline: "YEAR 1+",
    title: "Growth & Expansion",
    accent: "#7C3AED",
    steps: [
      <>
        Margin improvement and throughput
        <br />
        optimization
      </>,
      "Recurring revenue development",
      "Multi-unit readiness assessment",
      "Territory expansion eligibility review",
      "Exit and liquidity pathway planning",
    ],
  },
];

export default function FranchiseJourney() {
  return (
    <section className="w-full border-t border-[#EAE4D9] bg-[#38833E] py-[52px]">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-[92px]">
        {/* Heading */}
        <h2 className="text-center font-[Poppins] text-4xl font-semibold leading-tight lg:leading-[57px] text-white">
          YOUR JOURNEY FROM APPROVAL TO EXPANSION.
        </h2>

        {/* Cards */}
        <div className="mt-[30px] grid grid-cols-1 gap-[20px] sm:grid-cols-2 lg:grid-cols-3">
          {journeyPhases.map((phase) => (
            <div
              key={phase.id}
              className="relative w-[384px] max-w-full overflow-hidden rounded-[20px] border border-[#EAE4D9] bg-white shadow-[0px_2px_8px_rgba(26,14,4,0.06)]"
            >
              {/* Top Accent Bar */}
              <div
                className="h-1 w-full"
                style={{ backgroundColor: phase.accent }}
              />

              <div className="px-[25px] pt-[29px] pb-[32px]">
                {/* Phase */}
                <p
                  className="font-[Poppins] text-xs font-bold uppercase tracking-wide"
                  style={{ color: phase.accent }}
                >
                  {phase.phase}
                </p>

                {/* Timeline */}
                <h3
                  className="mt-[8px] font-[Poppins] text-4xl font-semibold leading-9"
                  style={{ color: phase.accent }}
                >
                  {phase.timeline}
                </h3>

                {/* Title */}
                <h4 className="mt-[18px] font-[Poppins] text-lg font-bold text-[#1A0E04]">
                  {phase.title}
                </h4>

                {/* Steps */}
                <div className="mt-[2px] space-y-[4px]">
                                      {phase.steps.map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="mt-[2px] font-[Poppins] text-sm font-bold text-[#E8920A]">
                        →
                      </span>

                      <div className="font-[Poppins] text-sm font-normal leading-6 text-[#4A3F32]">
                        {step}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}