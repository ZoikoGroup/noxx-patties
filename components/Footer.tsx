import Image from "next/image";
import Link from "next/link";

const columns = [
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Locations", href: "/locations" },
    ],
  },
  {
    heading: "Products",
    links: [
      { label: "Menu", href: "/menu" },
      { label: "Catering", href: "/catering" },
      { label: "Bundles", href: "/bundles" },
      { label: "Subscriptions", href: "#" },
    ],
  },
  {
    heading: "Business",
    links: [
      { label: "Retail Supply", href: "/retail" },
      { label: "Wholesale", href: "/wholesale" },
      { label: "Franchise", href: "/franchise" },
      { label: "Partner Portal", href: "/partner-portal" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Help Centre", href: "/help" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#212121] py-16">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-[75px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/header/logo.svg"
              alt="Noxx Patties"
              width={140}
              height={44}
              className="h-auto w-[140px]"
            />

            <p className="mt-6 font-['DM_Sans'] text-sm leading-6 text-white/40">
              An AI-powered global food infrastructure platform connecting
              consumers, retailers, wholesalers, and franchise operators
              through culturally authentic, data-driven products.
            </p>

            <p className="mt-4 font-['DM_Sans'] text-xs text-white">
              📍 USA · UK · Europe · Africa
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.heading}>
              <p className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wide text-white">
                {column.heading}
              </p>
              <ul className="mt-5 flex flex-col gap-4">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-['DM_Sans'] text-sm text-white/90 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-white/30 pt-5">
          <p className="font-['DM_Sans'] text-xs text-white/80">
            © 2026 Noxx Patties | All rights reserved | Noxx Patties is a
            trading name of Zoiko Foods Corp, a global food infrastructure
            and distribution company | Headquartered at 1401 21st Street,
            Suite R, Sacramento, CA 95811, USA.
          </p>
        </div>
      </div>
    </footer>
  );
}
