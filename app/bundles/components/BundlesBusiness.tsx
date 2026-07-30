import Image from "next/image";

const options = [
  {
    icon: "/bundles/icon-business-solutions.png",
    eyebrow: "Catering & Office",
    title: "Business Solutions",
    description:
      "For catering, office supply, and event bundle planning at scale. Custom configurations, standing orders, and B2B account support.",
    url: "noxxpatties.com/business/",
    cta: "Explore Business →",
    href: "/catering",
  },
  {
    icon: "/bundles/icon-wholesale-access.png",
    eyebrow: "Wholesale & Distribution",
    title: "Wholesale Access",
    description:
      "Case-level and pallet-level ordering for wholesale and distribution partners. Volume pricing, demand intelligence, and fulfilment scheduling.",
    url: "noxxpatties.com/wholesale/",
    cta: "Wholesale Access →",
    href: "/wholesale",
  },
];

export default function BundlesBusiness() {
  return (
    <section className="w-full border-t border-[#EAE4D9] bg-white py-14 lg:py-[81px]">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-[124px]">
        {/* Eyebrow */}
        <p className="text-center font-['Poppins'] text-xs font-bold uppercase tracking-wider text-[#E8920A]">
          For Business Orders
        </p>

        {/* Heading */}
        <h2 className="mx-auto mt-[10px] max-w-[674px] text-center font-['Poppins'] text-3xl font-extrabold leading-10 text-[#1A0E04] lg:text-4xl">
          Bundles at scale for <br/> catering, retail, and wholesale.
        </h2>

        {/* Description */}
        <p className="mx-auto mt-[18px] max-w-[558px] text-center font-['Poppins'] text-base font-normal leading-7 text-[#8C8070]">
          Larger bundle configurations for commercial operators. Structured for
          volume efficiency and distribution planning.
        </p>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 gap-[20px] lg:grid-cols-2">
          {options.map((option) => (
            <div
              key={option.title}
              className="flex flex-col rounded-[20px] border border-[#EAE4D9] bg-[#FFFAF4] px-[29px] py-[30px] shadow-[0px_2px_8px_rgba(26,14,4,0.06)]"
            >
              {/* Icon */}
              <Image
                src={option.icon}
                alt=""
                width={28}
                height={28}
                className="h-7 w-7 object-contain"
              />

              {/* Eyebrow */}
              <span className="mt-[25px] font-['Poppins'] text-xs font-bold uppercase tracking-wide text-[#E8920A]">
                {option.eyebrow}
              </span>

              {/* Title */}
              <h3 className="mt-[10px] font-['Poppins'] text-base font-bold text-[#1A0E04]">
                {option.title}
              </h3>

              {/* Description */}
              <p className="mt-[8px] font-['Poppins'] text-sm font-normal leading-6 text-[#8C8070]">
                {option.description}
              </p>

              {/* URL */}
              <span className="mt-auto pt-[24px] font-['Poppins'] text-xs font-normal text-[#CDCDCD]">
                {option.url}
              </span>

              {/* CTA */}
              <a
                href={option.href}
                className="mt-[14px] flex h-10 w-fit items-center justify-center whitespace-nowrap rounded-full bg-[#1A0E04] px-[22px] font-['Poppins'] text-xs font-bold text-white transition hover:bg-[#E8920A]"
              >
                {option.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
