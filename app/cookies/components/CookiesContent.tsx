import Image from "next/image";
import type { ReactNode } from "react";

type Block =
  | { kind: "text"; body: ReactNode }
  | { kind: "list"; items: string[] }
  | { kind: "defList"; items: { term: string; body: string }[] }
  | {
      kind: "cookieTypes";
      items: { icon: string; title: string; badge: string; required: boolean; body: string }[];
    }
  | { kind: "callout"; body: string }
  | { kind: "contact" };

type Section = {
  number: string;
  id: string;
  title: string;
  blocks: Block[];
};

const sections: Section[] = [
  {
    number: "01",
    id: "what-are-cookies",
    title: "WHAT ARE COOKIES",
    blocks: [
      {
        kind: "text",
        body: "Cookies are small text files placed on your device when you visit a website. They enable core functionality, improve performance, and allow systems to recognise users and optimise their experience over time.",
      },
    ],
  },
  {
    number: "02",
    id: "why-we-use-cookies",
    title: "WHY WE USE COOKIES",
    blocks: [
      {
        kind: "text",
        body: "We use cookies as part of a performance-driven system, not for passive tracking. Cookies support:",
      },
      {
        kind: "defList",
        items: [
          {
            term: "Platform Functionality",
            body: " — enabling core features such as cart management, login sessions, and secure navigation",
          },
          {
            term: "Performance Optimisation",
            body: " — understanding how users interact with the platform to improve speed, usability, and flow",
          },
          {
            term: "Demand Intelligence",
            body: " — supporting product recommendations, personalisation, and AI-driven ordering logic",
          },
          {
            term: "Commercial Analytics",
            body: " — measuring product performance, conversion rates, and system effectiveness across channels",
          },
        ],
      },
    ],
  },
  {
    number: "03",
    id: "types-of-cookies",
    title: "TYPES OF COOKIES WE USE",
    blocks: [
      {
        kind: "cookieTypes",
        items: [
          {
            icon: "/cookies/cookie-essential.png",
            title: "Essential Cookies",
            badge: "Required",
            required: true,
            body: "Required for the platform to function. These cannot be disabled without affecting usability. They power cart management, login sessions, and secure page navigation.",
          },
          {
            icon: "/cookies/cookie-performance.png",
            title: "Performance Cookies",
            badge: "Optional",
            required: false,
            body: "Help us understand how users interact with the platform, allowing continuous improvement of speed, usability, and conversion flows.",
          },
          {
            icon: "/cookies/cookie-functional.png",
            title: "Functional Cookies",
            badge: "Optional",
            required: false,
            body: "Enable enhanced features such as personalisation, saved preferences, and tailored recommendations based on your ordering behaviour.",
          },
          {
            icon: "/cookies/cookie-analytics.png",
            title: "Analytics & Commercial Cookies",
            badge: "Optional",
            required: false,
            body: "Support demand forecasting, SKU performance tracking, and optimisation of supply and distribution decisions across the platform.",
          },
        ],
      },
    ],
  },
  {
    number: "04",
    id: "third-party-cookies",
    title: "THIRD-PARTY COOKIES",
    blocks: [
      {
        kind: "text",
        body: "We may allow selected third-party services to place cookies for:",
      },
      {
        kind: "list",
        items: [
          "Payment processing",
          "Logistics and delivery tracking",
          "Analytics and performance measurement",
        ],
      },
      {
        kind: "text",
        body: "These providers are required to operate under appropriate data protection and confidentiality standards.",
      },
    ],
  },
  {
    number: "05",
    id: "managing-cookies",
    title: "MANAGING COOKIES",
    blocks: [
      {
        kind: "text",
        body: "You can control or disable cookies through your browser settings. Please note:",
      },
      {
        kind: "list",
        items: [
          "Disabling essential cookies may impact platform functionality",
          "Some features, including personalised recommendations and optimised ordering, may not perform as intended",
        ],
      },
      {
        kind: "callout",
        body: "We recommend keeping essential cookies enabled for the best platform experience.",
      },
    ],
  },
  {
    number: "06",
    id: "data-privacy",
    title: "DATA & PRIVACY",
    blocks: [
      {
        kind: "text",
        body: (
          <>
            Cookies may collect or support the collection of information such as
            device data, browsing behaviour, and interaction patterns. This data
            is processed in accordance with our{" "}
            <a
              href="/privacy"
              className="font-semibold text-[#E8920A] hover:underline"
            >
              Privacy Policy
            </a>
            .
          </>
        ),
      },
      { kind: "callout", body: "We do not use cookies to sell personal data." },
    ],
  },
  {
    number: "07",
    id: "updates",
    title: "UPDATES TO THIS POLICY",
    blocks: [
      {
        kind: "text",
        body: "We may update this Cookie Policy periodically to reflect changes in technology, regulation, or platform functionality. Continued use of the platform constitutes acceptance of any updates.",
      },
    ],
  },
  {
    number: "08",
    id: "contact",
    title: "CONTACT",
    blocks: [
      {
        kind: "text",
        body: "For questions regarding our use of cookies or data practices, please contact us through the official channels provided on the platform.",
      },
      { kind: "contact" },
    ],
  },
];

