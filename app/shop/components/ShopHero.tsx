import Link from "next/link";

const features = [
  "Clean-label approach",
  "Bold Caribbean flavour",
  "Formats for every occasion",
];

export default function ShopHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#4B893A] py-14 lg:py-[70px]">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_120%_at_75%_50%,rgba(232,146,10,0.20),transparent_55%)]" />

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center px-6 text-center sm:px-8 lg:px-[92px]">
        {/* Heading */}
        <h1 className="font-[Poppins] text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-[81px]">
          THE GLOBAL STANDARD FOR{" "}
          <span className="text-[#E8920A]">PATTIES</span>
        </h1>

        {/* Description */}
        <p className="mt-2 max-w-[622px] font-[Poppins] text-base font-light leading-7 text-white">
          Heritage flavour. Modern formats. Built for real life. Stock up, gift,
          subscribe, and discover the full Noxx category system.
        </p>

        {/* Buttons */}
        <div className="mt-7 flex w-full flex-col gap-4 sm:w-auto sm:flex-row lg:mt-10">
          <Link
            href="/menu"
            className="flex h-12 items-center justify-center rounded-full bg-[#E8920A] px-8 font-[Poppins] text-sm font-bold text-white shadow-[0px_6px_20px_rgba(232,146,10,0.40)] transition hover:opacity-90"
          >
            Order Now
          </Link>

          <a
            href="#essentials"
            className="flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 font-[Poppins] text-sm font-semibold text-white transition hover:bg-white hover:text-[#4B893A]"
          >
            Start with Bestsellers
          </a>

          <a
            href="#build-your-box"
            className="flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 font-[Poppins] text-sm font-semibold text-white transition hover:bg-white hover:text-[#4B893A]"
          >
            Build Your Box
          </a>
        </div>

        {/* Feature List */}
        <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:gap-10 lg:mt-12">
          {features.map((feature) => (
            <div key={feature} className="flex items-center gap-[6px]">
              <span className="font-[Poppins] text-xs font-bold text-[#E8920A]">
                ✓
              </span>

              <span className="font-[Poppins] text-xs font-medium text-white/50">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
