export default function BundlesCTA() {
  return (
    <section className="w-full bg-[#E8920A] py-14 lg:py-[73px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col justify-between gap-8 px-6 sm:px-8 lg:flex-row lg:items-center lg:px-[92px]">
        {/* Left Content */}
        <div className="max-w-[470px]">
          {/* Heading */}
          <h2 className="font-['Poppins'] text-3xl font-black leading-[48px] text-white">
            Skip the guesswork.
            <br />
            Order what works.
          </h2>

          {/* Description */}
          <p className="mt-[16px] font-['Poppins'] text-base font-normal leading-6 text-white/80">
            Every bundle reflects what actually performs in the market. Choose
            pre-built or build your own.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-[16px] sm:flex-row lg:shrink-0">
          <a
            href="/shop"
            className="flex h-14 items-center justify-center whitespace-nowrap rounded-full bg-white px-8 font-['Poppins'] text-sm font-bold text-[#E8920A] transition hover:bg-[#1A0E04] hover:text-white"
          >
            🛒 Shop Bundles Now
          </a>

          <a
            href="/shop#build-your-box"
            className="flex h-14 items-center justify-center whitespace-nowrap rounded-full border-2 border-white/50 px-8 font-['Poppins'] text-sm font-semibold text-white transition hover:border-white hover:bg-white hover:text-[#E8920A]"
          >
            Build Your Box →
          </a>
        </div>
      </div>
    </section>
  );
}
