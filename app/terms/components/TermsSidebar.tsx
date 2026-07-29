const sections = [
  { label: "Scope of Use", href: "#scope-of-use" },
  { label: "Commercial Transactions", href: "#commercial-transactions" },
  { label: "Account Responsibility", href: "#account-responsibility" },
  { label: "Intellectual Property", href: "#intellectual-property" },
  { label: "Product & Supply Conditions", href: "#product-supply-conditions" },
  { label: "Limitation of Liability", href: "#limitation-of-liability" },
  { label: "Data & System Use", href: "#data-system-use" },
  { label: "Commercial Enforcement", href: "#commercial-enforcement" },
  { label: "Modifications", href: "#modifications" },
  { label: "Governing Law", href: "#governing-law" },
  { label: "Contact", href: "#contact" },
];

const relatedLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Cookie Policy", href: "#" },
  { label: "Help Centre", href: "#" },
];

export default function TermsSidebar() {
  return (
    <aside className="hidden w-60 shrink-0 lg:block">
      <div className="sticky top-8">
        {/* Label */}
        <span className="font-[Poppins] text-xs font-bold uppercase tracking-wide text-[#8C8070]">
          On This Page
        </span>

        {/* Section Links */}
        <nav className="mt-[15px] flex flex-col">
          {sections.map((section) => (
            <a
              key={section.label}
              href={section.href}
              className="flex h-8 items-center rounded-lg border-l-2 border-transparent pl-[14px] font-[Poppins] text-xs font-medium text-[#8C8070] transition hover:border-[#E8920A] hover:bg-[#FEF3DC] hover:text-[#1A0E04]"
            >
              {section.label}
            </a>
          ))}
        </nav>

        {/* Divider */}
        <div className="my-[13px] h-px w-full bg-[#EAE4D9]" />

        {/* Related Links */}
        <nav className="flex flex-col">
          {relatedLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex h-8 items-center rounded-lg border-l-2 border-transparent pl-[14px] font-[Poppins] text-xs font-medium text-[#8C8070] transition hover:border-[#E8920A] hover:bg-[#FEF3DC] hover:text-[#1A0E04]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
