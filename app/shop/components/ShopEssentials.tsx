import Image from "next/image";

const products = [
  {
    id: 1,
    image: "/shop/shop.png",
    badge: "Core Hero",
    badgeColor: "#1A0E04",
    tag: "Core Heritage",
    title: "Noxx Signature Beef Patty",
    description: "Slow-braised Afro-Caribbean seasoned beef, rich spice rub",
    price: "£4.99",
  },
  {
    id: 2,
    image: "/shop/shop.png",
    badge: "Most Popular",
    badgeColor: "#F97316",
    tag: "Core Heritage",
    title: "Noxx Chicken Patty",
    description: "Seasoned chicken in crispy golden pastry",
    price: "£4.99",
  },
  {
    id: 3,
    image: "/shop/shop.png",
    badge: "Cultural",
    badgeColor: "#0891B2",
    tag: "Cultural Signature",
    title: "Ackee & Saltfish Patty",
    description: "Jamaican national dish, authentically spiced",
    price: "£5.49",
  },
  {
    id: 4,
    image: "/shop/shop.png",
    badge: "Premium",
    badgeColor: "#6B21A8",
    tag: "Premium Range",
    title: "Oxtail Slow-Braised Patty",
    description: "Rich slow-braised oxtail, jerk gravy, golden pastry",
    price: "£6.49",
  },
  {
    id: 5,
    image: "/shop/shop.png",
    badge: "Plant-Based",
    badgeColor: "#166534",
    tag: "Ital & Plant-Based",
    title: "Ital Vegetable Patty",
    description: "Caribbean Ital tradition, thyme, coconut, root vegetables",
    price: "£4.49",
  },
  {
    id: 6,
    image: "/shop/shop.png",
    badge: "Mini Format",
    badgeColor: "#0891B2",
    tag: "Mini & Format",
    title: "Mini Patty Bites",
    description: "6 bite-sized heritage patties, perfect for sharing",
    price: "£5.99",
  },
  {
    id: 7,
    image: "/shop/shop.png",
    badge: "Sweet Finish",
    badgeColor: "#E11D48",
    tag: "Sweet Range",
    title: "Coconut Cream Patty",
    description: "Caribbean coconut custard, sweet flaky pastry",
    price: "£3.49",
  },
  {
    id: 8,
    image: "/shop/shop.png",
    badge: "Popular",
    badgeColor: "#F97316",
    tag: "Core Heritage",
    title: "Jerk Chicken Patty",
    description: "Jerk-marinated chicken, scotch bonnet, golden pastry",
    price: "£5.49",
  },
];

export default function ShopEssentials() {
  return (
    <section id="essentials" className="w-full scroll-mt-16 bg-[#F5F1EA] py-14 lg:py-[56px]">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-[92px]">
        {/* Heading */}
        <h2 className="text-center font-[Poppins] text-3xl font-semibold leading-tight text-[#1A0E04] lg:leading-[53px]">
          START WITH THE ESSENTIALS
        </h2>

        {/* Description */}
        <p className="mx-auto mt-2 max-w-[566px] text-center font-[Poppins] text-base font-normal leading-6 text-[#8C8070]">
          Our most-loved patties and signature formats — selected for first-time
          trial, repeat purchase, and maximum flavour impact.
        </p>

        {/* Product Cards */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col overflow-hidden rounded-[20px] border border-[#EAE4D9] bg-white"
            >
              {/* Image */}
              <div className="relative h-48 w-full bg-[#A3A3A3]">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
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
              <div className="flex flex-1 flex-col p-[17px]">
                {/* Tag */}
                <span className="w-fit rounded-sm bg-[#F5F5F4] px-2 py-[2px] font-[Poppins] text-[10px] font-bold text-[#44403C]">
                  {product.tag}
                </span>

                {/* Title */}
                <h3 className="mt-[6px] font-[Poppins] text-base font-bold text-[#1A0E04]">
                  {product.title}
                </h3>

                {/* Description */}
                <p className="mt-[5px] font-[Poppins] text-xs font-normal leading-4 text-[#8C8070]">
                  {product.description}
                </p>

                {/* Price + Add */}
                <div className="mt-auto flex items-center justify-between pt-4">
                  <span className="font-[Bebas_Neue] text-2xl text-[#1A0E04]">
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
