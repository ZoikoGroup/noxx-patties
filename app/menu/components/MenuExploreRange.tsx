import Image from "next/image";

const filters = [
  { label: "Chicken", active: true },
  { label: "Beef", active: false },
  { label: "Premium", active: false },
  { label: "Plant-Based", active: false },
  { label: "Mini", active: false },
  { label: "Sweet", active: false },
];

const products = [
  {
    id: 1,
    image: "/menu/explore-range.png",
    badge: "Most Popular",
    badgeColor: "#F97316",
    title: "Noxx Chicken Patty",
    description: "Seasoned chicken, golden pastry",
    price: "£4.99",
  },
  {
    id: 2,
    image: "/menu/explore-range.png",
    badge: "",
    badgeColor: "",
    title: "Jerk Chicken Patty",
    description: "Jerk-marinated, scotch bonnet",
    price: "£5.49",
  },
  {
    id: 3,
    image: "/menu/explore-range.png",
    badge: "Popular",
    badgeColor: "#0891B2",
    title: "Curry Chicken Patty",
    description: "Slow-cooked curried chicken",
    price: "£5.49",
  },
  {
    id: 4,
    image: "/menu/explore-range.png",
    badge: "",
    badgeColor: "",
    title: "Brown Stew Chicken Patty",
    description: "Tender brown stew, warm spices",
    price: "£5.49",
  },
];

export default function MenuExploreRange() {
  return (
    <section className="w-full border-t border-[#EAE4D9] bg-[#FFB936] py-14 lg:py-[60px]">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-[92px]">
        {/* Heading */}
        <h2 className="text-center font-[Poppins] text-3xl font-semibold leading-tight text-[#1A0E04] lg:text-4xl lg:leading-[49px]">
          EXPLORE THE RANGE
        </h2>

        {/* Filters */}
        <div className="mt-[38px] flex flex-wrap justify-center gap-[10px]">
          {filters.map((filter) => (
            <button
              key={filter.label}
              className={`flex h-10 items-center justify-center whitespace-nowrap rounded-full border px-[23px] font-[Poppins] text-xs font-bold transition ${
                filter.active
                  ? "border-[#D92127] bg-[#D92127] text-white"
                  : "border-[#EAE4D9] bg-white text-[#4A3F32] hover:border-[#D92127] hover:text-[#D92127]"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="mt-[28px] grid grid-cols-1 gap-[20px] sm:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col overflow-hidden rounded-[20px] border border-[#EAE4D9] bg-white"
            >
              {/* Image */}
              <div className="relative h-44 w-full bg-[#A3A3A3]">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover"
                />

                {/* Badge */}
                {product.badge && (
                  <span
                    className="absolute left-[10px] top-[10px] rounded-full px-[9px] py-[3px] font-[Poppins] text-[10px] font-bold text-white"
                    style={{ backgroundColor: product.badgeColor }}
                  >
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col px-[17px] pb-[14px] pt-[13px]">
                {/* Title */}
                <h3 className="font-[Poppins] text-base font-bold text-[#1A0E04]">
                  {product.title}
                </h3>

                {/* Description */}
                <p className="mt-[3px] font-[Poppins] text-xs font-normal leading-4 text-[#8C8070]">
                  {product.description}
                </p>

                {/* Price + Add */}
                <div className="mt-auto flex items-center justify-between pt-[8px]">
                  <span className="font-[Bebas_Neue] text-xl text-[#1A0E04]">
                    {product.price}
                  </span>

                  <button className="flex h-8 items-center justify-center rounded-full bg-[#1A0E04] px-[18px] font-[Poppins] text-xs font-bold text-white transition hover:bg-[#D92127]">
                    + Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
