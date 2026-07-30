export default function FranchiseHero() {
  return (
    <section className="relative flex w-full min-h-[468px] items-center overflow-hidden bg-[#3C893F] py-16 lg:py-[90px]">
      {/* Background Radial Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 75% 30%, rgba(232,146,10,0.20) 0%, rgba(232,146,10,0) 55%)",
        }}
      />

      {/* Top Gradient Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 2%)",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center px-6 text-center sm:px-8 lg:px-[92px]">
        {/* Heading */}
        <h1 className="font-[Poppins] text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-[69px]">
          BUILD A SCALABLE FOOD <span className="text-[#E8920A]">BUSINESS.</span>
        </h1>

        {/* Description */}
        <p className="mt-4 max-w-[951px] font-[Poppins] text-base font-light leading-7 text-white/50">
          This is not a conventional franchise opportunity. It is a governed
          capital deployment platform for a performance-managed food network —
          designed to select disciplined operators into the right formats and
          territories.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row lg:mt-12 lg:gap-8">
          {/* Primary CTA */}
          <a
            href="#qualification"
            className="flex h-12 items-center justify-center rounded-full bg-[#E8920A] px-10 font-[Arial] text-base font-bold text-white shadow-[0px_6px_20px_rgba(232,146,10,0.40)] transition hover:scale-105 sm:w-72"
          >
            Check Your Qualification
          </a>

          {/* Secondary CTA */}
          <a
            href="#formats"
            className="flex h-12 items-center justify-center rounded-full border border-white bg-transparent px-10 font-[Arial] text-base font-bold text-white transition hover:bg-white hover:text-[#3C893F] sm:w-72"
          >
            View Format Options
          </a>
        </div>
      </div>
    </section>
  );
}