import Image from "next/image";

const channels = [
  {
    id: 1,
    icon: "/help/channel-menu.png",
    title: "Menu & Product Information",
    url: "noxxpatties.com/menu/",
    href: "/menu",
  },
  {
    id: 2,
    icon: "/help/channel-shop.png",
    title: "Shop / Online Orders",
    url: "noxxpatties.com/shop/",
    href: "/shop",
  },
  {
    id: 3,
    icon: "/help/channel-catering.png",
    title: "Catering Orders & Events",
    url: "noxxpatties.com/catering/",
    href: "/catering",
  },
  {
    id: 4,
    icon: "/help/channel-business.png",
    title: "Business Enquiries — Retail, Franchise & Partnerships",
    url: "noxxpatties.com/business/",
    href: "/franchise",
  },
  {
    id: 5,
    icon: "/help/channel-wholesale.png",
    title: "Wholesale & Distribution",
    url: "noxxpatties.com/wholesale/",
    href: "/wholesale",
  },
  {
    id: 6,
    icon: "/help/channel-about.png",
    title: "Company Information",
    url: "noxxpatties.com/about-us/",
    href: "/about",
  },
];

export default function HelpChannels() {
  return (
    <div>
      {/* Eyebrow */}
      <div className="flex items-center gap-2">
        <span className="h-[2px] w-6 bg-[#E8920A]" />

        <span className="font-[Poppins] text-xs font-bold uppercase tracking-wider text-[#E8920A]">
          Direct Support Channels
        </span>
      </div>

      {/* Heading */}
      <h2 className="mt-3 font-[Poppins] text-2xl font-semibold leading-10 text-[#1A0E04] lg:text-3xl">
        GO TO THE RIGHT PLACE FIRST.
      </h2>

      {/* Channel Cards */}
      <div className="mt-[25px] flex flex-col gap-[14px]">
        {channels.map((channel) => (
          <a
            key={channel.id}
            href={channel.href}
            className="group flex items-center gap-5 rounded-[20px] border border-[#EAE4D9] bg-white px-[29px] py-[25px] transition hover:border-[#E8920A]"
          >
            {/* Icon Tile */}
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F5F1EA]">
              <Image
                src={channel.icon}
                alt={channel.title}
                width={22}
                height={22}
                className="h-6 w-6 object-contain"
              />
            </span>

            <div className="min-w-0 flex-1">
              {/* Title */}
              <h3 className="font-[Poppins] text-base font-bold text-[#1A0E04]">
                {channel.title}
              </h3>

              {/* URL */}
              <p className="mt-[7px] font-[Poppins] text-xs font-medium text-[#E8920A]">
                {channel.url}
              </p>
            </div>

            {/* Arrow */}
            <span className="shrink-0 font-[Poppins] text-xl text-[#D5CCBE] transition group-hover:text-[#E8920A]">
              →
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
