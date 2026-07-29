import Image from "next/image";

const combos = [
  {
    id: 1,
    icon: "/menu/combo-chicken.png",
    name: "Chicken Combo",
    contents: "Noxx Chicken Patty + Fries + Drink",
    price: "£8.99",
    active: true,
  },
  {
    id: 2,
    icon: "/menu/combo-beef.png",
    name: "Beef Combo",
    contents: "Signature Beef Patty + Fries + Drink",
    price: "£9.49",
    active: false,
  },
  {
    id: 3,
    icon: "/menu/combo-mini.png",
    name: "Mini Combo",
    contents: "Mini Patty Bites + Dip + Drink",
    price: "£7.49",
    active: false,
  },
  {
    id: 4,
    icon: "/menu/combo-family.png",
    name: "Family Box",
    contents: "6 Patties + Sides + 4 Drinks",
    price: "£24.99",
    active: false,
  },
];

const comboItems = [
  { label: "🍗 Noxx Chicken Patty", included: true },
  { label: "🍟 Seasoned Fries (Regular)", included: true },
  { label: "🥤 Drink (Regular)", included: true },
  { label: "+ Add a dip (£0.79)", included: false },
];

export default function MenuMealBuilder() {
  return (
    <section className="w-full bg-[#1A0E04] py-14 lg:py-[47px]">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-[92px]">
        {/* Heading */}
        <h2 className="text-center font-[Poppins] text-3xl font-semibold leading-tight text-white lg:text-4xl lg:leading-[49px]">
          YOUR MEAL IS READY ADJUST IF NEEDED.
        </h2>

        {/* Description */}
        <p className="mx-auto mt-3 max-w-[440px] text-center font-[Poppins] text-base font-normal leading-6 text-white">
          Every primary item opens pre-configured as a meal. Tap to select a
          combo — the system does the work.
        </p>

        <div className="mt-[35px] flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-16">
          {/* Combo List */}
          <div className="flex w-full flex-col gap-[15px] lg:max-w-[596px] lg:flex-1">
            {combos.map((combo) => (
              <div
                key={combo.id}
                className={`flex h-24 items-center gap-[18px] rounded-[20px] border px-[25px] ${
                  combo.active
                    ? "border-[#E8920A]/30 bg-[#E8920A]/10"
                    : "border-white/10 bg-white/5"
                }`}
              >
                {/* Icon */}
                <Image
                  src={combo.icon}
                  alt={combo.name}
                  width={36}
                  height={51}
                  className="h-[51px] w-9 shrink-0 object-contain"
                />

                <div className="min-w-0 flex-1">
                  {/* Name */}
                  <h3 className="font-[Poppins] text-base font-bold text-white">
                    {combo.name}
                  </h3>

                  {/* Contents */}
                  <p className="mt-[5px] font-[Poppins] text-xs font-normal text-white/40">
                    {combo.contents}
                  </p>
                </div>

                {/* Price */}
                <span className="shrink-0 font-[Bebas_Neue] text-3xl text-[#E8920A]">
                  {combo.price}
                </span>
              </div>
            ))}
          </div>

          {/* Selected Combo Panel */}
          <div className="w-full rounded-[20px] border border-white/10 bg-white/5 p-[33px] lg:max-w-[596px] lg:flex-1">
            {/* Title */}
            <h3 className="font-[Bebas_Neue] text-3xl text-white">
              Chicken Combo
            </h3>

            {/* Subtitle */}
            <p className="mt-[5px] font-[Poppins] text-xs font-normal text-white/30">
              Your meal is configured — edit only if needed.
            </p>

            {/* Items */}
            <div className="mt-[26px] flex flex-col gap-[9px]">
              {comboItems.map((item) => (
                <div
                  key={item.label}
                  className="flex h-12 items-center justify-between rounded-xl border border-[#E8920A]/20 bg-white/5 px-[15px]"
                >
                  <span
                    className={`font-[Poppins] text-sm font-semibold ${
                      item.included ? "text-white/80" : "text-white/30"
                    }`}
                  >
                    {item.label}
                  </span>

                  {item.included && (
                    <span className="rounded-sm bg-[#E8920A]/20 px-2 py-[2px] font-[Poppins] text-[10px] font-bold text-[#E8920A]">
                      Included
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="mt-[19px] flex items-center justify-between border-t border-white/10 pt-[15px]">
              <span className="font-[Poppins] text-sm font-normal text-white/50">
                Your meal total
              </span>

              <span className="font-[Bebas_Neue] text-4xl text-[#E8920A]">
                £8.99
              </span>
            </div>

            {/* Saving Note */}
            <p className="mt-[15px] font-[Poppins] text-xs font-normal text-white/30">
              Save £2.48 vs individual items · Free delivery over £20
            </p>

            {/* Buttons */}
            <button className="mt-[18px] flex h-12 w-full items-center justify-center rounded-xl bg-[#E8920A] font-[Poppins] text-base font-bold text-white shadow-[0px_4px_14px_rgba(232,146,10,0.40)] transition hover:opacity-90">
              Add Chicken Combo to Cart
            </button>

            <button className="mt-[19px] flex h-12 w-full items-center justify-center rounded-xl border border-white/10 font-[Poppins] text-xs font-semibold text-white/40 transition hover:border-white/30 hover:text-white">
              Customise this order
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
