const companyFacts = [
  { label: "Brand", value: "Noxx Patties" },
  { label: "Parent Entity", value: "Zoiko Foods Corp" },
  { label: "UK Trading Entity", value: "Zoiko Foods Ltd" },
  {
    label: "European HQ",
    value: "67–69 Great Portland St, 5th Floor, London W1W 5PF",
  },
  { label: "Category", value: "Global Food Infrastructure Platform" },
  { label: "Channels", value: "Retail, Wholesale, Franchise, D2C" },
  { label: "Markets", value: "USA, UK, Europe, Africa" },
];

export default function PressAside() {
  return (
    <div className="flex w-full min-w-0 flex-col gap-5 lg:w-[397.34px] lg:shrink-0">
      {/* Press Inquiries */}
      <div className="rounded-[20px] bg-[#FDB735] p-8">
        {/* Eyebrow */}
        <span className="font-[Poppins] text-xs font-bold uppercase tracking-wide text-[#222222]">
          Press Inquiries
        </span>

        {/* Heading */}
        <h2 className="mt-[14px] font-[Poppins] text-xl font-extrabold text-white">
          Contact Media Relations
        </h2>

        {/* Description */}
        <p className="mt-[10px] font-[Poppins] text-sm font-normal leading-6 text-[#222222]">
          For all media, editorial, and journalist requests — use the official
          channel below.
        </p>

        {/* Email Button */}
        <a
          href="mailto:info@noxxpatties.com"
          className="mt-[20px] flex h-12 w-full items-center justify-center whitespace-nowrap rounded-full bg-white font-[Poppins] text-sm font-bold text-[#222222] shadow-[0px_4px_14px_rgba(232,146,10,0.40)] transition hover:opacity-90"
        >
          ✉️ info@noxxpatties.com
        </a>

        {/* Note */}
        <p className="mt-[11px] font-[Poppins] text-xs font-normal leading-4 text-[#222222]">
          All media requests are reviewed and managed according to the
          company&apos;s structured communications schedule.
        </p>
      </div>

      {/* Company Facts */}
      <div className="rounded-[20px] border border-[#EAE4D9] bg-white p-[25px]">
        <span className="font-[Poppins] text-xs font-bold uppercase tracking-wider text-[#8C8070]">
          Company Facts
        </span>

        <dl className="mt-[18px] flex flex-col gap-[11px]">
          {companyFacts.map((fact) => (
            <div key={fact.label}>
              <dt className="font-[Poppins] text-xs font-bold uppercase tracking-wide text-[#8C8070]">
                {fact.label}
              </dt>

              <dd className="mt-[4px] font-[Poppins] text-sm font-semibold text-[#1A0E04]">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Authorised Information */}
      <div className="rounded-[20px] border border-[#FCDFA0] bg-[#E8920A] p-[25px]">
        {/* Icon */}
        <span className="font-[Poppins] text-2xl leading-8">⚠️</span>

        {/* Title */}
        <h2 className="mt-[13px] font-[Poppins] text-base font-bold text-white">
          Authorised Information Only
        </h2>

        {/* Body */}
        <p className="mt-[10px] font-[Poppins] text-xs font-normal leading-5 text-white">
          Only information released through official Noxx Patties communication
          channels should be considered authorised or representative of the
          company.
        </p>
      </div>
    </div>
  );
}
