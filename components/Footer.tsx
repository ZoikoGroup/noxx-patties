import Image from "next/image";
import Link from "next/link";

const columns = [
  { heading: "Company", links: ["About", "Careers", "Press", "Locations"] },
  { heading: "Products", links: ["Menu", "Catering", "Bundles", "Subscriptions"] },
  { heading: "Business", links: ["Retail Supply", "Wholesale", "Franchise", "Partner Portal"] },
  { heading: "Legal", links: ["Terms", "Privacy", "Cookie Policy", "Help Centre"] },
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
                  <li key={link}>
                    <Link
                      href="#"
                      className="font-['DM_Sans'] text-sm text-white/90 hover:text-white"
                    >
                      {link}
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
