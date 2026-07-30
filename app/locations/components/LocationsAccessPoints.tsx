import Link from "next/link";

const accessPoints = [
  {
    id: 1,
    type: "Branded Shop",
    typeBg: "#FEF3DC",
    typeColor: "#9A5E00",
    distance: "0.4 mi",
    name: "Noxx Patties — Brixton Market",
    address: "Unit 23, Brixton Market, London SW9 8PS",
    status: "● Open · Until 9pm",
    meta: ["🚚 20–28 min", "🏃 Ready in 10 min"],
    primary: "🛒 Order Now",
    secondary: ["Collect Here", "Directions"],
    recommended: true,
    muted: false,
  },
  {
    id: 2,
    type: "Collection Point",
    typeBg: "#E8F5EE",
    typeColor: "#1A5C3A",
    distance: "1.2 mi",
    name: "Noxx Collection — Peckham Hub",
    address: "14 Rye Lane, Peckham, London SE15 4NB",
    status: "● Open · Until 8pm",
    meta: ["🏃 Ready in 15 min"],
    primary: "Collect Here",
    secondary: ["View Details"],
    recommended: false,
    muted: false,
  },
  {
    id: 3,
    type: "Catering Zone",
    typeBg: "#EDE9FE",
    typeColor: "#5B21B6",
    distance: "1.8 mi",
    name: "Catering Coverage — Central London",
    address: "Covers EC1, EC2, WC1, WC2, SW1 postcodes",
    status: "● Available Today",
    meta: ["Min. 24h notice"],
    primary: "Request Catering",
    secondary: ["View Coverage"],
    recommended: false,
    muted: false,
  },
  {
    id: 4,
    type: "Branded Shop",
    typeBg: "#FEF3DC",
    typeColor: "#9A5E00",
    distance: "2.4 mi",
    name: "Noxx Patties — Hackney",
    address: "67 Mare Street, Hackney, London E8 4RG",
    status: "● Open · Until 10pm",
    meta: ["🚚 30–40 min", "🏃 Ready in 12 min"],
    primary: "🛒 Order Now",
    secondary: ["Directions"],
    recommended: false,
    muted: false,
  },
  {
    id: 5,
    type: "Coming Soon",
    typeBg: "#F5F1EA",
    typeColor: "#8C8070",
    distance: "3.1 mi",
    name: "Noxx Patties — Shoreditch",
    address: "Opening Q3 2026 · Shoreditch High St, E1",
    status: "⏳ Opening soon",
    meta: [],
    primary: "🔔 Notify Me",
    secondary: ["Learn More"],
    recommended: false,
    muted: true,
  },
];

const openingHours = [
  { day: "Monday (Today)", hours: "11:00–21:00", today: true },
  { day: "Tuesday", hours: "11:00–21:00", today: false },
  { day: "Wednesday", hours: "11:00–21:00", today: false },
  { day: "Thursday", hours: "11:00–22:00", today: false },
  { day: "Friday", hours: "11:00–23:00", today: false },
  { day: "Saturday", hours: "10:00–23:00", today: false },
  { day: "Sunday", hours: "11:00–20:00", today: false },
];

const services = [
  { label: "🚚 Delivery", bg: "#FEF3DC", color: "#9A5E00" },
  { label: "🏃 Collection", bg: "#E8F5EE", color: "#1A5C3A" },
  { label: "🍽️ Catering", bg: "#EDE9FE", color: "#5B21B6" },
];

const availableItems = [
  "🍗 Noxx Chicken",
  "🍔 Signature Beef",
  "🥡 Mini Bites",
  "🌿 Plant-Based",
  "🍰 Sweet Range",
];

