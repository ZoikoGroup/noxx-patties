export default function FranchiseHero() {
  return (
    <section className="relative flex w-full justify-center overflow-hidden bg-[#3C893F]">
      <div className="relative min-h-[468px] w-[1440px] max-w-full overflow-hidden">
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

        {/* Heading */}
        <h1 className="absolute left-[265px] top-[151px] text-[30px] lg:text-[48px] font-semibold leading-tight lg:leading-[92px] font-[Poppins]">
          <span className="text-white">BUILD A SCALABLE FOOD </span>
          <span className="text-[#E8920A]">BUSINESS.</span>
        </h1>

        {/* Description */}
        <p className="absolute left-[245px] top-[243px] w-[951px] max-w-full text-center text-base font-light leading-7 font-[Poppins] text-white/50">
          This is not a conventional franchise opportunity. It is a governed
          capital deployment platform for a performance-managed food network —
          designed to select disciplined operators into the right formats and
          territories.
        </p>

        {/* Primary CTA */}
        <button className="absolute left-[403px] top-[343px] flex h-12 w-72 items-center justify-center rounded-full bg-[#E8920A] font-[Arial] text-base font-bold text-white shadow-[0px_6px_20px_rgba(232,146,10,0.40)] transition hover:scale-105">
          Check Your Qualification
        </button>

        {/* Secondary CTA */}
        <button className="absolute left-[735px] top-[343px] flex h-12 w-72 items-center justify-center rounded-full border border-white bg-transparent font-[Arial] text-base font-bold text-white transition hover:bg-white hover:text-[#3C893F]">
          View Format Options
        </button>
      </div>
    </section>
  );
}