import Link from "next/link";

export default function BundlesHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#538A37] py-16 lg:py-[83px]">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_110%_at_75%_40%,rgba(232,146,10,0.20),transparent_55%)]" />

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center px-6 text-center sm:px-8 lg:px-[92px]">
        {/* Heading */}
        <h1 className="font-['Poppins'] text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-[69px]">
          BUNDLES STRUCTURED FOR{" "}
          <span className="text-[#E8920A]">PERFORMANCE</span>
        </h1>

        {/* Description */}
        <p className="mt-4 max-w-[983px] font-['Poppins'] text-base font-light leading-7 text-white lg:text-lg">
          Not promotional packs. Structured product configurations built using
          demand intelligence and real purchase behaviour designed to increase
          order efficiency and accelerate decisions.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row lg:mt-[46px] lg:gap-[26px]">
          <Link
            href="/shop"
            className="flex h-12 items-center justify-center whitespace-nowrap rounded-full bg-[#E8920A] px-10 font-['Poppins'] text-sm font-bold text-white shadow-[0px_6px_20px_rgba(232,146,10,0.40)] transition hover:opacity-90 sm:w-[208px]"
          >
            Shop Bundles Now
          </Link>

          <Link
            href="/shop#build-your-box"
            className="flex h-12 items-center justify-center whitespace-nowrap rounded-full border border-white bg-white/10 px-10 font-['Poppins'] text-sm font-semibold text-white transition hover:bg-white hover:text-[#538A37] sm:w-[208px]"
          >
            Build Your Own
          </Link>
        </div>
      </div>
    </section>
  );
}
