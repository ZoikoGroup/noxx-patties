import Image from "next/image";

const addOns = [
  {
    icon: "/product/Crispy-Chicken-Noxx.png",
    name: "Crispy Chicken Noxx",
    description: "Double-dipped batter, chilli honey",
    price: "$8.99",
  },
  {
    icon: "/product/Plant-Stacker.png",
    name: "Plant Stacker",
    description: "Vegan · avocado · pickled slaw",
    price: "$10.49",
  },
  {
    icon: "/product/Sweet-Patty-Dessert.png",
    name: "Sweet Patty Dessert",
    description: "Coconut & guava Caribbean classic",
    price: "$4.99",
  },
];

export default function ProductAddOns() {
  return (
    <div className="rounded-[20px] border border-[#EAE4D9] bg-white p-6 shadow-[0px_2px_8px_rgba(26,14,4,0.06)]">
      <p className="font-['Poppins'] text-sm font-bold text-[#1A0E04]">
        🎯 Complete Your Box — Pairs Well With:
      </p>

      <div className="mt-4 flex flex-col gap-3">
        {addOns.map((item) => (
          <div
            key={item.name}
            className="flex flex-col gap-3 rounded-xl bg-[#FFB936] px-4 py-3 sm:flex-row sm:items-center sm:gap-4"
          >
            <div className="flex flex-1 items-center gap-3 sm:gap-4">
              <Image
                src={item.icon}
                alt={item.name}
                width={28}
                height={28}
                className="h-7 w-7 shrink-0 object-contain"
              />

              <div className="min-w-0 flex-1">
                <p className="font-['Poppins'] text-sm font-semibold text-[#1A0E04]">
                  {item.name}
                </p>
                <p className="font-['Poppins'] text-xs text-[#4A3F32]">
                  {item.description}
                </p>
              </div>
            </div>

            <div className="flex shrink-0 items-center justify-between gap-4 sm:justify-end">
              <span className="font-['Poppins'] text-xl text-[#1A0E04]">
                {item.price}
              </span>

              <button className="h-9 shrink-0 rounded-[50px] bg-[#212121] px-5 font-['Poppins'] text-xs font-bold text-white">
                + Add
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 border-t border-[#EAE4D9] pt-4">
        <p className="font-['Poppins'] text-xs font-bold text-[#1A5C3A]">
          Add $16 more for free delivery
        </p>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[#EAE4D9]">
          <div className="h-1.5 w-1/2 rounded-full bg-[#3C893F]" />
        </div>
      </div>
    </div>
  );
}
