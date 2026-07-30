import Image from "next/image";

const products = [
  {
    id: 1,
    image: "/menu/most-ordered.png",
    badge: "Most Popular",
    badgeColor: "#F97316",
    title: "Noxx Chicken Patty",
    description: "Seasoned chicken, golden pastry, Caribbean spice blend",
    price: "£4.99",
    note: "or £8.99 as a meal",
  },
  {
    id: 2,
    image: "/menu/most-ordered.png",
    badge: "Best Value",
    badgeColor: "#E8920A",
    title: "Chicken Combo",
    description: "Noxx Chicken Patty + fries + drink",
    price: "£8.99",
    note: "Save £2.48",
  },
  {
    id: 3,
    image: "/menu/most-ordered.png",
    badge: "Core Hero",
    badgeColor: "#1A0E04",
    title: "Noxx Signature Beef Patty",
    description: "Slow-braised seasoned beef, Afro-Caribbean spice rub",
    price: "£4.99",
    note: "",
  },
  {
    id: 4,
    image: "/menu/most-ordered.png",
    badge: "Bold Flavour",
    badgeColor: "#F97316",
    title: "Jerk Chicken Patty",
    description: "Jerk-marinated chicken, scotch bonnet, thyme",
    price: "£5.49",
    note: "",
  },
  {
    id: 5,
    image: "/menu/most-ordered.png",
    badge: "Premium",
    badgeColor: "#5B21B6",
    title: "Oxtail Slow-Braised Patty",
    description: "Rich slow-braised oxtail, jerk gravy, golden pastry",
    price: "£6.49",
    note: "",
  },
  {
    id: 6,
    image: "/menu/most-ordered.png",
    badge: "Mini Format",
    badgeColor: "#1A5C3A",
    title: "Mini Patty Bites",
    description: "6 mini heritage patties, perfect for sharing or snacking",
    price: "£5.99",
    note: "",
  },
];

export default function MenuMostOrdered() {
  return (
    <section
      id="most-ordered"
      className="w-full scroll-mt-16 border-t border-[#EAE4D9] bg-[#FFB936] py-14 lg:py-[55px]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-[92px]">
        {/* Heading */}
        <h2 className="text-center font-[Poppins] text-3xl font-semibold leading-tight text-[#1A0E04] lg:text-4xl lg:leading-[49px]">
          MOST ORDERED RIGHT NOW
        </h2>

        {/* Description */}
        <p className="mt-3 text-center font-[Poppins] text-base font-normal text-[#8C8070]">
          Ranked by live order data — updated continuously.
        </p>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col overflow-hidden rounded-[20px] border border-[#EAE4D9] bg-white"
            >
              {/* Image */}
              <div className="relative h-44 w-full bg-[#D5CCBE]">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover"
                />

                {/* Badge */}
                <span
                  className="absolute left-[10px] top-[10px] rounded-full px-[9px] py-[3px] font-[Poppins] text-[10px] font-bold text-white"
                  style={{ backgroundColor: product.badgeColor }}
                >
                  {product.badge}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col px-[17px] pb-[14px] pt-[13px]">
                {/* Title */}
                <h3 className="font-[Poppins] text-base font-bold text-[#1A0E04]">
                  {product.title}
                </h3>

                {/* Description */}
                <p className="mt-[2px] font-[Poppins] text-[11px] font-normal leading-4 text-[#8C8070]">
                  {product.description}
                </p>

                {/* Price + Add */}
                <div className="mt-2 flex items-center justify-between pt-[6px]">
                  <div>
                    <div className="font-[Poppins] text-xl font-normal text-[#1A0E04]">
                      {product.price}
                    </div>

                    {product.note && (
                      <div className="mt-[2px] font-[Poppins] text-xs font-normal text-[#D5CCBE]">
                        {product.note}
                      </div>
                    )}
                  </div>

                  <button className="flex h-8 items-center justify-center rounded-full bg-[#1A0E04] px-[17px] font-[Poppins] text-xs font-bold text-white transition hover:bg-[#D92127]">
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
