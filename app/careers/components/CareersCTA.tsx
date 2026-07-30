export default function CareersCTA() {
  return (
    <section className="w-full bg-[#E8920A] py-14 lg:py-[73px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col justify-between gap-8 px-6 sm:px-8 lg:flex-row lg:items-center lg:px-[92px]">
        {/* Left Content */}
        <div className="max-w-[400px]">
          {/* Heading */}
          <h2 className="font-[Poppins] text-3xl font-black leading-[48px] text-white lg:text-4xl">
            Think in systems.
            <br />
            Build with us.
          </h2>

          {/* Description */}
          <p className="mt-[15px] font-[Poppins] text-base font-normal leading-6 text-white/80">
            A scalable global food platform. Culture, data, and commerce — all
            converging.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex w-full flex-col gap-[21px] lg:w-[384px] lg:shrink-0">
          <a
            href="mailto:info@noxxpatties.com"
            className="flex h-14 items-center justify-center rounded-full bg-white font-[Poppins] text-sm font-bold text-[#E8920A] transition hover:bg-[#1A0E04] hover:text-white"
          >
            Apply Now
          </a>

          <a
            href="/about"
            className="flex h-14 items-center justify-center rounded-full border-2 border-white/50 font-[Poppins] text-sm font-semibold text-white transition hover:border-white hover:bg-white hover:text-[#E8920A]"
          >
            About Noxx Patties
          </a>
        </div>
      </div>
    </section>
  );
}
