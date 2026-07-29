import Image from "next/image";

const environments = [
  {
    id: 1,
    icon: "/careers/environment-product.png",
    title: "Product and food innovation",
  },
  {
    id: 2,
    icon: "/careers/environment-supply-chain.png",
    title: "Supply chain and logistics operations",
  },
  {
    id: 3,
    icon: "/careers/environment-retail.png",
    title: "Retail and wholesale execution",
  },
  {
    id: 4,
    icon: "/careers/environment-franchise.png",
    title: "Franchise and business development",
  },
];

export default function CareersEnvironments() {
  return (
    <section className="w-full border-t border-[#EAE4D9] bg-[#FDB735] py-14 lg:py-10">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-6 sm:px-8 lg:flex-row lg:items-stretch lg:gap-8 lg:px-[92px]">
        {/* Left Column */}
        <div className="w-full lg:w-[596px] lg:shrink-0">
          {/* Heading */}
          <h2 className="font-[Poppins] text-2xl font-semibold leading-10 text-[#1A0E04] lg:text-3xl">
            Structured, high - performance
            <br />
            environments.
          </h2>

          {/* Cards */}
          <div className="mt-4 flex flex-col gap-[9px]">
            {environments.map((environment) => (
              <div
                key={environment.id}
                className="flex items-center gap-[10px] rounded-[20px] border border-[#EAE4D9] bg-white px-[25px] py-[14px]"
              >
                {/* Icon */}
                <Image
                  src={environment.icon}
                  alt={environment.title}
                  width={24}
                  height={33}
                  className="h-[33px] w-6 shrink-0 object-contain"
                />

                {/* Title */}
                <h3 className="font-[Poppins] text-base font-semibold text-[#1A0E04]">
                  {environment.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="relative aspect-[575/454] w-full overflow-hidden bg-[#A3A3A3] lg:aspect-auto lg:flex-1">
          <Image
            src="/careers/environments.png"
            alt="Working at Noxx Patties"
            fill
            sizes="(max-width: 1024px) 100vw, 628px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
