export default function CareersApply() {
  return (
    <section className="w-full border-t border-[#EAE4D9] bg-[#FFFAF4] py-14 lg:py-20">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-[92px]">
        {/* Eyebrow */}
        <p className="text-center font-[Poppins] text-xs font-bold uppercase tracking-wider text-[#E8920A]">
          Join the System
        </p>

        {/* Heading */}
        <h2 className="mt-[9px] text-center font-[Poppins] text-3xl font-semibold leading-10 text-[#1A0E04] lg:text-4xl">
          Apply for Careers
        </h2>

        {/* Description */}
        <p className="mx-auto mt-[15px] max-w-[836px] text-center font-[Poppins] text-base font-normal leading-7 text-[#8C8070]">
          If you believe you can contribute to building a scalable global food
          platform, applications are reviewed based on capability alignment,
          system fit, and operational requirements.
        </p>

        {/* Application Card */}
        <div className="mx-auto mt-[27px] max-w-[836px] rounded-[20px] border border-[#EAE4D9] bg-white px-[49px] py-[50px] shadow-[0px_2px_8px_rgba(26,14,4,0.06)]">
          {/* Title */}
          <h3 className="text-center font-[Poppins] text-2xl font-semibold text-[#1A0E04] lg:text-3xl">
            Submit Your Application
          </h3>

          {/* Subtitle */}
          <p className="mt-[10px] text-center font-[Poppins] text-base font-normal text-[#8C8070]">
            Careers at Noxx Patties — Zoiko Foods Corp
          </p>

          {/* URL */}
          <div className="mt-[30px] flex h-12 w-full items-center rounded-xl border border-[#EAE4D9] bg-[#F5F1EA] px-[21px]">
            <span className="font-[Poppins] text-sm font-semibold text-[#E8920A]">
              noxxpatties.com/careers/apply/
            </span>
          </div>

          {/* Apply Button */}
          <a
            href="mailto:info@noxxpatties.com"
            className="mx-auto mt-[23px] flex h-14 w-full max-w-[384px] items-center justify-center rounded-full bg-[#E8920A] font-[Poppins] text-base font-bold text-white shadow-[0px_6px_20px_rgba(232,146,10,0.40)] transition hover:opacity-90"
          >
            Apply Now →
          </a>

          {/* Important Notice */}
          <div className="mt-[19px] rounded-xl border border-[#FCDFA0] bg-[#FEF3DC] px-[21px] py-[18px]">
            <p className="font-[Poppins] text-sm font-normal leading-6 text-[#4A3F32]">
              <span className="font-bold">Important:</span> Applications are
              reviewed based on capability alignment, system fit, and operational
              requirements. Only shortlisted candidates will be contacted. We do
              not provide status updates on pending applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