function CookiesBlock({ block }: { block: Block }) {
  if (block.kind === "text") {
    return (
      <p className="font-[Poppins] text-base font-normal leading-7 text-[#4A3F32]">
        {block.body}
      </p>
    );
  }

  if (block.kind === "list") {
    return (
      <ul className="flex flex-col gap-[9px]">
        {block.items.map((item) => (
          <li key={item} className="flex items-start">
            <span className="mr-[8px] font-[Poppins] text-xl font-bold leading-6 text-[#E8920A]">
              ·
            </span>

            <span className="font-[Poppins] text-base font-normal leading-6 text-[#4A3F32]">
              {item}
            </span>
          </li>
        ))}
      </ul>
    );
  }

  if (block.kind === "defList") {
    return (
      <ul className="flex flex-col gap-[9px]">
        {block.items.map((item) => (
          <li key={item.term} className="flex items-start">
            <span className="mr-[8px] font-[Poppins] text-xl font-bold leading-6 text-[#E8920A]">
              ·
            </span>

            <span className="font-[Poppins] text-base font-normal leading-6 text-[#4A3F32]">
              <span className="font-bold text-[#1A0E04]">{item.term}</span>
              {item.body}
            </span>
          </li>
        ))}
      </ul>
    );
  }

  if (block.kind === "cookieTypes") {
    return (
      <div className="flex flex-col gap-[14px]">
        {block.items.map((type) => (
          <div
            key={type.title}
            className="rounded-xl border border-[#E8920A] bg-white px-[26px] pb-[21px] pt-[21px]"
          >
            {/* Title Row */}
            <div className="flex flex-wrap items-center gap-x-[10px] gap-y-2">
              <Image
                src={type.icon}
                alt={type.title}
                width={24}
                height={33}
                className="h-[33px] w-6 shrink-0 object-contain"
              />

              <h3 className="font-[Poppins] text-base font-bold leading-7 text-[#1A0E04]">
                {type.title}
              </h3>

              <span
                className={`rounded-full px-2 py-[1px] font-[Poppins] text-[10px] font-bold leading-4 ${
                  type.required
                    ? "bg-[#E8F5EE] text-[#1A5C3A]"
                    : "bg-[#F5F1EA] text-[#8C8070]"
                }`}
              >
                {type.badge}
              </span>
            </div>

            {/* Body */}
            <p className="mt-[6px] font-[Poppins] text-sm font-normal leading-6 text-[#8C8070]">
              {type.body}
            </p>
          </div>
        ))}
      </div>
    );
  }

  if (block.kind === "callout") {
    return (
      <div className="rounded-xl border border-[#FCDFA0] bg-[#FEF3DC] px-[21px] py-[19px]">
        <p className="font-[Poppins] text-sm font-medium leading-6 text-[#1A0E04]">
          {block.body}
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl bg-[#F5F1EA] px-5 py-[18px]">
      <span className="font-[Poppins] text-xs font-bold uppercase leading-6 tracking-wide text-[#1A0E04]">
        Official Contact Channel
      </span>

      <p className="mt-[6px] font-[Poppins] text-sm font-normal leading-6 text-[#4A3F32]">
        →{" "}
        <a href="/help" className="font-semibold text-[#E8920A] hover:underline">
          Help Centre
        </a>{" "}
        — submit your enquiry through the appropriate channel for the fastest
        response.
      </p>
    </div>
  );
}

export default function CookiesContent() {
  return (
    <div className="w-full min-w-0 lg:w-[960px]">
      {/* Intro */}
      <div className="rounded-[20px] border border-l-4 border-[#E8920A] bg-white px-8 py-6">
        <p className="font-[Poppins] text-base font-normal leading-7 text-[#8C8070]">
          This Cookie Policy explains how Zoiko Foods Corp uses cookies and
          similar technologies on the Noxx Patties platform. By continuing to
          use the platform, you agree to the use of cookies in accordance with
          this Policy, unless you have disabled them through your browser or
          settings.
        </p>
      </div>

      {/* Sections */}
      <div className="mt-[46px] flex flex-col gap-[30px]">
        {sections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            className={`scroll-mt-8 ${
              index < sections.length - 1
                ? "border-b border-[#EAE4D9] pb-[54px]"
                : ""
            }`}
          >
            {/* Heading */}
            <div className="flex items-baseline">
              <span className="w-[52px] shrink-0 font-[Poppins] text-4xl font-semibold leading-9 text-[#E8920A]">
                {section.number}
              </span>

              <h2 className="font-[Poppins] text-2xl font-semibold leading-8 text-[#1A0E04] lg:text-3xl">
                {section.title}
              </h2>
            </div>

            {/* Blocks */}
            <div className="mt-[20px] flex flex-col gap-[16px]">
              {section.blocks.map((block, blockIndex) => (
                <CookiesBlock key={blockIndex} block={block} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
