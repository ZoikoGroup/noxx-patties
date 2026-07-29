export default function PlatformHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#4B893A] py-16 lg:py-[97px]">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_120%_at_88%_50%,rgba(107,33,168,0.30),transparent_70%),radial-gradient(ellipse_35%_80%_at_0%_100%,rgba(232,146,10,0.30),transparent_70%)]" />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-[92px]">
        {/* Heading */}
        <h1 className="font-[Poppins] text-3xl font-semibold leading-tight text-white sm:text-4xl w-720.5 lg:text-5xl lg:leading-[81px]">
          A GOVERNED GLOBAL FOOD{" "}
          <span className="text-[#E8920A]">OPERATING SYSTEM</span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-[1083px] font-[Poppins] text-base font-light leading-7 text-white lg:mt-8 lg:text-center">
          Noxx is not a restaurant platform with add-on tools. It is a vertically
          integrated, AI-powered, event-driven operating system — governing
          commerce, supply, distribution, partner operations, and intelligence
          across multiple countries.
        </p>
      </div>
    </section>
  );
}
