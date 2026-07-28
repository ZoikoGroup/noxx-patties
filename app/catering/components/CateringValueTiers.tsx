"use client";

const valueTiers = [
  {
    label: "Standard",
    title: "Starter Pack",
    units: "Up to 30 units",
    price: "Base",
    accent: "white",
    popular: false,
    features: [
      "Standard pricing per unit",
      "Next-day delivery available",
      "All SKU types available",
    ],
  },
  {
    label: "Best Value",
    title: "Crowd Pack",
    units: "31–72 units",
    price: "-12%",
    accent: "amber",
    popular: true,
    features: [
      "12% better per-unit pricing",
      "Priority delivery slot selection",
      "Free reorder save feature",
      "Waste optimization active",
    ],
  },
  {
    label: "Enterprise Volume",
    title: "Volume Pack",
    units: "73+ units",
    price: "-22%",
    accent: "green",
    popular: false,
    features: [
      "22% better per-unit pricing",
      "Dedicated account manager",
      "Monthly supply plan access",
      "B2B commercial summary",
      "Auto-replenishment logic",
    ],
  },
];

export default function CateringValueTiers() {
  return (
    <section className="w-full bg-[#E0E8D7] py-[40px]">
      <div className="mx-auto max-w-[1440px] px-[92px]">

        {/* Heading */}
        <h2 className="text-center font-['Poppins'] text-[36px] font-semibold leading-[57px] text-[#373737]">
          STEP UP YOUR VALUE TIER
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mt-0 max-w-[719.5px] text-center font-['Poppins'] text-[20px] font-normal leading-8 text-[#373737]">
          Most buyers at your group size choose the Best Value tier. Better
          per-unit economics, stronger flavor distribution, and easier service
          logistics.
        </p>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-3 gap-[20px]">
                      {valueTiers.map((tier) => (
            <div
              key={tier.title}
              className="relative h-[340px] rounded-[20px] border border-[#AEAEAE] bg-[#3C893F] p-[33px]"
            >
              {/* Most Popular Badge */}
              {tier.popular && (
                <div className="absolute right-[17px] top-[17px] rounded-full bg-[#E8920A] px-4 py-1">
                  <span className="font-['Poppins'] text-[10px] font-bold tracking-wide text-white">
                    MOST POPULAR
                  </span>
                </div>
              )}

              {/* Label */}
              <p
                className={`font-['Poppins'] text-[12px] font-bold uppercase tracking-wide ${
                  tier.accent === "amber"
                    ? "text-[#E8920A]"
                    : "text-white"
                }`}
              >
                {tier.label}
              </p>

              {/* Title */}
              <h3 className="mt-0 font-['Bebas_Neue'] text-[32px] font-normal text-white">
                {tier.title}
              </h3>

              {/* Units */}
              <p className="mt-0 font-['Poppins'] text-[14px] font-normal text-white">
                {tier.units}
              </p>

              {/* Price */}
              <div
                className={`mt-2 font-['Bebas_Neue'] text-[40px] leading-10 ${
                  tier.accent === "amber"
                    ? "text-[#E8920A]"
                    : tier.accent === "green"
                    ? "text-[#ffffff]"
                    : "text-white"
                }`}
              >
                {tier.price}
              </div>

              {/* Features */}
              <div className="mt-4 space-y-2">
                                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <span
                      className={`font-['Poppins'] text-[12px] font-bold ${
                        tier.accent === "amber"
                          ? "text-[#E8920A]"
                          : tier.accent === "green"
                          ? "text-[#4ADE80]"
                          : "text-white/30"
                      }`}
                    >
                      ✓
                    </span>

                    <span className="font-['Poppins'] text-[12px] font-normal text-white">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
              </div>
    </section>
  );
}