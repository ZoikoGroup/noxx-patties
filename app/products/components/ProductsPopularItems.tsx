"use client";

import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import ProductsCard, { type ProductsItem } from "./ProductsCard";

const categories = [
  "All",
  "Core",
  "Premium",
  "Plant-Based",
  "Dessert",
  "Functional",
  "Bulk / Wholesale",
];

const baseProducts: ProductsItem[] = [
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

export default function ProductsPopularItems() {
  const [active, setActive] = useState("All");

  return (
    <section className="w-full bg-[#FFFAF4] py-20">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-[75px]">
        <h2 className="text-center font-['Poppins'] text-4xl font-semibold uppercase text-[#1A0E04] lg:text-5xl">
          Popular Food Items
        </h2>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={`h-9 rounded-[50px] px-6 font-['Poppins'] text-xs font-semibold transition ${
                active === category
                  ? "bg-[#D92127] text-white"
                  : "border border-[#EAE4D9] bg-white text-[#4A3F32]"
              }`}
            >
              {category}
            </button>
          ))}

          <div className="ml-auto flex items-center gap-3">
            <button className="flex h-9 items-center gap-2 rounded-[50px] bg-[#191919] px-5 font-['Poppins'] text-xs font-semibold text-white">
              <SlidersHorizontal size={14} />
              Filters
            </button>
            <button className="h-9 rounded-[50px] bg-[#191919] px-5 font-['Poppins'] text-xs font-semibold text-white">
              Sort By :
            </button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[...baseProducts, ...baseProducts].map((product, index) => (
            <ProductsCard
              key={`${product.name}-${index}`}
              product={product}
              bordered
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button className="h-12 w-80 rounded-[50px] bg-[#E8920A] font-['Poppins'] text-base font-bold text-white shadow-[0px_4px_12px_rgba(232,146,10,0.30)] transition hover:bg-[#d98509]">
            Load More Products
          </button>
        </div>
      </div>
    </section>
  );
}
