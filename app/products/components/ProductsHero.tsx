import Link from "next/link";

export default function ProductsHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#3C893F] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(232,146,10,0.20),rgba(232,146,10,0)_60%)]" />

      <div className="relative mx-auto max-w-[1440px] px-5 text-center lg:px-[75px]">
        <h1 className="font-['Poppins'] text-4xl font-bold leading-tight text-white lg:text-7xl lg:leading-[76px]">
          THE SYSTEM KNOWS YOUR
          <br />
          <span className="text-[#E8920A]">NEXT ORDER.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-[821px] font-['Poppins'] text-base font-light leading-7 text-white">
          Appetite-led, AI-curated, commercially disciplined. The
          <br className="hidden lg:block" />
          page makes the best decision before you feel burdened by choice.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          <Link
            href="/shop#build-your-box"
            className="flex h-14 w-64 items-center justify-center rounded-[50px] bg-[#E8920A] font-['Poppins'] text-base font-bold text-white shadow-[0px_6px_20px_rgba(232,146,10,0.40)] transition hover:bg-[#d98509]"
          >
            Build My Box
          </Link>

          <Link
            href="/shop"
            className="flex h-14 w-60 items-center justify-center rounded-[50px] border border-white font-['Poppins'] text-base font-semibold text-white transition hover:bg-white/10"
          >
            Browse All
          </Link>
        </div>
      </div>
    </section>
  );
}
