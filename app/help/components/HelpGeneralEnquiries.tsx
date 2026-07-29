export default function HelpGeneralEnquiries() {
  return (
    <div className="flex flex-col justify-between gap-6 rounded-[20px] bg-[#1A0E04] px-10 py-[28px] lg:flex-row lg:items-center">
      <div className="max-w-[479px]">
        {/* Heading */}
        <h2 className="font-[Poppins] text-xl font-semibold text-white">
          GENERAL ENQUIRIES
        </h2>

        {/* Description */}
        <p className="mt-[9px] font-[Poppins] text-sm font-normal leading-6 text-white/90">
          For requests not covered by the direct channels above — questions,
          feedback, or anything that doesn&apos;t fit a specific section.
        </p>
      </div>

      {/* Email Button */}
      <a
        href="mailto:info@noxxpatties.com"
        className="flex h-12 shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-[#E8920A] px-7 font-[Poppins] text-sm font-bold text-white shadow-[0px_4px_12px_rgba(232,146,10,0.40)] transition hover:opacity-90"
      >
        ✉️ info@noxxpatties.com
      </a>
    </div>
  );
}
