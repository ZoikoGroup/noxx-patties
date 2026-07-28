"use client";

import { useState } from "react";

const sections = [
  {
    title: "Ingredients & Allergens",
    content: (
      <>
        <p>
          <span className="font-bold">Ingredients:</span> Seasoned beef (min.
          80%), water, spice blend (scotch bonnet, allspice, thyme, garlic,
          black pepper), breadcrumbs (wheat flour, salt), onion, binding
          agents (soy protein), salt.
        </p>
        <p className="mt-3">
          <span className="font-bold">Allergens:</span> Contains wheat, soy.
          May contain traces of milk, mustard. Full allergen information
          available on pack.
        </p>
        <p className="mt-3">
          <span className="font-bold">Halal Certification:</span> Certified
          by a recognised authority. Certificate available on request.
        </p>
      </>
    ),
  },
  {
    title: "Nutrition Information",
    content: (
      <p>
        Full nutritional breakdown — calories, macros, and sodium — is
        printed on pack and available on request.
      </p>
    ),
  },
  {
    title: "Heritage & Sourcing",
    content: (
      <p>
        Rooted in Afro-Caribbean patty tradition, made with responsibly
        sourced beef and spice blends imported directly from the region.
      </p>
    ),
  },
  {
    title: "Delivery & Storage",
    content: (
      <p>
        Delivered cold-chain to preserve freshness. Keep refrigerated and
        consume within 3 days of delivery, or freeze for up to 3 months.
      </p>
    ),
  },
];

export default function ProductDetails() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mt-12 flex flex-col gap-4">
      {sections.map((section, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={section.title}
            className="rounded-[20px] border border-[#EAE4D9] bg-white"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between px-6 py-5"
            >
              <span className="font-['Poppins'] text-base font-bold text-[#1A0E04]">
                {section.title}
              </span>
              <span
                className={`font-['Poppins'] text-xs font-bold text-[#8C8070] transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {isOpen && (
              <div className="px-6 pb-6 font-['Poppins'] text-sm leading-6 text-[#8C8070]">
                {section.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
