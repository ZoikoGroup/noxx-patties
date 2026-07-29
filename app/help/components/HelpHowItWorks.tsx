export default function HelpHowItWorks() {
  return (
    <div className="rounded-[20px] border border-[#EAE4D9] bg-[#F5F1EA] px-[33px] py-[28px]">
      {/* Eyebrow */}
      <div className="flex items-center gap-2">
        <span className="h-[2px] w-5 bg-[#E8920A]" />

        <span className="font-[Poppins] text-xs font-bold uppercase leading-6 tracking-wide text-[#1A0E04]">
          How the System Works
        </span>
      </div>

      {/* Paragraphs */}
      <p className="mt-[7px] font-[Poppins] text-sm font-normal leading-6 text-[#8C8070]">
        The Help Centre operates as a structured routing layer within the Noxx
        Patties platform. Each channel above is managed by a dedicated
        operational team — consumer orders, catering and events, business
        development, wholesale, and distribution all follow separate handling
        protocols.
      </p>

      <p className="mt-[23px] font-[Poppins] text-sm font-normal leading-6 text-[#8C8070]">
        Routing your request correctly is the single most effective way to get a
        faster, more accurate response. If you are unsure which channel applies,
        use the general enquiries email and our team will direct you
        appropriately.
      </p>
    </div>
  );
}
