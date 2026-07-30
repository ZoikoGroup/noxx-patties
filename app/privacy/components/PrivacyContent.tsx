import type { ReactNode } from "react";

type Block =
  | { kind: "text"; body: ReactNode }
  | { kind: "list"; items: string[] }
  | { kind: "defList"; items: { term: string; body: string }[] }
  | { kind: "cards"; items: { title: string; points: string[] }[] }
  | { kind: "rights"; items: { title: string; body: string }[] }
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
    id: "information-we-collect",
    title: "INFORMATION WE COLLECT",
    blocks: [
      {
        kind: "text",
        body: "We collect information necessary to operate a high-performance, data-driven food system:",
      },
      {
        kind: "cards",
        items: [
          {
            title: "👤 Personal Information",
            points: [
              "Name, email address, phone number",
              "Billing and delivery address",
              "Account and login credentials",
            ],
          },
          {
            title: "🛒 Transactional Information",
            points: [
              "Orders placed, products selected, payment details",
              "Purchase frequency, order value, and fulfilment history",
            ],
          },
          {
            title: "📊 Behavioural & Usage Data",
            points: [
              "Browsing activity, product interactions, and preferences",
              "Device information, IP address, and session data",
            ],
          },
          {
            title: "🏢 Commercial & Partner Data",
            points: [
              "Business details for retail, wholesale, and franchise applications",
              "Order volumes, SKU movement, and account performance",
            ],
          },
        ],
      },
    ],
  },
  {
    number: "02",
    id: "how-we-use-your-information",
    title: "HOW WE USE YOUR INFORMATION",
    blocks: [
      {
        kind: "text",
        body: "Your information is used to operate and continuously improve the platform:",
      },
      {
        kind: "defList",
        items: [
          {
            term: "Order Fulfilment:",
            body: " Processing, delivery, and customer support",
          },
          {
            term: "Platform Optimisation:",
            body: " Improving product recommendations, demand forecasting, and system performance",
          },
          {
            term: "Commercial Intelligence:",
            body: " Enhancing SKU selection, pricing models, and supply chain decisions",
          },
          {
            term: "Account Management:",
            body: " Maintaining secure access and personalised user experience",
          },
          {
            term: "Communication:",
            body: " Sending order updates, service notifications, and relevant commercial information",
          },
        ],
      },
      {
        kind: "callout",
        body: "We do not use data for decorative analytics — it is used to drive measurable system performance and decision-making.",
      },
    ],
  },
  {
    number: "03",
    id: "data-sharing",
    title: "DATA SHARING",
    blocks: [
      {
        kind: "text",
        body: "We share information only where necessary to operate the platform effectively:",
      },
      {
        kind: "defList",
        items: [
          {
            term: "Logistics and Fulfilment Partners",
            body: " — for delivery and supply chain execution",
          },
          {
            term: "Payment Processors",
            body: " — for secure transaction handling",
          },
          {
            term: "Commercial Partners",
            body: " — retailers, distributors, or franchise operators where relevant to your engagement",
          },
          {
            term: "Legal or Regulatory Authorities",
            body: " — where required by law",
          },
        ],
      },
      { kind: "callout", body: "We do not sell personal data to third parties." },
    ],
  },
  {
    number: "04",
    id: "data-retention",
    title: "DATA RETENTION",
    blocks: [
      { kind: "text", body: "We retain information only for as long as necessary to:" },
      {
        kind: "list",
        items: [
          "Fulfil transactions and contractual obligations",
          "Maintain accurate commercial records",
          "Improve system intelligence and performance",
        ],
      },
      {
        kind: "text",
        body: "Retention periods may vary depending on legal, operational, and regulatory requirements.",
      },
    ],
  },
  {
    number: "05",
    id: "data-security",
    title: "DATA SECURITY",
    blocks: [
      {
        kind: "text",
        body: "We implement appropriate technical and organisational measures to protect your data, including:",
      },
      {
        kind: "list",
        items: [
          "Secure data storage and controlled access systems",
          "Encryption of sensitive information where applicable",
          "Continuous monitoring to prevent unauthorised access or misuse",
        ],
      },
      {
        kind: "text",
        body: "While no system is completely immune to risk, we operate with institutional-grade security discipline.",
      },
    ],
  },
  {
    number: "06",
    id: "your-rights",
    title: "YOUR RIGHTS",
    blocks: [
      {
        kind: "text",
        body: "Depending on your jurisdiction, you may have the right to:",
      },
      {
        kind: "rights",
        items: [
          { title: "Access", body: "Request the personal data we hold about you" },
          { title: "Correction", body: "Request correction of inaccurate data" },
          { title: "Deletion", body: "Request deletion of your personal data" },
          {
            title: "Restriction",
            body: "Restrict or object to certain types of processing",
          },
          { title: "Portability", body: "Receive your data in a portable format" },
          { title: "Withdrawal", body: "Withdraw consent where applicable" },
        ],
      },
      {
        kind: "text",
        body: "Requests can be submitted through the official contact channels on the platform.",
      },
    ],
  },
  {
    number: "07",
    id: "cookies-tracking",
    title: "COOKIES & TRACKING TECHNOLOGIES",
    blocks: [
      { kind: "text", body: "We use cookies and similar technologies to:" },
      {
        kind: "list",
        items: [
          "Enable core platform functionality",
          "Understand user behaviour and improve performance",
          "Support personalisation and recommendation systems",
        ],
      },
      {
        kind: "text",
        body: (
          <>
            You can manage cookie preferences through your browser settings. See
            our{" "}
            <a
              href="/cookies"
              className="font-semibold text-[#E8920A] hover:underline"
            >
              Cookie Policy
            </a>{" "}
            for full details.
          </>
        ),
      },
    ],
  },
  {
    number: "08",
    id: "international-transfers",
    title: "INTERNATIONAL DATA TRANSFERS",
    blocks: [
      {
        kind: "text",
        body: "As a global platform operating across multiple regions, your information may be processed in jurisdictions outside your country of residence. We ensure that appropriate safeguards are in place for such transfers.",
      },
    ],
  },
  {
    number: "09",
    id: "policy-updates",
    title: "POLICY UPDATES",
    blocks: [
      {
        kind: "text",
        body: "We may update this Privacy Policy from time to time. Continued use of the platform constitutes acceptance of any changes.",
      },
    ],
  },
  {
    number: "10",
    id: "contact",
    title: "CONTACT",
    blocks: [
      {
        kind: "text",
        body: "For privacy-related enquiries or requests, please contact us through the official channels provided on the platform.",
      },
      { kind: "contact" },
    ],
  },
];

