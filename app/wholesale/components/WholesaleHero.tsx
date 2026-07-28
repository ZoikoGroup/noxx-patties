export default function WholesaleHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#3C893F] py-[90px]">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_40%,rgba(232,146,10,0.20),transparent_60%)]" />

      <div className="relative mx-auto flex max-w-[1440px] flex-col items-center px-6 text-center sm:px-8 lg:px-[92px]">
        {/* Heading */}
        <h1 className="font-[Poppins] text-4xl font-semibold leading-tight lg:leading-[54px] text-white lg:text-5xl">
          GOVERNED GLOBAL
          <br />
          DISTRIBUTION{" "}
          <span className="text-[#E8920A]">RIGHTS.</span>
        </h1>

        {/* Description */}
        <p className="mt-2 max-w-[1145px] font-[Poppins] text-base font-light leading-7 text-white">
          This is not a commodity food supplier. It is a governed global
          distribution infrastructure system — controlling how product moves
          through retail, foodservice, and cross-border channels while
          preserving margin integrity, quality, and brand standards.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
          <button className="flex h-12 items-center justify-center rounded-full bg-[#E8920A] px-10 font-[Arial] text-base font-bold text-white shadow-[0px_6px_20px_rgba(232,146,10,0.40)] transition hover:opacity-90">
            Apply for Distribution
          </button>

          <button className="flex h-12 items-center justify-center rounded-full border border-white bg-white/10 px-10 font-[Arial] text-base font-bold text-white transition hover:bg-white hover:text-[#3C893F]">
            View Rights Classes
          </button>
        </div>
      </div>
    </section>
  );
}