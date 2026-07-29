import Image from "next/image";

const addOns = [
  {
    id: 1,
    icon: "/menu/addon-fries.png",
    name: "Seasoned Fries",
    price: "£2.49",
  },
  {
    id: 2,
    icon: "/menu/addon-plantain.png",
    name: "Fried Plantain",
    price: "£2.99",
  },
  {
    id: 3,
    icon: "/menu/addon-dip.png",
    name: "Scotch Bonnet Dip",
    price: "£0.79",
  },
  {
    id: 4,
    icon: "/menu/addon-drink.png",
    name: "Soft Drink",
    price: "£1.99",
  },
  {
    id: 5,
    icon: "/menu/addon-dessert.png",
    name: "Coconut Cream Patty",
    price: "£3.49",
  },
];

export default function MenuAddOns() {
  return (
    <section className="w-full border-t border-[#FEE1A3] bg-[#FEF3DC] py-14 lg:py-[74px]">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-[92px]">
        {/* Heading */}
        <h2 className="text-center font-[Poppins] text-3xl font-semibold leading-tight text-[#1A0E04] lg:text-4xl lg:leading-[49px]">
          MAKE IT YOURS
        </h2>

        {/* Description */}
        <p className="mt-3 text-center font-[Poppins] text-sm font-normal text-[#8C8070]">
          Extras that work with what you&apos;ve chosen. No repeat asks.
        </p>

        {/* Cards */}
        <div className="mt-[26px] grid grid-cols-1 gap-[14px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {addOns.map((addOn) => (
            <div
              key={addOn.id}
              className="flex flex-col items-center rounded-[20px] border border-[#FEE1A3] bg-white px-[17px] pb-[17px] pt-[19px]"
            >
              {/* Icon */}
              <Image
                src={addOn.icon}
                alt={addOn.name}
                width={36}
                height={51}
                className="h-[51px] w-9 object-contain"
              />

              {/* Name */}
              <h3 className="mt-[16px] text-center font-[Poppins] text-xs font-bold text-[#1A0E04]">
                {addOn.name}
              </h3>

              {/* Price */}
              <span className="mt-[4px] font-[Bebas_Neue] text-xl text-[#E8920A]">
                {addOn.price}
              </span>

              {/* Button */}
              <button className="mt-[16px] flex h-8 w-full items-center justify-center rounded-lg bg-[#1A0E04] font-[Poppins] text-xs font-bold text-white transition hover:bg-[#D92127]">
                + Add
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