function PrivacyBlock({ block }: { block: Block }) {
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

  if (block.kind === "cards") {
    return (
      <div className="grid grid-cols-1 gap-[14px] md:grid-cols-2">
        {block.items.map((card) => (
          <div
            key={card.title}
            className="rounded-xl border border-[#EAE4D9] bg-white px-[21px] pb-[21px] pt-[19px]"
          >
            <h3 className="font-[Poppins] text-xs font-bold leading-6 text-[#1A0E04]">
              {card.title}
            </h3>

            <ul className="mt-[7px] flex flex-col gap-[9px]">
              {card.points.map((point) => (
                <li key={point} className="flex items-start">
                  <span className="mr-[6px] font-[Poppins] text-base font-bold leading-5 text-[#E8920A]">
                    ·
                  </span>

                  <span className="font-[Poppins] text-xs font-normal leading-5 text-[#8C8070]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }

  if (block.kind === "rights") {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {block.items.map((right) => (
          <div
            key={right.title}
            className="rounded-xl border border-[#1A5C3A]/20 bg-[#E8F5EE] px-[17px] pb-[17px] pt-[15px]"
          >
            <h3 className="font-[Poppins] text-xs font-bold leading-6 text-[#1A5C3A]">
              {right.title}
            </h3>

            <p className="mt-[6px] font-[Poppins] text-xs font-normal leading-4 text-[#8C8070]">
              {right.body}
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
        — submit your privacy request through the appropriate channel for the
        fastest response.
      </p>
    </div>
  );
}

export default function PrivacyContent() {
  return (
    <div className="w-full min-w-0 lg:w-[960px]">
      {/* Intro */}
      <div className="rounded-[20px] border border-l-4 border-[#E8920A] bg-white px-8 py-6">
        <p className="font-[Poppins] text-base font-normal leading-7 text-[#8C8070]">
          This Privacy Policy explains how Zoiko Foods Corp collects, uses, and
          protects your information when you access or interact with the Noxx
          Patties platform. By using the platform, you agree to the collection
          and use of information in accordance with this Policy.
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
                <PrivacyBlock key={blockIndex} block={block} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
