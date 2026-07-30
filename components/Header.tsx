"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

const navItems = [
  { label: "Menu", href: "/menu" },
  { label: "Order", href: "/shop" },
  { label: "Locations", href: "/locations" },
  { label: "Catering", href: "/catering" },
  { label: "Business", href: "/wholesale" },
  { label: "About", href: "/about" },
];

export default function Header() {
  return (
    <header className="w-full h-16 bg-white border-b border-[#EAE4D9] shadow-[0_4px_24px_rgba(26,14,4,0.09)]">
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-[75px]">

        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/header/logo.svg"
            alt="Noxx Patties"
            width={140}
            height={44}
            className="w-[110px] lg:w-[140px] h-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10 xl:gap-14">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-base font-medium text-[#4A3F32] hover:text-[#D12525] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-3 sm:gap-5 lg:gap-8">

          {/* Cart */}
          <div className="relative">
            <Image
              src="/header/cart.svg"
              alt="Cart"
              width={22}
              height={22}
              className="w-5 h-5 lg:w-[22px] lg:h-[22px]"
            />

            <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#212121] text-[10px] font-medium text-white">
              0
            </span>
          </div>

          {/* Desktop Button */}
          <Link
            href="/shop"
            className="hidden lg:flex h-10 items-center justify-center rounded-full bg-[#D12525] px-8 text-sm font-bold text-white shadow-[0_4px_12px_rgba(209,37,37,0.30)] hover:bg-[#b61f1f] transition"
          >
            Order Now
          </Link>

          {/* Desktop Market Selector */}
          <button className="hidden lg:block text-base font-medium text-[#D12525] underline underline-offset-2">
            Market Selector
          </button>

          {/* Mobile Menu */}
          <button className="lg:hidden">
            <Menu size={26} className="text-[#4A3F32]" />
          </button>
        </div>
      </div>
    </header>
  );
}