export default function PlatformCTA() {
  return (
    <section className="w-full bg-[#E8920A] py-12 lg:py-[43px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start justify-between gap-8 px-6 sm:px-8 lg:flex-row lg:items-center lg:px-[92px]">
        {/* Left Content */}
        <div className="max-w-[731px]">
          {/* Heading */}
          <h2 className="font-[Poppins] text-3xl font-semibold leading-tight text-white lg:text-4xl lg:leading-10">
            ENGINEERING BRIEFING
            <br />
            AVAILABLE ON REQUEST.
          </h2>

          {/* Description */}
          <p className="mt-4 font-[Poppins] text-base font-normal leading-7 text-white/80">
            Full system documentation, OpenAPI contracts, event schema catalog,
            and deployment architecture available to qualified investors,
            partners, and engineering leads.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex w-full flex-col gap-4 sm:w-auto">
          <a
            href="mailto:info@noxxpatties.com"
            className="flex h-12 items-center justify-center rounded-full bg-white px-10 font-[Poppins] text-base font-bold text-[#E8920A] transition hover:bg-[#1A0E04] hover:text-white"
          >
            Request CTO Briefing
          </a>

          <a
            href="mailto:info@noxxpatties.com"
            className="flex h-12 items-center justify-center rounded-full border-2 border-white px-10 font-[Poppins] text-base font-semibold text-white transition hover:bg-white hover:text-[#E8920A]"
          >
            Investor Documentation
          </a>
        </div>
      </div>
    </section>
  );
}
