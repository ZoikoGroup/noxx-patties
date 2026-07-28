"use client";

import Image from "next/image";

const tabs = [
  "All",
  "Premium",
  "Plant-Based",
  "Dessert",
  "Functional",
  "Bulk / Wholesale",
];

const foodItems = [
  {
    title: "Noxx Classic Patty",
    description:
      "Flame-grilled beef, brioche bun, signature sauce — the original.",
    image: "/home/classic.png",
  },
  {
    title: "Plant Stacker",
    description:
      "100% plant-based patty, avocado, pickled slaw, aioli.",
    image: "/home/classic.png",
  },
  {
    title: "Crispy Chicken Noxx",
    description:
      "Double-dipped batter, chilli honey glaze, soft toasted bun.",
    image: "/home/classic.png",
  },
  {
    title: "Global Fusion Wrap",
    description:
      "Wheat tortilla, spiced filling, fresh herbs, 4 regional flavors.",
    image: "/home/classic.png",
  },
];

export default function PopularFood() {
  return (
    <section className="w-full bg-[#FDFAF6] py-20">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-[75px]">

        {/* Heading */}
        <div className="text-center">
          <h2 className="font-['Poppins'] text-[36px] md:text-[40px] font-semibold tracking-wider text-[#1A0E04] leading-[60.8px]">
            POPULAR FOOD ITEMS
          </h2>
        </div>

        {/* Tabs */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              className={`h-11 rounded-full border text-xs font-semibold font-['Poppins'] transition-all
                ${
                  index === 0
                    ? "bg-[#D12525] border-[#D12525] text-white px-10"
                    : "bg-white border-[#EAE4D9] text-[#4A3F32] hover:border-[#D12525] px-8"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Food Cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">

          {foodItems.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-2xl bg-white transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              {/* Image */}
              <div className="relative h-[280px] w-full bg-black/10">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Divider */}
              <div className="mx-auto mt-5 h-[2px] w-14 bg-[#D12525]" />

              {/* Title */}
              <h3 className="mt-4 text-center text-2xl font-semibold font-['Poppins'] text-[#1A0E04]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-3 mb-8 px-6 text-center text-xs leading-5 font-['Poppins'] text-[#8C8070]">
                {item.description}
              </p>

            </div>
          ))}

        </div>

        {/* View Full Menu Button */}
        <div className="mt-16 flex justify-center">
          <button className="h-14 rounded-full bg-[#E8920A] px-10 md:px-14 text-lg font-semibold text-white shadow-[0px_4px_12px_rgba(232,146,10,0.30)] transition hover:scale-105">
            View Full Menu
          </button>
        </div>

      </div>
    </section>
  );
}