export default function ShopCTA() {
  return (
    <section className="w-full bg-[#E8920A] py-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start justify-between gap-8 px-6 sm:px-8 lg:flex-row lg:items-center lg:px-[92px]">
        {/* Left Content */}
        <div className="max-w-[430px]">
          {/* Heading */}
          <h2 className="font-[Poppins] text-3xl font-semibold leading-tight text-white lg:leading-[57px]">
            READY WHEN YOU ARE.
          </h2>

          {/* Description */}
          <p className="mt-3 font-[Poppins] text-base font-normal leading-6 text-white/80">
            Order the essentials, build your box, or explore the full range. The
            system is waiting.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <button className="flex h-14 items-center justify-center rounded-full bg-white px-8 font-[Poppins] text-base font-bold text-[#E8920A] transition hover:bg-[#1A0E04] hover:text-white">
            🛒 Order Now
          </button>

          <button className="flex h-14 items-center justify-center rounded-full border-2 border-white/50 px-8 font-[Poppins] text-base font-semibold text-white transition hover:border-white hover:bg-white hover:text-[#E8920A]">
            Build Your Box →
          </button>

          <button className="flex h-14 items-center justify-center rounded-full border-2 border-white/50 px-8 font-[Poppins] text-base font-semibold text-white transition hover:border-white hover:bg-white hover:text-[#E8920A]">
            View Catering
          </button>
        </div>
      </div>
    </section>
  );
}
