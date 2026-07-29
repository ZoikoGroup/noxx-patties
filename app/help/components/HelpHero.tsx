export default function HelpHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#468A3C] py-14 lg:py-[44px]">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_120%_at_75%_50%,rgba(232,146,10,0.20),transparent_55%)]" />

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center px-6 text-center sm:px-8 lg:px-[92px]">
        {/* Heading */}
        <h1 className="font-[Poppins] text-3xl font-semibold tracking-widest text-white sm:text-4xl lg:text-5xl lg:leading-[74px]">
          HELP CENTRE
        </h1>

        {/* Description */}
        <p className="mt-3 max-w-[825px] font-[Poppins] text-base font-light leading-7 text-white">
          The official support and routing system for the Noxx Patties platform.
          Use the correct channel below to ensure your request is handled quickly
          and accurately.
        </p>
      </div>
    </section>
  );
}
