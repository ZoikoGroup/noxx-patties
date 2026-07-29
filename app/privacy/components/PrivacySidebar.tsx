const sections = [
  { label: "Information We Collect", href: "#information-we-collect" },
  { label: "How We Use Your Information", href: "#how-we-use-your-information" },
  { label: "Data Sharing", href: "#data-sharing" },
  { label: "Data Retention", href: "#data-retention" },
  { label: "Data Security", href: "#data-security" },
  { label: "Your Rights", href: "#your-rights" },
  { label: "Cookies & Tracking", href: "#cookies-tracking" },
  { label: "International Transfers", href: "#international-transfers" },
  { label: "Policy Updates", href: "#policy-updates" },
  { label: "Contact", href: "#contact" },
];

const relatedLinks = [
  { label: "Terms", href: "/terms" },
  { label: "Cookie Policy", href: "#" },
  { label: "Help Centre", href: "#" },
];

const linkClass =
  "flex h-8 items-center rounded-lg border-l-2 border-transparent pl-[14px] font-[Poppins] text-xs font-medium text-[#8C8070] transition hover:border-[#E8920A] hover:bg-[#FEF3DC] hover:text-[#1A0E04]";

export default function PrivacySidebar() {
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
            <a key={section.label} href={section.href} className={linkClass}>
              {section.label}
            </a>
          ))}
        </nav>

        {/* Divider */}
        <div className="my-[13px] h-px w-full bg-[#EAE4D9]" />

        {/* Related Links */}
        <nav className="flex flex-col">
          {relatedLinks.map((link) => (
            <a key={link.label} href={link.href} className={linkClass}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
