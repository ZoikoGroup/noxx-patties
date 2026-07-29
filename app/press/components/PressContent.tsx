const requestRows = [
  [
    "Corporate information and company background",
    "Product and category expansion updates",
  ],
  [
    "Retail, wholesale, and franchise developments",
    "Technology, AI, and supply chain systems",
  ],
  ["Strategic partnerships and market expansion activity"],
];

export default function PressContent() {
  return (
    <div className="w-full min-w-0 lg:w-[795px]">
      {/* Intro Card */}
      <div className="rounded-[20px] border border-l-4 border-[#E8920A] bg-white px-9 pb-4 pt-8 shadow-[0px_2px_8px_rgba(26,14,4,0.06)]">
        <p className="max-w-[701px] font-[Poppins] text-base font-normal leading-8 text-[#4A3F32] lg:text-lg">
          Noxx Patties is a global food infrastructure platform operating across
          retail, wholesale, franchise, and direct-to-consumer channels. As the
          system scales, this section serves as the official gateway for verified
          media information and corporate communications.
        </p>
      </div>

      {/* Media & Corporate Communications */}
      <h2 className="mt-[45px] font-[Poppins] text-xl font-extrabold text-[#1A0E04]">
        Media &amp; Corporate Communications
      </h2>

      <p className="mt-4 font-[Poppins] text-base font-normal leading-7 text-[#4A3F32]">
        All media enquiries, journalist requests, and editorial communications
        regarding Noxx Patties or its parent company, Zoiko Foods Corp, should be
        directed through official channels.
      </p>

      <p className="mt-3 font-[Poppins] text-base font-normal leading-7 text-[#4A3F32]">
        Requests may cover:
      </p>

      {/* Request Type Pills */}
      <div className="mt-5 flex flex-col gap-[11px]">
        {requestRows.map((row) => (
          <div key={row[0]} className="flex flex-wrap gap-[12px]">
            {row.map((type) => (
              <span
                key={type}
                className="flex h-11 shrink-0 items-center whitespace-nowrap rounded-full border border-[#EAE4D9] bg-white px-[17px]"
              >
                <span className="mr-[7px] font-[Poppins] text-lg font-bold text-[#E8920A]">
                  ·
                </span>

                <span className="font-[Poppins] text-xs font-semibold text-[#4A3F32]">
                  {type}
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* Press Material Availability */}
      <h2 className="mt-[38px] font-[Poppins] text-xl font-extrabold text-[#1A0E04]">
        Press Material Availability
      </h2>

      <p className="mt-4 font-[Poppins] text-base font-normal leading-7 text-[#4A3F32]">
        Verified press materials, brand assets, and official announcements are
        issued selectively as part of structured communications cycles. This
        ensures all published information reflects current operational status and
        approved corporate messaging.
      </p>

      {/* Controlled Release Framework */}
      <div className="mt-[22px] rounded-[20px] border border-[#EAE4D9] bg-white px-[29px] py-[25px]">
        {/* Eyebrow */}
        <div className="flex items-center gap-2">
          <span className="h-[2px] w-4 bg-[#E8920A]" />

          <span className="font-[Poppins] text-xs font-bold uppercase tracking-wide text-[#1A0E04]">
            Controlled Release Framework
          </span>
        </div>

        {/* Body */}
        <p className="mt-[10px] font-[Poppins] text-sm font-normal leading-6 text-[#8C8070]">
          All press materials are governed to ensure accuracy, consistency, and
          alignment with the company&apos;s operational and commercial standards.
          Information not released through official Noxx Patties communication
          channels should not be considered authorised or representative of the
          company.
        </p>
      </div>

      {/* Press Inquiries */}
      <h2 className="mt-[44px] font-[Poppins] text-xl font-extrabold text-[#1A0E04]">
        Press Inquiries
      </h2>

      <p className="mt-4 font-[Poppins] text-base font-normal leading-7 text-[#4A3F32]">
        For all media and editorial requests, please contact us via the official
        channel. All requests are reviewed and handled in accordance with the
        company&apos;s corporate communications schedule.
      </p>

      <p className="mt-[14px] font-[Poppins] text-sm font-normal leading-6 text-[#8C8070]">
        Response timelines depend on the nature of the enquiry. Press requests
        related to product launches, market expansion, or financial developments
        are typically handled within structured communication cycles.
      </p>
    </div>
  );
}
