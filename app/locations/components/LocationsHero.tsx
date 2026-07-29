const features = [
  "Delivery and collection available",
  "Catering in selected areas",
  "Expanding UK footprint",
];

export default function LocationsHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#4B893A] py-12 lg:py-[48px]">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_120%_at_80%_50%,rgba(232,146,10,0.20),transparent_55%)]" />

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center px-6 text-center sm:px-8 lg:px-[92px]">
        {/* Heading */}
        <h1 className="font-[Poppins] text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-7xl lg:leading-[81px]">
          FIND NOXX <span className="text-[#E8920A]">NEAR YOU.</span>
        </h1>

        {/* Description */}
        <p className="mt-3 max-w-[645px] font-[Poppins] text-base font-light leading-7 text-white/50">
          Order, collect, or access Noxx Patties through the location best
          suited to you. Not just where we are — but how you can reach us.
        </p>

        {/* Feature List */}
        <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row sm:gap-[38px]">
          {features.map((feature) => (
            <div key={feature} className="flex items-center gap-[6px]">
              <span className="font-[Poppins] text-xs font-bold text-[#E8920A]">
                ✓
              </span>

              <span className="font-[Poppins] text-xs font-normal text-white/50">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
