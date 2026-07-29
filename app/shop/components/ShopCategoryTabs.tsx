const categories = [
  { label: "Bestsellers", active: true },
  { label: "Chicken", active: false },
  { label: "Beef", active: false },
  { label: "Plant-Based", active: false },
  { label: "Mini Patties", active: false },
  { label: "Sweet", active: false },
  { label: "Bundles", active: false },
  { label: "Catering", active: false },
];

export default function ShopCategoryTabs() {
  return (
    <section className="w-full border-b border-[#EAE4D9] bg-[#D92127]">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-[92px]">
        <div className="flex h-14 items-stretch gap-2 overflow-x-auto lg:justify-center lg:gap-0">
          {categories.map((category) => (
            <button
              key={category.label}
              className={`flex shrink-0 items-center whitespace-nowrap border-b-[3px] px-[22px] font-[Poppins] text-xs font-bold transition ${
                category.active
                  ? "border-[#FFB936] text-[#FFB936]"
                  : "border-transparent text-white hover:border-white/40"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
