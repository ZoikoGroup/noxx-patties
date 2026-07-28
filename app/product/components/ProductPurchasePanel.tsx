"use client";

import { useState } from "react";

const badges = ["Halal Certified", "Clean Label", "FDA Compliant", "Cold Chain"];

export default function ProductPurchasePanel() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <h1 className="font-['Poppins'] text-4xl font-bold leading-10 text-[#1A0E04]">
        NOXX CLASSIC PATTY
      </h1>

      <p className="mt-3 w-[592px] max-w-full font-['Poppins'] text-[16px] leading-6 text-[#4A3F32]">
        Slow-braised Afro-Caribbean seasoned beef, double-charred on an open
        grill, sealed in a warm brioche bun. Bold, warm, unmistakably Noxx.
      </p>

      <div className="mt-6 flex items-start justify-between">
        <div>
          <div className="font-['Poppins'] text-5xl font-medium leading-tight lg:leading-[52px] text-[#1A0E04]">
            $9.99
          </div>
          <div className="mt-2 font-['Poppins'] text-base text-[#8C8070] line-through">
            Was $11.99 · Save 17%
          </div>
        </div>

        <div className="text-right">
          <div className="font-['Poppins'] text-base tracking-widest text-[#E8920A]">
            ★★★★★
          </div>
          <div className="mt-1 font-['Poppins'] text-xs text-[#8C8070]">
            4.8 · 2,140 reviews
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-4">
        <span className="font-['Poppins'] text-xs font-semibold text-[#1A0E04]">
          Quantity
        </span>

        <div className="flex h-9 w-28 items-center justify-between rounded-[50px] border border-[#E8920A] px-4">
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="text-lg leading-none text-[#1A0E04]"
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="font-['Poppins'] text-base font-bold text-[#1A0E04]">
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => setQuantity((q) => q + 1)}
            className="text-lg leading-none text-[#1A0E04]"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      <button className="mt-6 h-14 w-full rounded-[50px] bg-[#E8920A] font-['Poppins'] text-base font-bold text-white shadow-[0px_6px_20px_rgba(232,146,10,0.40)] transition hover:bg-[#d98509]">
        Buy Now
      </button>

      <button className="mt-3 h-12 w-full rounded-[50px] bg-[#212121] font-['Poppins'] text-base font-bold text-white transition hover:bg-black">
        Add to Cart
      </button>

      <div className="mt-6 flex flex-wrap gap-3">
        {badges.map((badge) => (
          <span
            key={badge}
            className="rounded-[50px] border border-[#EAE4D9] bg-white px-6 py-2.5 font-['Poppins'] text-xs font-semibold text-[#1A0E04] shadow-[0px_2px_8px_rgba(26,14,4,0.06)]"
          >
            {badge}
          </span>
        ))}
      </div>

      <div className="mt-4 rounded-xl border border-[#3C893F]/20 bg-[#E8F5EE] px-6 py-3.5">
        <p className="font-['Poppins'] text-[15px] font-semibold text-[#1A5C3A]">
          🚚 Order by 2pm — next-day delivery available in your area
        </p>
      </div>
    </div>
  );
}
