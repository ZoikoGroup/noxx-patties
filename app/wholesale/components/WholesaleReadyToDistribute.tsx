export default function WholesaleReadyToDistribute() {
  return (
    <section className="w-full bg-[#FFB936] py-14 lg:py-16">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-[92px]">
        {/* Copy */}
        <div>
          <h2 className="font-[Poppins] text-3xl font-bold leading-tight text-[#1A0E04] lg:text-4xl">
            READY TO DISTRIBUTE NOXX PATTIES?
          </h2>

          <p className="mt-4 font-[Poppins] text-sm leading-6 text-[#1A0E04]/80">
            The qualification process begins with your application.
            <br />
            Distribution rights are awarded — not sold. Apply today to start
            the formal review.
          </p>
        </div>

        {/* Actions */}
        <div className="flex w-full shrink-0 flex-col gap-4 lg:w-[340px]">
          <button className="h-12 w-full rounded-[50px] bg-[#1A0E04] font-[Poppins] text-sm font-bold text-white transition hover:bg-black">
            Apply for Rights
          </button>

          <button className="h-12 w-full rounded-[50px] border border-[#1A0E04] font-[Poppins] text-sm font-semibold text-[#1A0E04] transition hover:bg-[#1A0E04]/10">
            Download Partner Pack
          </button>
        </div>
      </div>
    </section>
  );
}
