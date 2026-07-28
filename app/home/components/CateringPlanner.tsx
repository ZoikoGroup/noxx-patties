"use client";

import Image from "next/image";

const services = [
  {
    title: "Corporate",
    description:
      "Team lunches, office events, board meetings — branded packaging available.",
    image: "/home/corporate.png",
    featured: true,
  },
  {
    title: "Events",
    description:
      "Weddings, festivals, private parties — custom menus at scale.",
    image: "/home/events.png",
    featured: false,
  },
  {
    title: "Schools",
    description:
      "Nutritionist-approved options, halal & vegan selections included.",
    image: "/home/schools.png",
    featured: false,
  },
  {
    title: "Bulk Orders",
    description:
      "Direct volume purchasing for organisations and hospitality buyers.",
    image: "/home/bulk.png",
    featured: false,
  },
];

export default function CateringPlanner() {
  return (
    <section className="w-full border-t border-[#EAE4D9] bg-[#3C893F]/10 py-16">

      <div className="mx-auto max-w-[1440px] px-5 lg:px-[75px]">

        {/* Top Section */}
        <div className="flex flex-col gap-14 xl:flex-row xl:items-start xl:justify-between">

          {/* Left Side */}
          <div className="w-full xl:max-w-[640px]">

            <h2 className="font-['Poppins'] text-[24px] lg:text-[38px] font-normal uppercase tracking-wider leading-tight lg:leading-[64.6px] text-[#1A0E04] whitespace-nowrap">
              FEED 10 TO 300. EFFORTLESSLY.
            </h2>

            <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
                              {services.map((service) => (
                <div
                  key={service.title}
                  className={`rounded-[20px] bg-white p-7 min-h-[175px] transition-all duration-300 hover:-translate-y-1 ${
                    service.featured
                      ? "border border-[#E8920A] shadow-[0px_0px_0px_3px_rgba(232,146,10,0.10)]"
                      : "border border-[#EAE4D9] shadow-[0px_2px_8px_rgba(26,14,4,0.06)]"
                  }`}
                >
                  {/* Icon */}
                  <div className="flex h-10 w-10 items-center justify-center">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={28}
                      height={34}
                      className="object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mt-3 font-['Poppins'] text-[16px] font-bold text-[#1A0E04]">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 font-['Poppins'] text-[15px] leading-5 text-[#8C8070]">
                    {service.description}
                  </p>
                </div>
              ))}

            </div>

          </div>
                    {/* Right Side - AI Party Planner */}
          <div className="w-full xl:max-w-[598px]">

            <div className="rounded-[20px] bg-[#1A0E04] p-9 shadow-[0px_20px_48px_rgba(26,14,4,0.14)]">

              {/* Heading */}
              <h3 className="font-['Poppins'] text-xl font-bold text-white">
                AI Party Planner
              </h3>

              <p className="mt-1 font-['Poppins'] text-sm text-white/40">
                Tell us your event — we&rsquo;ll build the perfect menu.
              </p>

              {/* Event Size */}
              <div className="mt-4">

                <label className="font-['Poppins'] text-xs font-semibold uppercase tracking-wider text-white/40">
                  Event Size
                </label>

                <select className="mt-2 h-11 w-full rounded-xl border border-white/10 bg-white/5 px-5 font-['Poppins'] text-sm text-white outline-none">
                  <option className="bg-[#1A0E04]">
                    10–30 guests
                  </option>
                  <option className="bg-[#1A0E04]">
                    30–60 guests
                  </option>
                  <option className="bg-[#1A0E04]">
                    60–100 guests
                  </option>
                  <option className="bg-[#1A0E04]">
                    100+ guests
                  </option>
                </select>

              </div>

              {/* Audience Type */}
              <div className="mt-4">

                <label className="font-['Poppins'] text-xs font-semibold uppercase tracking-wider text-white/40">
                  Audience Type
                </label>

                <select className="mt-2 h-11 w-full rounded-xl border border-white/10 bg-white/5 px-5 font-['Poppins'] text-sm text-white outline-none">
                  <option className="bg-[#1A0E04]">
                    Mixed (adults & children)
                  </option>
                  <option className="bg-[#1A0E04]">
                    Adults
                  </option>
                  <option className="bg-[#1A0E04]">
                    Children
                  </option>
                </select>

              </div>

              {/* Budget Range */}
              <div className="mt-5">

                <label className="font-['Poppins'] text-xs font-semibold uppercase tracking-wider text-white/40">
                  Budget Range
                </label>

                <select className="mt-3 h-11 w-full rounded-xl border border-white/10 bg-white/5 px-5 font-['Poppins'] text-sm text-white outline-none">
                  <option className="bg-[#1A0E04]">
                    Under $500
                  </option>
                  <option className="bg-[#1A0E04]">
                    $500 – $1000
                  </option>
                  <option className="bg-[#1A0E04]">
                    $1000+
                  </option>
                </select>

              </div>

              {/* Button */}
              <button className="mt-6 flex h-12 w-full items-center justify-center rounded-xl bg-[#E8920A] font-['Poppins'] text-base font-bold text-white shadow-[0px_4px_14px_rgba(232,146,10,0.40)] transition-all duration-300 hover:bg-[#d98608]">
                Generate My Menu Plan →
              </button>

            </div>

          </div>

        </div>
                

      </div>

    </section>
  );
}