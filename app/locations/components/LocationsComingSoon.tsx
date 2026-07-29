import Image from "next/image";

const cities = [
  {
    id: 1,
    icon: "/locations/city-manchester.png",
    name: "Manchester",
    format: "Branded Shop + Delivery",
    timing: "Q4 2026",
    cta: "🔔 Notify Me",
    highlight: false,
  },
  {
    id: 2,
    icon: "/locations/city-birmingham.png",
    name: "Birmingham",
    format: "Branded Shop + Catering",
    timing: "Q1 2027",
    cta: "🔔 Notify Me",
    highlight: false,
  },
  {
    id: 3,
    icon: "/locations/city-leeds.png",
    name: "Leeds",
    format: "Collection + Delivery Hub",
    timing: "Q2 2027",
    cta: "🔔 Notify Me",
    highlight: false,
  },
  {
    id: 4,
    icon: "/locations/city-your-city.png",
    name: "Your City?",
    format: "Register demand for your area",
    timing: "Tell Us",
    cta: "📍 Register Interest",
    highlight: true,
  },
];

export default function LocationsComingSoon() {
  return (
    <section className="w-full border-t border-[#EAE4D9] bg-[#FFF5E8] py-16 lg:py-[65px]">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-[92px]">
        {/* Heading */}
        <h2 className="text-center font-[Poppins] text-3xl font-semibold leading-tight text-[#1A0E04] lg:text-5xl lg:leading-[49px]">
          NOXX IS COMING TO MORE CITIES
        </h2>

        {/* Description */}
        <p className="mt-4 text-center font-[Poppins] text-base font-normal text-[#8C8070]">
          Register to be notified when Noxx launches near you.
        </p>

        {/* City Cards */}
        <div className="mt-[52px] grid grid-cols-1 gap-[30px] sm:grid-cols-2 xl:grid-cols-4">
          {cities.map((city) => (
            <div
              key={city.id}
              className="flex flex-col items-center rounded-[20px] border border-[#D5CCBE] bg-white px-6 py-[26px] text-center"
            >
              {/* Icon */}
              <Image
                src={city.icon}
                alt={city.name}
                width={32}
                height={45}
                className="h-[45px] w-8 object-contain"
              />

              {/* Name */}
              <h3 className="mt-[7px] font-[Poppins] text-2xl font-semibold text-[#1A0E04]">
                {city.name}
              </h3>

              {/* Format */}
              <p className="mt-[13px] font-[Poppins] text-xs font-normal text-[#8C8070]">
                {city.format}
              </p>

              {/* Timing */}
              <span className="mt-[12px] font-[Poppins] text-xs font-bold uppercase tracking-wide text-[#E8920A]">
                {city.timing}
              </span>

              {/* Button */}
              <button
                className={`mt-[13px] flex h-8 items-center justify-center rounded-full px-4 font-[Poppins] text-xs font-bold text-white transition hover:opacity-90 ${
                  city.highlight ? "bg-[#E8920A]" : "bg-[#1A0E04]"
                }`}
              >
                {city.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
