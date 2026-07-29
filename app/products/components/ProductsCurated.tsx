"use client";

import { useState } from "react";
import ProductsCard, { type ProductsItem } from "./ProductsCard";

const filters = [
  "Most Loved",
  "Plant-Based",
  "High-Protein",
  "Party Pack",
  "Office Order",
];

const products: ProductsItem[] = [
  {
    name: "Noxx Classic Patty",
    description: "Flame-grilled beef, spice rub, brioche bun",
    price: "$9.99",
    tag: { label: "🔥 #1", className: "bg-[#FF6B1A]" },
  },
  {
    name: "Crispy Chicken Noxx",
    description: "Double-dipped batter, chilli honey glaze",
    price: "$8.99",
    tag: { label: "HOT", className: "bg-[#FF6B1A]" },
  },
  {
    name: "Plant Stacker",
    description: "100% plant-based, avocado, pickled slaw",
    price: "$10.49",
    tag: { label: "NEW", className: "bg-[#1A5C3A]" },
  },
  {
    name: "Global Fusion Wrap",
    description: "Wheat tortilla, spiced filling, 4 regional flavors",
    price: "$7.49",
  },
];

export default function ProductsCurated() {
  const [active, setActive] = useState("Most Loved");

  return (
    <section className="w-full border-b border-[#EAE4D9] bg-[#FFB936] py-16">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-[75px]">
        <h2 className="text-center font-['Poppins'] text-4xl font-semibold uppercase text-[#1A0E04] lg:text-5xl">
          Curated For Your Taste
        </h2>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`h-10 rounded-[50px] px-7 font-['Poppins'] text-xs font-semibold transition ${
                active === filter
                  ? "bg-[#D92127] text-white shadow-[0px_4px_12px_rgba(232,146,10,0.30)]"
                  : "border border-[#EAE4D9] bg-white text-[#4A3F32]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductsCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
