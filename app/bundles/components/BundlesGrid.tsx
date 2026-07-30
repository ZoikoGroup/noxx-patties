import Image from "next/image";

const bundles = [
  {
    image: "/bundles/bundle-placeholder.png",
    countBadge: "6 Patties",
    tagBadge: "Best Seller",
    title: "Bestsellers Mix",
    description:
      "Our 6 highest-performing SKUs — one of each core hero, chicken, and plant-based line. The single fastest intro bundle.",
    price: "£27.94",
    saving: "Save 8%",
  },
  {
    image: "/bundles/bundle-placeholder.png",
    countBadge: null,
    tagBadge: null,
    title: "Chicken Lovers Box",
    description:
      "Noxx Chicken, Jerk Chicken, and Curry Chicken — 12 patties covering all three core chicken lines for maximum flavour variety.",
    price: "£59.88",
    saving: "Save 12%",
  },
  {
    image: "/bundles/bundle-placeholder.png",
    countBadge: "6 Patties",
    tagBadge: null,
    title: "Premium Box",
    description:
      "Oxtail Slow-Braised, Curry Goat, Jerk Lamb, and Pepper Shrimp. The premium range in a single curated box.",
    price: "£38.94",
    saving: "Save 10%",
  },
  {
    image: "/bundles/bundle-placeholder.png",
    countBadge: "6 Patties",
    tagBadge: null,
    title: "Plant-Based Box",
    description:
      "Ital Vegetable, Jerk Jackfruit, Spiced Lentil, and Callaloo & Coconut. The complete plant-based range.",
    price: "£26.94",
    saving: "Save 8%",
  },
  {
    image: "/bundles/bundle-placeholder.png",
    countBadge: "24 Patties",
    tagBadge: "Family",
    title: "Heritage Box",
    description:
      "24-patty household stock-up. Core heritage range at volume. Covers a week of meals for a family of four.",
    price: "£109.76",
    saving: "Save 18%",
  },
  {
    image: "/bundles/bundle-placeholder.png",
    countBadge: "4 + 4 Patties",
    tagBadge: null,
    title: "Sweet & Snack Box",
    description:
      "Mini Patty Bites + Sweet Range — four of each. For sharing, dessert occasions, or lighter appetite formats.",
    price: "£35.92",
    saving: "Save 7%",
  },
];

export default function BundlesGrid() {
  return (
    <section className="w-full border-t border-[#EAE4D9] bg-[#FDB735] py-14 lg:py-[66px]">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-[92px]">
        {/* Heading */}
        <h2 className="text-center font-['Poppins'] text-3xl font-extrabold leading-10 text-[#1A0E04] lg:text-4xl">
          Shop the range Order direct
        </h2>

        {/* Description */}
        <p className="mx-auto mt-[13px] max-w-[570px] text-center font-['Poppins'] text-base font-normal leading-7 text-[#8C8070]">
          Skip individual selection and order directly from pre-built
          combinations designed for speed, consistency, and value.
        </p>

        {/* Bundle Cards */}
        <div className="mt-10 grid grid-cols-1 gap-[20px] sm:grid-cols-2 lg:mt-[70px] lg:grid-cols-3">
          {bundles.map((bundle) => (
            <div
              key={bundle.title}
              className="flex flex-col overflow-hidden rounded-[20px] border border-[#EAE4D9] bg-white"
            >
              {/* Image */}
              <div className="relative h-[178px] w-full bg-[#CDCDCD]">
                <Image
                  src={bundle.image}
                  alt={bundle.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />

                {/* Count Badge */}
                {bundle.countBadge && (
                  <span className="absolute left-[12px] top-[12px] rounded-full bg-[#1A0E04] px-[10px] py-[4px] font-['Poppins'] text-xs font-bold text-white">
                    {bundle.countBadge}
                  </span>
                )}

                {/* Tag Badge */}
                {bundle.tagBadge && (
                  <span className="absolute right-[12px] top-[12px] rounded-full bg-[#E8920A] px-[9px] py-[3px] font-['Poppins'] text-[10px] font-bold text-white">
                    {bundle.tagBadge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-[21px]">
                {/* Title */}
                <h3 className="font-['Poppins'] text-base font-extrabold text-[#1A0E04]">
                  {bundle.title}
                </h3>

                {/* Description */}
                <p className="mt-[9px] font-['Poppins'] text-xs font-normal leading-5 text-[#8C8070]">
                  {bundle.description}
                </p>

                {/* Price */}
                <div className="mt-auto pt-[8px] font-['Poppins'] text-2xl font-black text-[#1A0E04]">
                  {bundle.price}
                </div>

                {/* Saving */}
                <span className="mt-[10px] w-fit rounded-full bg-[#E8F5EE] px-[9px] py-[3px] font-['Poppins'] text-xs font-bold text-[#1A5C3A]">
                  {bundle.saving}
                </span>

                {/* Add to Cart */}
                <button className="mt-[11px] flex h-9 w-full items-center justify-center rounded-full bg-[#1A0E04] font-['Poppins'] text-xs font-bold text-white transition hover:bg-[#E8920A]">
                  + Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
