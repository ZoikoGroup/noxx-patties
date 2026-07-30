export default function PartnerPortalHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#538A37] py-16 lg:py-[85px]">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_110%_at_75%_40%,rgba(232,146,10,0.20),transparent_55%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent opacity-5" />

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center px-6 text-center sm:px-8 lg:px-[92px]">
        {/* Heading */}
        <h1 className="font-['Poppins'] text-3xl font-semibold leading-tight text-white sm:text-4xl lg:whitespace-nowrap lg:text-[min(2.5vw,38px)] lg:leading-[1.4]">
          PARTNER PORTAL NOT A{" "}
          <span className="text-[#E8920A]">
            DASHBOARD AN EXECUTION LAYER
          </span>
        </h1>

        {/* Description */}
        <p className="mt-4 max-w-[1044px] font-['Poppins'] text-base font-light leading-7 text-white lg:text-lg">
          The live commercial environment for approved partners across retail,
          wholesale, distribution, and <br className="hidden lg:inline" />{" "}
          franchise networks within the Noxx Patties system.
        </p>
      </div>
    </section>
  );
}
