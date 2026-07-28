import Image from "next/image";

const features = [
  {
    emoji: "📊",
    title: "Demand Intelligence",
    description:
      "Real-time demand strength by SKU and region. Know what's trending before you place the order.",
  },
  {
    emoji: "💰",
    title: "Margin Logic",
    description:
      "Estimated retail margin range and sell-through rates for every SKU in the catalog.",
  },
  {
    emoji: "🔁",
    title: "Reorder Cadence",
    description:
      "Recommended reorder cycles based on shelf life, throughput data, and regional movement.",
  },
];

export default function MenuBusinessData() {
  return (
    <section className="w-full bg-[#3C893F] py-16">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-[75px]">
        <h2 className="text-center font-['Poppins'] text-3xl font-semibold leading-tight lg:leading-[49px] text-white lg:text-4xl">
          STOCK WHAT SELLS. SEE THE DATA.
        </h2>

        <p className="mx-auto mt-4 max-w-[588px] text-center font-['Poppins'] text-base leading-7 text-white">
          Business buyers see prescriptive starter orders, margin logic, and
          demand cues not a consumer-style browsing experience.
        </p>

        <div className="mt-12 grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex items-start gap-5 rounded-[20px] border border-white/10 bg-white/5 p-6"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-white/10 text-xl">
                  {feature.emoji}
                </div>

                <div>
                  <h3 className="font-['Poppins'] text-base font-bold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 font-['Poppins'] text-xs leading-5 text-white/80">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}

            <button className="h-12 w-full rounded-[50px] bg-[#E8920A] font-['Poppins'] text-base font-bold text-white shadow-[0px_4px_14px_rgba(232,146,10,0.40)] transition hover:bg-[#d98509]">
              Start Supply Plan →
            </button>
          </div>

          <div className="relative min-h-[469px] w-full overflow-hidden rounded-[20px]">
            <Image
              src="/menu/stock-data.png"
              alt="Real-time demand and margin data visualization"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