export default function LocationsAccessPoints() {
  return (
    <section
      id="access-points"
      className="w-full scroll-mt-16 bg-[#FFB936] py-12 lg:py-[46px]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-[92px]">
        {/* Search */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <input
            type="text"
            placeholder="Enter postcode, town or city…"
            className="h-12 w-full rounded-full border border-white/20 bg-white px-[27px] font-[Poppins] text-sm font-normal text-[#212121] outline-none placeholder:text-[#212121]/40 sm:w-[384px]"
          />

          <button className="flex h-12 w-full shrink-0 items-center justify-center whitespace-nowrap rounded-full border border-white/20 bg-white/40 px-[21px] font-[Poppins] text-xs font-semibold text-white transition hover:bg-white hover:text-[#1A0E04] sm:w-[160px]">
            Use My Location
          </button>
        </div>

        <div className="mt-10 flex flex-col gap-8 lg:mt-16 lg:flex-row lg:items-start lg:gap-8">
          {/* Access Point List */}
          <div className="w-full lg:w-[509.98px]">
            {/* List Header */}
            <div className="flex items-center justify-between">
              <span className="font-[Poppins] text-xs font-bold uppercase tracking-wider text-[#8C8070]">
                Access Points — 6 found
              </span>

              <button className="font-[Poppins] text-xs font-semibold text-[#E8920A]">
                Sort: Best Match ▼
              </button>
            </div>

            {/* Cards */}
            <div className="mt-[18px] flex flex-col gap-[14px]">
              {accessPoints.map((point) => (
                <div
                  key={point.id}
                  className={`relative rounded-[20px] bg-white px-[21px] pb-4 pt-[21px] lg:h-[197px] ${
                    point.recommended
                      ? "border border-[#E8920A]"
                      : "border border-[#EAE4D9]"
                  }`}
                >
                  {/* Recommended Pill */}
                  {point.recommended && (
                    <span className="absolute -top-[9px] left-[21px] rounded-full bg-[#E8920A] px-[10px] py-[3px] font-[Poppins] text-[10px] font-bold text-white">
                      ⭐ Recommended
                    </span>
                  )}

                  {/* Type + Distance */}
                  <div className="flex items-center justify-between">
                    <span
                      className="rounded-full px-[9px] py-[3px] font-[Poppins] text-[10px] font-bold uppercase tracking-wide"
                      style={{
                        backgroundColor: point.typeBg,
                        color: point.typeColor,
                      }}
                    >
                      {point.type}
                    </span>

                    <span className="font-[Poppins] text-xs font-semibold text-[#8C8070]">
                      {point.distance}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="mt-[13px] font-[Poppins] text-base font-bold text-[#1A0E04]">
                    {point.name}
                  </h3>

                  {/* Address */}
                  <p className="mt-[4px] font-[Poppins] text-xs font-normal text-[#8C8070]">
                    {point.address}
                  </p>

                  {/* Status */}
                  <div className="mt-[12px] flex flex-wrap items-center gap-x-5 gap-y-1">
                    <span
                      className={`font-[Poppins] text-xs font-semibold ${
                        point.muted ? "text-[#8C8070]" : "text-[#1A5C3A]"
                      }`}
                    >
                      {point.status}
                    </span>

                    {point.meta.map((item) => (
                      <span
                        key={item}
                        className="font-[Poppins] text-xs font-semibold text-[#4A3F32]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="mt-[14px] flex flex-wrap gap-2">
                    <button
                      className={`flex h-9 items-center justify-center rounded-full px-5 font-[Poppins] text-xs font-bold text-white transition hover:opacity-90 ${
                        point.muted ? "bg-[#8C8070]" : "bg-[#1A0E04]"
                      }`}
                    >
                      {point.primary}
                    </button>

                    {point.secondary.map((label) => (
                      <button
                        key={label}
                        className="flex h-9 items-center justify-center rounded-full border border-[#EAE4D9] px-[17px] font-[Poppins] text-xs font-semibold text-[#4A3F32] transition hover:border-[#1A0E04] hover:text-[#1A0E04]"
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
              ))}

              {/* Selected Location Detail */}
              <div className="rounded-[20px] border border-[#EAE4D9] bg-white px-[29px] pb-[24px] pt-[29px] shadow-[0px_2px_8px_rgba(26,14,4,0.06)] lg:h-[649px]">
                {/* Eyebrow */}
                <span className="font-[Poppins] text-xs font-bold uppercase tracking-wide text-[#E8920A]">
                  Branded Shop · Selected Location
                </span>

                {/* Name */}
                <h3 className="mt-[9px] font-[Poppins] text-2xl font-semibold text-[#1A0E04]">
                  Noxx Patties — Brixton Market
                </h3>

                {/* Address */}
                <p className="mt-[11px] font-[Poppins] text-sm font-normal text-[#8C8070]">
                  Unit 23, Brixton Market, London SW9 8PS
                </p>

                {/* Opening Hours */}
                <div className="mt-[17px]">
                  {openingHours.map((row) => (
                    <div
                      key={row.day}
                      className="flex items-center justify-between py-[3px]"
                    >
                      <span className="font-[Poppins] text-xs font-normal text-[#8C8070]">
                        {row.day}
                      </span>

                      <span
                        className={`font-[Poppins] text-xs font-semibold ${
                          row.today ? "text-[#1A5C3A]" : "text-[#1A0E04]"
                        }`}
                      >
                        {row.hours}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Services */}
                <div className="mt-[16px] flex flex-wrap gap-[10px]">
                  {services.map((service) => (
                    <span
                      key={service.label}
                      className="rounded-full px-3 py-[4px] font-[Poppins] text-xs font-bold"
                      style={{
                        backgroundColor: service.bg,
                        color: service.color,
                      }}
                    >
                      {service.label}
                    </span>
                  ))}
                </div>

                {/* Available Here */}
                <span className="mt-[17px] block font-[Poppins] text-xs font-bold uppercase tracking-wide text-[#8C8070]">
                  Available Here
                </span>

                <div className="mt-[12px] flex flex-wrap gap-2">
                  {availableItems.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-[#F5F1EA] px-3 py-[5px] font-[Poppins] text-xs font-semibold text-[#4A3F32]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <Link
                  href="/shop"
                  className="mt-[16px] flex h-11 w-full items-center justify-center rounded-full bg-[#E8920A] font-[Poppins] text-sm font-bold text-white shadow-[0px_4px_12px_rgba(232,146,10,0.30)] transition hover:opacity-90"
                >
                  🛒 Order Delivery
                </Link>

                <Link
                  href="/shop"
                  className="mt-[9px] flex h-10 w-full items-center justify-center rounded-full border border-[#EAE4D9] font-[Poppins] text-xs font-semibold text-[#1A0E04] transition hover:border-[#1A0E04]"
                >
                  🏃 Order Collection
                </Link>

                <button className="mt-[10px] flex h-10 w-full items-center justify-center rounded-full border border-[#EAE4D9] font-[Poppins] text-xs font-semibold text-[#1A0E04] transition hover:border-[#1A0E04]">
                  🗺️ Get Directions
                </button>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="flex w-full flex-col overflow-hidden rounded-[20px] border border-[#EAE4D9] bg-[#F5F1EA] lg:sticky lg:top-6 lg:h-[700px] lg:w-[714px]">
            {/* Map Header */}
            <div className="flex h-14 shrink-0 items-center justify-between border-b border-[#EAE4D9] bg-white px-5">
              <span className="font-[Poppins] text-sm font-bold text-[#1A0E04]">
                📍 6 Access Points Near You
              </span>

              <button className="font-[Poppins] text-xs font-semibold text-[#E8920A]">
                Hide Map
              </button>
            </div>

            {/* Map Placeholder */}
            <div className="flex h-[400px] items-center justify-center bg-[#B6B6B6]/50 lg:h-auto lg:flex-1">
              <span className="font-[Poppins] text-3xl font-semibold text-[#1A0E04]">
                Google Maps
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
