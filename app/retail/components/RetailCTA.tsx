export default function RetailCTA() {
  return (
    <section className="w-full bg-[#E8920A] py-14 lg:py-[50px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col justify-between gap-8 px-6 sm:px-8 lg:flex-row lg:items-center lg:px-[92px]">
        {/* Left Content */}
        <div className="max-w-[454px]">
          {/* Heading */}
          <h2 className=" w-586 font-[Poppins] text-3xl font-semibold leading-[48px] text-white lg:text-4xl">
            Stock with intent Scale with data.
          </h2>

          {/* Description */}
          <p className="mt-[16px] font-[Poppins] text-base font-normal leading-6 text-white/80">
            Start your retail supply plan. Every product is expected to perform —
            and replaced if it doesn&apos;t.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex w-full flex-col gap-[25px] lg:w-[288px] lg:shrink-0">
          <a
            href="#"
            className="flex h-14 items-center justify-center whitespace-nowrap rounded-full bg-white px-6 font-[Poppins] text-sm font-bold text-[#E8920A] transition hover:bg-[#1A0E04] hover:text-white"
          >
            Start Retail Supply Plan →
          </a>

          <a
            href="/wholesale"
            className="flex h-14 items-center justify-center whitespace-nowrap rounded-full border-2 border-white/50 px-6 font-[Poppins] text-sm font-semibold text-white transition hover:border-white hover:bg-white hover:text-[#E8920A]"
          >
            Wholesale &amp; Distribution
          </a>
        </div>
      </div>
    </section>
  );
}
