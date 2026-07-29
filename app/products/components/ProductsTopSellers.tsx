import Image from "next/image";

const topSellers = [
  {
    rank: 1,
    icon: "/products/noxx-plassic-patty.png",
    name: "Noxx Classic Patty",
    price: "$9.99",
  },
  {
    rank: 2,
    icon: "/products/noxx-chill.png",
    name: "Scotch Bonnet Stack",
    price: "$12.99",
  },
  {
    rank: 3,
    icon: "/products/Crispy-Chicken-Noxx.png",
    name: "Crispy Chicken Noxx",
    price: "$8.99",
  },
  {
    rank: 4,
    icon: "/products/Plant-Stacker.png",
    name: "Plant Stacker",
    price: "$10.49",
  },
];

export default function ProductsTopSellers() {
  return (
    <section className="w-full border-t border-[#EAE4D9] bg-[#FFB936] py-14">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-[75px]">
        <h2 className="text-center font-['Bebas_Neue'] text-5xl leading-tight lg:leading-[49px] text-[#1A0E04]">
          THIS WEEK&apos;S TOP SELLERS.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {topSellers.map((item) => (
            <div
              key={item.rank}
              className="flex flex-col items-center rounded-[20px] border border-[#EAE4D9] bg-white px-6 py-6 shadow-[5px_5px_0px_rgba(26,14,4,1)]"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E8920A] font-['Bebas_Neue'] text-sm text-white/80">
                {item.rank}
              </span>

              <Image
                src={item.icon}
                alt={item.name}
                width={48}
                height={48}
                className="mt-6 h-12 w-12 object-contain"
              />

              <h3 className="mt-6 text-center font-['Poppins'] text-sm font-bold text-[#1A0E04]">
                {item.name}
              </h3>

              <p className="mt-2 font-['Bebas_Neue'] text-xl text-[#E8920A]">
                {item.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
