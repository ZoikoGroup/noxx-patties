import Image from "next/image";

const cateringTypes = [
  {
    id: 1,
    icon: "/locations/catering-office.png",
    title: "Office Catering",
    description:
      "Regular team lunches, meetings, and corporate events — one-click reorder.",
  },
  {
    id: 2,
    icon: "/locations/catering-events.png",
    title: "Events & Parties",
    description:
      "Group orders for social events, celebrations, and private functions.",
  },
  {
    id: 3,
    icon: "/locations/catering-bulk.png",
    title: "Bulk Supply",
    description:
      "Larger recurring orders for businesses, canteens, and foodservice operations.",
  },
];

export default function LocationsCatering() {
  return (
    <section className="w-full bg-[#1A0E04] py-16 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-6 sm:px-8 lg:flex-row lg:items-start lg:gap-16 lg:px-[92px]">
        {/* Left Content */}
        <div className="w-full lg:max-w-[596px] lg:flex-1 lg:pt-9">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-6 bg-[#E8920A]" />

            <span className="font-[Poppins] text-xs font-bold uppercase tracking-wider text-[#E8920A]">
              Catering Access
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-6 font-[Poppins] text-4xl font-semibold leading-tight text-white lg:text-5xl lg:leading-[49px]">
            NOXX FOR EVENTS
            <br />
            &amp; GROUP ORDERS.
          </h2>

          {/* Description */}
          <p className="mt-6 font-[Poppins] text-base font-normal leading-7 text-white/70">
            Find whether catering is available in your area and start your group
            order request in under a minute.
          </p>

          {/* Catering Types */}
          <div className="mt-8 flex flex-col gap-2">
            {cateringTypes.map((type) => (
              <div
                key={type.id}
                className="flex items-start gap-[10px] rounded-xl border border-white/5 bg-white/5 p-[17px]"
              >
                {/* Icon */}
                <Image
                  src={type.icon}
                  alt={type.title}
                  width={24}
                  height={33}
                  className="h-[33px] w-6 shrink-0 object-contain"
                />

                <div>
                  {/* Title */}
                  <h3 className="font-[Poppins] text-sm font-bold text-white">
                    {type.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-[6px] font-[Poppins] text-xs font-normal text-white/70">
                    {type.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coverage Form */}
        <div className="w-full rounded-[20px] border border-white/10 bg-white/5 p-[33px] lg:max-w-[596px] lg:flex-1">
          {/* Title */}
          <h3 className="font-[Poppins] text-2xl font-semibold text-white lg:text-3xl">
            Check Catering Coverage
          </h3>

          {/* Subtitle */}
          <p className="mt-3 font-[Poppins] text-xs font-normal text-white/40">
            Enter your area and event details to see if catering is available.
          </p>

          {/* Your Area */}
          <label className="mt-8 block font-[Poppins] text-xs font-bold uppercase tracking-wide text-white/40">
            Your Area (Postcode or City)
          </label>

          <input
            type="text"
            placeholder="e.g. SW9 or London"
            className="mt-[8px] h-11 w-full rounded-xl border border-white/10 bg-white/5 px-[17px] font-[Poppins] text-sm font-normal text-white outline-none placeholder:text-[#757575]"
          />

          {/* Event Type */}
          <label className="mt-[17px] block font-[Poppins] text-xs font-bold uppercase tracking-wide text-white/40">
            Event Type
          </label>

          <div className="mt-[8px] flex h-11 w-full items-center rounded-xl border border-white/10 bg-white/5 px-[21px] font-[Poppins] text-sm font-normal text-white">
            Office Catering
          </div>

          {/* Group Size */}
          <label className="mt-[17px] block font-[Poppins] text-xs font-bold uppercase tracking-wide text-white/40">
            Approximate Group Size
          </label>

          <div className="mt-[8px] flex h-11 w-full items-center rounded-xl border border-white/10 bg-white/5 px-[21px] font-[Poppins] text-sm font-normal text-white">
            Under 10 people
          </div>

          {/* Date Required */}
          <label className="mt-[17px] block font-[Poppins] text-xs font-bold uppercase tracking-wide text-white/40">
            Date Required
          </label>

          <div className="mt-[8px] flex h-12 w-full items-center justify-between rounded-xl border border-white/10 bg-white/5 px-[17px] font-[Poppins] text-sm font-normal text-white">
            <span>mm/dd/yyyy</span>
            <span className="text-white/60">🗓️</span>
          </div>

          {/* Button */}
          <button className="mt-[19px] flex h-12 w-full items-center justify-center rounded-xl bg-[#E8920A] font-[Poppins] text-base font-bold text-white shadow-[0px_4px_14px_rgba(232,146,10,0.40)] transition hover:opacity-90">
            Check Availability →
          </button>
        </div>
      </div>
    </section>
  );
}
