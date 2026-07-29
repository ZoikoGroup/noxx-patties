import type { ReactNode } from "react";

type Block =
  | { kind: "text"; body: ReactNode }
  | { kind: "list"; items: string[] }
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
    id: "scope-of-use",
    title: "SCOPE OF USE",
    blocks: [
      { kind: "text", body: "The platform is provided for the following purposes:" },
      {
        kind: "list",
        items: [
          "Consumer purchases (direct-to-consumer)",
          "Retail supply and wholesale transactions",
          "Franchise and distribution applications",
          "Partner portal access and commercial engagement",
        ],
      },
      {
        kind: "text",
        body: "Use of the platform for any unlawful, unauthorised, or non-compliant activity is strictly prohibited.",
      },
    ],
  },
  {
    number: "02",
    id: "commercial-transactions",
    title: "COMMERCIAL TRANSACTIONS",
    blocks: [
      { kind: "text", body: "All orders placed through the platform are subject to:" },
      {
        kind: "list",
        items: [
          "Product availability and fulfilment capacity",
          "Pricing structures, including tiered and volume-based pricing",
          "Applicable taxes, duties, and delivery charges",
        ],
      },
      { kind: "text", body: "We reserve the right to:" },
      {
        kind: "list",
        items: [
          "Refuse or cancel orders at our discretion",
          "Adjust pricing, SKU availability, or product specifications without prior notice",
          "Enforce minimum order quantities and commercial terms for B2B transactions",
        ],
      },
    ],
  },
  {
    number: "03",
    id: "account-responsibility",
    title: "ACCOUNT RESPONSIBILITY",
    blocks: [
      {
        kind: "text",
        body: "Where account access is required — including the Partner Portal — users are responsible for:",
      },
      {
        kind: "list",
        items: [
          "Maintaining confidentiality of login credentials",
          "Ensuring all submitted information is accurate and up to date",
          "All activity conducted under their account",
        ],
      },
      {
        kind: "text",
        body: "We reserve the right to suspend or terminate accounts that violate these Terms or compromise system integrity.",
      },
    ],
  },
  {
    number: "04",
    id: "intellectual-property",
    title: "INTELLECTUAL PROPERTY",
    blocks: [
      {
        kind: "text",
        body: "All content on the platform — including branding, product designs, system architecture, and data outputs — is the property of Zoiko Foods Corp or its licensors.",
      },
      {
        kind: "callout",
        body: "No content may be copied, reproduced, distributed, or commercially exploited without prior written consent.",
      },
    ],
  },
  {
    number: "05",
    id: "product-supply-conditions",
    title: "PRODUCT & SUPPLY CONDITIONS",
    blocks: [
      { kind: "text", body: "All products are supplied subject to:" },
      {
        kind: "list",
        items: [
          "Food safety and regulatory compliance requirements",
          "Shelf-life, storage, and handling guidelines",
          "Availability across regions and distribution channels",
        ],
      },
      {
        kind: "text",
        body: "Responsibility transfers to the buyer upon delivery, subject to agreed commercial terms.",
      },
    ],
  },
  {
    number: "06",
    id: "limitation-of-liability",
    title: "LIMITATION OF LIABILITY",
    blocks: [
      { kind: "text", body: "To the maximum extent permitted by law:" },
      {
        kind: "list",
        items: [
          'The platform and all products are provided "as is" and "as available"',
          "We do not guarantee uninterrupted access or error-free operation",
          "We are not liable for indirect, incidental, or consequential damages, including loss of profit, business interruption, or inventory loss",
        ],
      },
    ],
  },
  {
    number: "07",
    id: "data-system-use",
    title: "DATA & SYSTEM USE",
    blocks: [
      {
        kind: "text",
        body: "Use of the platform may involve the processing of operational and behavioural data to improve:",
      },
      {
        kind: "list",
        items: [
          "Demand forecasting",
          "Product recommendations",
          "Supply chain and distribution efficiency",
        ],
      },
      {
        kind: "text",
        body: (
          <>
            By using the platform, you consent to such data usage in accordance
            with our{" "}
            <a
              href="#"
              className="font-semibold text-[#E8920A] underline hover:opacity-80"
            >
              Privacy Policy
            </a>
            .
          </>
        ),
      },
    ],
  },
  {
    number: "08",
    id: "commercial-enforcement",
    title: "COMMERCIAL ENFORCEMENT",
    blocks: [
      { kind: "text", body: "For wholesale, distribution, and franchise partners:" },
      {
        kind: "list",
        items: [
          "Pricing compliance, volume commitments, and operational standards are enforceable",
          "Breach of commercial terms may result in corrective action, suspension, or termination of rights",
        ],
      },
    ],
  },
  {
    number: "09",
    id: "modifications",
    title: "MODIFICATIONS",
    blocks: [
      {
        kind: "text",
        body: "We reserve the right to update these Terms at any time. Continued use of the platform constitutes acceptance of the revised Terms.",
      },
    ],
  },
  {
    number: "10",
    id: "governing-law",
    title: "GOVERNING LAW",
    blocks: [
      {
        kind: "text",
        body: "These Terms are governed by applicable laws in the jurisdictions in which the Company operates, with primary legal jurisdiction aligned to the Company's registered headquarters.",
      },
    ],
  },
  {
    number: "11",
    id: "contact",
    title: "CONTACT",
    blocks: [
      {
        kind: "text",
        body: "For legal, commercial, or compliance-related enquiries, please contact us through the official channels provided on the platform.",
      },
      { kind: "contact" },
    ],
  },
];

function TermsBlock({ block }: { block: Block }) {
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
        <a
          href="#"
          className="font-semibold text-[#E8920A] underline hover:opacity-80"
        >
          Help Centre
        </a>{" "}
        — submit your enquiry through the appropriate channel for the fastest
        response.
      </p>
    </div>
  );
}

export default function TermsContent() {
  return (
    <div className="w-full min-w-0 lg:w-[960px]">
      {/* Intro */}
      <div className="rounded-[20px] border border-l-4 border-[#E8920A] bg-white px-6 py-4">
        <p className="font-[Poppins] text-base font-normal leading-7 text-[#8C8070]">
          These Terms govern your access to and use of the Noxx Patties
          platform, including all products, services, and commercial programmes
          operated by Zoiko Foods Corp. By accessing, purchasing from, or
          engaging with the platform, you agree to be bound by these Terms.
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
                <TermsBlock key={blockIndex} block={block} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
