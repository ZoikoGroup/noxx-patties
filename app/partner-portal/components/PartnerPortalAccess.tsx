import Image from "next/image";

const channels = [
  {
    icon: "/partner-portal/access-partner.png",
    eyebrow: "Business & Franchise",
    title: "Request Partner Access",
    description:
      "For retail, franchise, and general business partnership applications. Reviewed based on commercial qualification and operational alignment.",
    url: "noxxpatties.com/business/",
    cta: "Request Access →",
    href: "/catering",
  },
  {
    icon: "/partner-portal/access-distribution.png",
    eyebrow: "Wholesale & Distribution",
    title: "Distribution Applications",
    description:
      "For wholesale and distribution partners seeking supply rights across UK, USA, Europe, and Africa markets.",
    url: "noxxpatties.com/wholesale/",
    cta: "Apply for Distribution →",
    href: "/wholesale",
  },
  {
    icon: "/partner-portal/access-franchise.png",
    eyebrow: "Franchise",
    title: "Franchise Opportunities",
    description:
      "For operators seeking to deploy franchise units across priority markets. Check qualification and enter the formal approval pipeline.",
    url: "noxxpatties.com/business/",
    cta: "Check Qualification →",
    href: "/franchise",
  },
];

export default function PartnerPortalAccess() {
  return (
    <section
      id="partner-access"
      className="w-full scroll-mt-16 border-t border-[#EAE4D9] bg-[#FFFAF4] py-14 lg:py-[47px]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-[92px]">
        {/* Eyebrow */}
        <p className="text-center font-['Poppins'] text-xs font-bold uppercase tracking-wider text-[#E8920A]">
          Access the Portal
        </p>

        {/* Heading */}
        <h2 className="mt-[10px] text-center font-['Poppins'] text-3xl font-semibold leading-10 text-[#1A0E04] lg:text-4xl">
          Access is restricted to approved accounts only.
        </h2>

        {/* Description */}
        <p className="mx-auto mt-[16px] max-w-[614px] text-center font-['Poppins'] text-base font-normal leading-7 text-[#8C8070]">
          If you do not yet have a verified partner account, request access
          through the appropriate channel for your business type.
        </p>

        {/* Cards */}
        <div className="mt-8 flex flex-wrap justify-center gap-[20px]">
          {channels.map((channel) => (
            <div
              key={channel.title}
              className="flex w-full max-w-[405.33px] flex-col items-center rounded-[20px] border border-[#EAE4D9] bg-white px-[29px] py-[31px] text-center shadow-[0px_2px_8px_rgba(26,14,4,0.06)] sm:w-[calc(50%_-_10px)] lg:w-[calc(33.333%_-_13.34px)]"
            >
              {/* Icon */}
              <Image
                src={channel.icon}
                alt=""
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
              />

              {/* Eyebrow */}
              <span className="mt-[31px] font-['Poppins'] text-xs font-bold uppercase tracking-wide text-[#E8920A]">
                {channel.eyebrow}
              </span>

              {/* Title */}
              <h3 className="mt-[10px] font-['Poppins'] text-base font-bold text-[#1A0E04]">
                {channel.title}
              </h3>

              {/* Description */}
              <p className="mt-[8px] font-['Poppins'] text-xs font-normal leading-5 text-[#8C8070]">
                {channel.description}
              </p>

              {/* URL */}
              <span className="mt-auto pt-[24px] font-['Poppins'] text-xs font-normal text-[#D5CCBE]">
                {channel.url}
              </span>

              {/* CTA */}
              <a
                href={channel.href}
                className="mt-[16px] flex h-10 w-full items-center justify-center whitespace-nowrap rounded-full bg-[#1A0E04] px-6 font-['Poppins'] text-xs font-bold text-white transition hover:bg-[#E8920A]"
              >
                {channel.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
