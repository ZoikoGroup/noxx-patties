const products = [
  {
    name: "Noxx Classic Patty",
    description: "Flame-grilled beef, spice rub, brioche bun",
    price: "$9.99",
    tag: { label: "🔥 #1", className: "bg-[#E8920A]" },
  },
  {
    name: "Crispy Chicken Noxx",
    description: "Double-dipped batter, chilli honey glaze",
    price: "$8.99",
    tag: { label: "HOT", className: "bg-[#D92127]" },
  },
  {
    name: "Plant Stacker",
    description: "100% plant-based, avocado, pickled slaw",
    price: "$10.49",
    tag: { label: "NEW", className: "bg-[#3C893F]" },
  },
  {
    name: "Global Fusion Wrap",
    description: "Wheat tortilla, spiced filling, 4 regional flavors",
    price: "$7.49",
    tag: null,
  },
];

export default function ProductRecommendations() {
  return (
    <section className="w-full border-b border-[#EAE4D9] bg-[#FDFAF6] pb-20 pt-6">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-[75px]">
        <h2 className="text-center font-['Poppins'] text-4xl font-semibold uppercase tracking-wide text-[#1A0E04] lg:text-5xl">
          Curated For Your Taste
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.name}
              className="overflow-hidden rounded-[20px] border border-[#EAE4D9] bg-white"
            >
              <div className="relative h-40 w-full bg-[#8B8B8B]">
                {product.tag && (
                  <span
                    className={`absolute left-2.5 top-2.5 rounded-[50px] px-2.5 py-1 font-['Poppins'] text-[10px] font-bold text-white ${product.tag.className}`}
                  >
                    {product.tag.label}
                  </span>
                )}
              </div>

              <div className="px-4 pb-5 pt-4">
                <h3 className="font-['Poppins'] text-base font-bold text-[#1A0E04]">
                  {product.name}
                </h3>
                <p className="mt-1 font-['Poppins'] text-xs leading-4 text-[#8C8070]">
                  {product.description}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="font-['Poppins'] text-xl font-semibold text-[#1A0E04]">
                    {product.price}
                  </span>
                  <button className="h-8 rounded-[50px] bg-[#212121] px-5 font-['Poppins'] text-xs font-bold text-white">
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
