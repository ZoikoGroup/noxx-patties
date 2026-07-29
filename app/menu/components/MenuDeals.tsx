import Image from "next/image";

const deals = [
  {
    id: 1,
    image: "/menu/make-sense.png",
    badge: "Popular",
    title: "Single Combo",
    contents: "1 Patty + Fries + Drink",
    price: "£8.99",
    saving: "Save £2.48",
  },
  {
    id: 2,
    image: "/menu/make-sense.png",
    badge: "",
    title: "Double Combo",
    contents: "2 Patties + Fries + 2 Drinks",
    price: "£15.99",
    saving: "Save £4.97",
  },
  {
    id: 3,
    image: "/menu/make-sense.png",
    badge: "",
    title: "Mini Combo",
    contents: "Mini Patty Bites + Dip + Drink",
    price: "£7.49",
    saving: "Save £1.99",
  },
  {
    id: 4,
    image: "/menu/make-sense.png",
    badge: "Evening Pick",
    title: "Family Box",
    contents: "6 Patties + Sides + 4 Drinks",
    price: "£24.99",
    saving: "Save £8.46",
  },
];

export default function MenuDeals() {
  return (
    <section className="w-full bg-[#FFFAF4] py-14 lg:py-[50px]">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-[92px]">
        {/* Heading */}
        <h2 className="text-center font-[Poppins] text-3xl font-semibold leading-tight text-[#1A0E04] lg:text-4xl lg:leading-[49px]">
          DEALS THAT MAKE SENSE
        </h2>

        {/* Cards */}
        <div className="mt-[57px] grid grid-cols-1 gap-[20px] sm:grid-cols-2 xl:grid-cols-4">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="flex flex-col overflow-hidden rounded-[20px] border border-[#EAE4D9] bg-white"
            >
              {/* Image */}
              <div className="relative h-36 w-full bg-[#A3A3A3]">
                <Image
                  src={deal.image}
                  alt={deal.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover"
                />

                {/* Badge */}
                {deal.badge && (
                  <span className="absolute right-[11px] top-[11px] rounded-sm bg-[#1A0E04] px-2 py-[3px] font-[Poppins] text-[10px] font-bold text-white">
                    {deal.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col px-[17px] pb-[14px] pt-[12px]">
                {/* Title */}
                <h3 className="font-[Poppins] text-sm font-bold text-[#1A0E04]">
                  {deal.title}
                </h3>

                {/* Contents */}
                <p className="mt-[3px] font-[Poppins] text-xs font-normal text-[#8C8070]">
                  {deal.contents}
                </p>

                {/* Price + Saving */}
                <div className="mt-auto flex items-center justify-between pt-[6px]">
                  <span className="font-[Bebas_Neue] text-xl text-[#1A0E04]">
                    {deal.price}
                  </span>

                  <span className="rounded-full bg-[#E8F5EE] px-[9px] py-[3px] font-[Poppins] text-xs font-bold text-[#1A5C3A]">
                    {deal.saving}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
