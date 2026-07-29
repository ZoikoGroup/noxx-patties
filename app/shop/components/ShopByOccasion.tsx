import Image from "next/image";

const occasions = [
  { label: "☀️ Daily Meal", active: false },
  { label: "🥗 Lunch", active: true },
  { label: "⭐ Premium Meal", active: false },
  { label: "🥡 Snack", active: false },
  { label: "🌅 Breakfast", active: false },
  { label: "🍰 Dessert", active: false },
  { label: "👨‍👩‍👧‍👦 Sharing", active: false },
  { label: "🍽️ Catering", active: false },
];

const products = [
  {
    id: 1,
    image: "/shop/shop.png",
    title: "Noxx Signature Beef Patty",
    description: "Perfect lunchtime heat and flavour",
    price: "£4.99",
  },
  {
    id: 2,
    image: "/shop/shop.png",
    title: "Noxx Chicken Patty",
    description: "Quick, satisfying, and consistent",
    price: "£4.99",
  },
  {
    id: 3,
    image: "/shop/shop.png",
    title: "Ackee & Saltfish Patty",
    description: "Distinctive, bold, and culturally rooted",
    price: "£5.49",
  },
  {
    id: 4,
    image: "/shop/shop.png",
    title: "Mini Patty Bites",
    description: "Share or snack at desk or on the go",
    price: "£5.99",
  },
];

export default function ShopByOccasion() {
  return (
    <section className="w-full border-t border-[#EAE4D9] bg-[#FFB936] py-14 lg:py-[64px]">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-[92px]">
        {/* Heading */}
        <h2 className="text-center font-[Poppins] text-3xl font-semibold leading-tight text-[#1A0E04] lg:leading-[53px]">
          SHOP BY OCCASION.
        </h2>

        {/* Occasion Filters */}
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          {occasions.map((occasion) => (
            <button
              key={occasion.label}
              className={`flex h-10 items-center justify-center rounded-full border px-[23px] font-[Poppins] text-xs font-bold transition ${
                occasion.active
                  ? "border-[#D92127] bg-[#D92127] text-white"
                  : "border-[#EAE4D9] bg-white text-[#44403C] hover:border-[#D92127] hover:text-[#D92127]"
              }`}
            >
              {occasion.label}
            </button>
          ))}
        </div>

        {/* Product Cards */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
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
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-[17px]">
                {/* Title */}
                <h3 className="font-[Poppins] text-base font-bold text-[#1A0E04]">
                  {product.title}
                </h3>

                {/* Description */}
                <p className="mt-[6px] font-[Poppins] text-xs font-normal leading-4 text-[#8C8070]">
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
