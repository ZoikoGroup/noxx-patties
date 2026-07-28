"use client";

export default function AboutHero() {
  return (
    <section className="w-full overflow-hidden bg-[#3C893F]">
      <div className="relative mx-auto flex min-h-[384px] max-w-[1440px] items-center justify-center px-5 py-12 lg:px-[75px] lg:py-0">

        {/* Radial Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(232,146,10,0.20),transparent_60%)]" />

        {/* Content */}
        <div className="relative z-10 flex w-full max-w-[1320px] flex-col items-center text-center">

          {/* Heading */}
          <h1 className="font-['Poppins'] text-[43.5px] font-semibold leading-tight lg:leading-[64px] text-white">
            WE DIDN&apos;T BUILD A FOOD BRAND.
            <br />
            WE BUILT THE{" "}
            <span className="text-[#E8920A]">
              INFRASTRUCTURE
            </span>{" "}
            FOR GLOBAL FLAVOR
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-[1077px] font-['Poppins'] text-lg font-light leading-7 text-white">
            Noxx Patties is an AI-powered global food infrastructure platform
            building the system through which culturally authentic food becomes
            globally scalable, commercially viable, and consistently delivered.
          </p>

        </div>

      </div>
    </section>
  );
}