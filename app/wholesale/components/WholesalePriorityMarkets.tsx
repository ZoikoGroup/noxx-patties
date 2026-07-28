import Image from "next/image";

const markets = [
  {
    id: 1,
    image: "/wholesale/usa.png",
    country: "United States",
    badge: "Primary Market",
    badgeClass: "bg-[#4ADE80]/20 text-[#4ADE80]",
    description:
      "Largest deployment. Direct-to-consumer, retail, and wholesale channels active. Distributor network in development.",
  },
  {
    id: 2,
    image: "/wholesale/uk.png",
    country: "United Kingdom",
    badge: "Active Market",
    badgeClass: "bg-[#4ADE80]/20 text-[#4ADE80]",
    description:
      "Parallel launch market. Strong Afro-Caribbean consumer base. Retail and foodservice distribution priority.",
  },
  {
    id: 3,
    image: "/wholesale/europe.png",
    country: "Europe",
    badge: "Expansion Market",
    badgeClass: "bg-[#E8920A]/20 text-[#E8920A]",
    description:
      "Structured expansion via distributor-first entry. Compliance-first deployment aligned to EU food regulation.",
  },
  {
    id: 4,
    image: "/wholesale/africa.png",
    country: "Africa",
    badge: "Strategic Market",
    badgeClass: "bg-white/10 text-white/60",
    description:
      "Long-term strategic expansion. Demand-led entry sequencing with cultural authenticity as the core positioning advantage.",
  },
];

export default function WholesalePriorityMarkets() {
  return (
    <section className="relative w-full overflow-hidden bg-[#1A5C3A] py-16 lg:py-10">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(232,146,10,0.20),transparent_60%)]" />

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-[92px]">
        {/* Heading */}
        <h2 className="text-center font-[Poppins] text-3xl font-semibold leading-tight lg:leading-[57px] text-white lg:text-4xl">
          PRIORITY MARKETS
        </h2>

        {/* Description */}
        <p className="mx-auto mt-0 max-w-[975px] text-center font-[Poppins] text-base leading-7 text-white/60">
          Demand-led market sequencing based on immigrant communities,
          cultural relevance, and convenience-food opportunity.
          Compliance-first deployment where regulation complexity is high.
        </p>

        {/* Cards */}
        <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {markets.map((market) => (
            <div
              key={market.id}
              className="rounded-[20px] border border-white/10 bg-white/10 p-8 text-center"
            >
              {/* Flag */}
              <div className="flex justify-center">
                <Image
                  src={market.image}
                  alt={market.country}
                  width={52}
                  height={52}
                  className="object-contain"
                />
              </div>

              {/* Country */}
              <h3 className="mt-4 font-['Bebas_Neue'] text-2xl text-white">
                {market.country}
              </h3>

              {/* Badge */}
              <div
                className={`mx-auto mt-0 inline-flex rounded-full px-4 py-1 ${market.badgeClass}`}
              >
                <span className="font-[Poppins] text-xs font-bold">
                  {market.badge}
                </span>
              </div>

              {/* Description */}
              <p className="mt-3 font-[Poppins] text-xs leading-5 text-white/50">
                {market.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}