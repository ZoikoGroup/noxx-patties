const accessModes = [
  { label: "🚚 Order Now", active: true },
  { label: "🏃 Collection", active: false },
  { label: "🍽️ Catering", active: false },
  { label: "🏪 Retail Availability", active: false },
  { label: "📍 Coming Soon", active: false },
];

export default function LocationsAccessTabs() {
  return (
    <section className="w-full border-b border-[#EAE4D9] bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-[60px]">
        <div className="flex h-14 items-stretch gap-2 overflow-x-auto lg:justify-center lg:gap-0">
          {accessModes.map((mode) => (
            <button
              key={mode.label}
              className={`flex shrink-0 items-center whitespace-nowrap border-b-[3px] px-[28px] font-[Poppins] text-sm font-bold transition ${
                mode.active
                  ? "border-[#E8920A] text-[#E8920A]"
                  : "border-transparent text-[#8C8070] hover:text-[#1A0E04]"
              }`}
            >
              {mode.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
