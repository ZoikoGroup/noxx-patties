"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[774px] overflow-hidden">

      {/* Background Image */}
      <Image
        src="/home/hero.png"
        alt="Hero"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col items-center px-6 pt-28 text-center">

        <h1 className="max-w-[1220px] text-4xl font-semibold leading-tight text-white md:text-6xl xl:text-7xl">
          BOLD FLAVORS{" "}
          <span className="text-[#E8920A]">GLOBAL</span>{" "}
          SCALE
        </h1>

        <p className="mt-6 max-w-[980px] text-lg leading-8 text-white md:text-xl xl:text-2xl">
          Crafted from culture. Driven by flavor. Scaled by intelligent systems —
          <br className="hidden lg:block" />
          Noxx Patties brings authentic taste to every table, everywhere.
        </p>

        <div className="mt-12 flex flex-col gap-5 md:flex-row">

          <Link
            href="/shop"
            className="flex h-14 w-80 items-center justify-center rounded-full bg-[#E8920A] text-lg font-semibold text-white shadow-[0_6px_20px_rgba(232,146,10,0.40)] transition hover:scale-105"
          >
            Order Now
          </Link>

          <Link
            href="/franchise"
            className="flex h-14 w-80 items-center justify-center rounded-full bg-white text-lg font-semibold text-[#1A0E04] shadow-md transition hover:scale-105"
          >
            Become a Partner
          </Link>

        </div>

      </div>
    </section>
  );
}