export default function PressHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#4A8A3A] py-14 lg:py-[70px]">
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center px-6 text-center sm:px-8 lg:px-[92px]">
        {/* Heading */}
        <h1 className="font-[Poppins] text-3xl font-semibold text-white sm:text-4xl lg:text-5xl lg:leading-[69px]">
          PRESS &amp; <span className="text-[#E8920A]">MEDIA</span>
        </h1>

        {/* Description */}
        <p className="mt-3 max-w-[795px] font-[Poppins] text-base font-light leading-7 text-white lg:text-lg">
          Official gateway for verified media information and corporate
          communications. All press materials governed through a controlled
          release framework.
        </p>
      </div>
    </section>
  );
}
