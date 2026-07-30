import Image from "next/image";
import Link from "next/link";

const categories = [
  { label: "🍗 Chicken", active: true },
  { label: "🍔 Bestsellers", active: false },
  { label: "🎁 Meal Deals", active: false },
  { label: "🥡 Mini", active: false },
  { label: "🍰 Sweet", active: false },
];

export default function MenuHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#4B893A] py-16 xl:pb-[80px] xl:pt-[80px]">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_120%_at_70%_50%,rgba(232,146,10,0.20),transparent_60%)]" />

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-6 sm:px-8 lg:px-[92px] xl:flex-row xl:items-center xl:gap-[60px]">
        {/* Left Content */}
        <div className="w-full xl:flex-1">
          {/* Heading */}
          <h1 className="w-150 font-[Poppins] text-5xl font-semibold leading-tight text-white sm:text-6xl xl:text-8xl xl:leading-[81px]">
            START YOUR
            <br />
            DAY <span className="text-[#E8920A]">RIGHT.</span>
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-[520px] font-[Poppins] text-base font-light leading-6 text-white">
            Hot, ready-to-eat Noxx Patties. The system has already prepared your
            order — adjust only if needed.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-[11px]">
            <Link
              href="/shop"
              className="flex h-12 shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-[#E8920A] px-4 font-[Poppins] text-sm font-bold text-white shadow-[0px_6px_20px_rgba(232,146,10,0.40)] transition hover:opacity-90"
            >
              🍗 Order Now
            </Link>

            <a
              href="#most-ordered"
              className="flex h-12 shrink-0 items-center justify-center whitespace-nowrap rounded-full border border-white/20 bg-white/10 px-4 font-[Poppins] text-sm font-semibold text-white transition hover:bg-white hover:text-[#4B893A]"
            >
              Show Popular Choices
            </a>

            <a
              href="#meal-builder"
              className="flex h-12 shrink-0 items-center justify-center whitespace-nowrap rounded-full border border-white/20 bg-white/10 px-4 font-[Poppins] text-sm font-semibold text-white transition hover:bg-white hover:text-[#4B893A]"
            >
              Pick for Me
            </a>
          </div>

          {/* Category Pills */}
          <div className="mt-[23px] flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.label}
                className={`flex h-9 shrink-0 items-center justify-center whitespace-nowrap rounded-full border px-[14px] font-[Poppins] text-xs font-semibold transition ${
                  category.active
                    ? "border-[#E8920A] bg-[#E8920A] text-white"
                    : "border-white/20 text-white/60 hover:border-white hover:text-white"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-[598/507] w-full overflow-hidden rounded-[20px] bg-[#D5CCBE] xl:max-w-[598px] xl:flex-1">
          <Image
            src="/menu/hero.png"
            alt="Noxx Patties"
            fill
            sizes="(max-width: 1280px) 100vw, 598px"
            className="object-cover"
            priority
          />


        </div>
      </div>
    </section>
  );
}
