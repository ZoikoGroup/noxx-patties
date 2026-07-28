"use client";

import Image from "next/image";

const products = [
  {
    id: 1,
    title: "Noxx Classic Patty",
    image: "/home/product1.png",
    price: "$30.52",
    oldPrice: "$28.52",
    discount: "-5%",
    featured: false,
  },
  {
    id: 2,
    title: "Noxx Classic Patty",
    image: "/home/product2.png",
    price: "$30.52",
    oldPrice: "$28.52",
    discount: "-5%",
    featured: true,
  },
  {
    id: 3,
    title: "Noxx Classic Patty",
    image: "/home/product1.png",
    price: "$30.52",
    oldPrice: "$28.52",
    discount: "-5%",
    featured: false,
  },
  {
    id: 4,
    title: "Noxx Classic Patty",
    image: "/home/product1.png",
    price: "$30.52",
    oldPrice: "$28.52",
    discount: "-5%",
    featured: false,
  },
  {
    id: 5,
    title: "Noxx Classic Patty",
    image: "/home/product1.png",
    price: "$30.52",
    oldPrice: "$28.52",
    discount: "-5%",
    featured: false,
  },
  {
    id: 6,
    title: "Noxx Classic Patty",
    image: "/home/product1.png",
    price: "$30.52",
    oldPrice: "$28.52",
    discount: "-5%",
    featured: false,
  },
  {
    id: 7,
    title: "Noxx Classic Patty",
    image: "/home/product1.png",
    price: "$30.52",
    oldPrice: "$28.52",
    discount: "-5%",
    featured: false,
  },
  {
    id: 8,
    title: "Noxx Classic Patty",
    image: "/home/product1.png",
    price: "$30.52",
    oldPrice: "$28.52",
    discount: "-5%",
    featured: false,
  },
];

export default function PopularProducts() {
  return (
    <section className="w-full bg-[#FDFAF6] py-20">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-[75px]">

        {/* Heading */}
        <h2 className="text-center font-['Poppins'] text-[26px] lg:text-[39px] font-semibold uppercase tracking-wider leading-tight lg:leading-[77px] text-[#212121]">
          Popular Food Items
        </h2>

        {/* Products */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {products.map((product) => (
            <div
              key={product.id}
              className={`overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                product.featured ? "bg-[#FFB936]" : "bg-white"
              }`}
            >

              {/* Product Image */}
              <div className="relative h-64 w-full overflow-hidden">

                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />

                {/* Wishlist Icon */}
                <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded bg-white shadow-md">
                  <Image
  src={
    product.featured
      ? "/home/heart-yellow.png"
      : "/home/heart.png"
  }
  alt="Wishlist"
  width={38}    
  height={38}
/>
                </div>

              </div>

              {/* Content */}
              <div className="px-6 pt-6">
                                {/* Add To Cart Button */}
                <button
                  className="mx-auto flex h-9 w-full max-w-[240px] items-center justify-center gap-2 rounded-[19px] bg-[#212121] text-white transition-all duration-300"
                >
                  <Image
                    src="/home/cart.png"
                    alt="Cart"
                    width={18}
                    height={18}
                  />

                  <span className="font-['Poppins'] text-base font-semibold capitalize leading-4">
                    Add To Cart
                  </span>
                </button>

                {/* Price Row */}
                <div className="mt-5 flex items-center justify-center gap-3">

                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded ${
                      product.featured
                        ? "bg-[#212121]"
                        : "bg-[#FFB936]"
                    }`}
                  >
                    <span
                      className={`font-['Barlow_Condensed'] text-base font-semibold ${
                        product.featured
                          ? "text-white"
                          : "text-[#5C5C5B]"
                      }`}
                    >
                      {product.discount}
                    </span>
                  </div>

                  <span className="font-['Poppins'] text-base font-bold uppercase text-[#D12525]">
                    {product.price}
                  </span>

                  <span
                    className={`font-['Poppins'] text-base font-semibold ${
                      product.featured
                        ? "text-white"
                        : "text-[#5C5C5B]"
                    }`}
                  >
                    {product.oldPrice}
                  </span>

                </div>

                {/* Product Title */}
                <h3 className="mt-5 text-center font-['Poppins'] text-[19px] font-semibold uppercase text-[#1A0E04]">
                  {product.title}
                </h3>

                {/* Rating */}
                {product.id !== 5 && (
  <div className="mt-4 mb-6 flex justify-center gap-1">
    {[1, 2, 3, 4, 5].map((star) => (
      <Image
        key={star}
        src={
          product.featured
            ? "/home/star-white.png"
            : "/home/star-yellow.png"
        }
        alt="Star"
        width={16}
        height={16}
      />
    ))}
  </div>
)}

              </div>

            </div>
          ))}
                  </div>

        {/* View Full Menu Button */}
        <div className="mt-14 flex justify-center md:mt-16 lg:mt-20">
          <button className="rounded-full bg-[#E8920A] px-15 py-2 font-['Poppins'] text-lg font-semibold text-white shadow-[0px_4px_12px_rgba(232,146,10,0.30)] transition-all duration-300 hover:scale-105 hover:bg-[#d98509]">
            View Full Menu
          </button>
        </div>

      </div>
    </section>
  );
}