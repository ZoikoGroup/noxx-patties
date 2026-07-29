export default function RetailHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#5B8A34] py-16 lg:py-[77px]">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_120%_at_80%_50%,rgba(232,146,10,0.20),transparent_58%)]" />

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center px-6 text-center sm:px-8 lg:px-[92px]">
        {/* Heading */}
        <h1 className="font-[Poppins] text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-[69px]">
          RETAIL SUPPLY.{" "}
          <span className="text-[#E8920A]">STOCK WHAT SELLS.</span>
        </h1>

        {/* Description */}
        <p className="mt-1 max-w-[779px] font-[Poppins] text-base font-light leading-8 text-white lg:text-xl">
          Remove what doesn&apos;t. Every SKU selected, positioned, and
          replenished based on real consumption data not assumption.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row lg:mt-12">
          <button className="flex h-12 items-center justify-center whitespace-nowrap rounded-full bg-[#E8920A] px-10 font-[Poppins] text-sm font-bold text-white shadow-[0px_6px_20px_rgba(232,146,10,0.40)] transition hover:opacity-90">
            Start Your Retail Supply Plan
          </button>

          <button className="flex h-12 items-center justify-center whitespace-nowrap rounded-full border border-white bg-white/10 px-10 font-[Poppins] text-sm font-semibold text-white transition hover:bg-white hover:text-[#5B8A34]">
            Speak to the Team
          </button>
        </div>
      </div>
    </section>
  );
}
