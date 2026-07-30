const sections = [
  { label: "What Are Cookies", href: "#what-are-cookies" },
  { label: "Why We Use Cookies", href: "#why-we-use-cookies" },
  { label: "Types of Cookies", href: "#types-of-cookies" },
  { label: "Third-Party Cookies", href: "#third-party-cookies" },
  { label: "Managing Cookies", href: "#managing-cookies" },
  { label: "Data & Privacy", href: "#data-privacy" },
  { label: "Updates", href: "#updates" },
  { label: "Contact", href: "#contact" },
];

const relatedLinks = [
  { label: "Terms", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Help Centre", href: "/help" },
];

const linkClass =
  "flex h-8 items-center rounded-lg border-l-2 border-transparent pl-[14px] font-[Poppins] text-xs font-medium text-[#8C8070] transition hover:border-[#E8920A] hover:bg-[#FEF3DC] hover:text-[#1A0E04]";

export default function CookiesSidebar() {
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
