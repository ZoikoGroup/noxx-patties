export default function CareersHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#4A8A3A] py-16 lg:pb-[57px] lg:pt-[91px]">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_120%_at_80%_50%,rgba(232,146,10,0.20),transparent_55%)]" />

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center px-6 text-center sm:px-8 lg:px-[92px]">
        {/* Heading */}
        <h1 className="font-[Poppins] text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-[69px]">
          WE DON&apos;T HIRE FOR ROLES
          <br />
          <span className="text-[#E8920A]">
            WE BUILD CAPABILITY WITHIN THE PLATFORM
          </span>
        </h1>

        {/* Description */}
        <p className="mt-2 max-w-[1147px] font-[Poppins] text-base font-light leading-8 text-white lg:text-xl">
          We are building a global food infrastructure system. This requires
          people who think in systems, not tasks and operate to measurable
          outcomes, not activity metrics.
        </p>
      </div>
    </section>
  );
}
