const tickerItems = [
  "NOXX CLASSIC BEST SELLER THIS WEEK",
  "PLANT STACKER NEW & TRENDING",
  "ORDER $50+ AND GET FREE DELIVERY",
  "HALAL CERTIFIED · VEGAN OPTIONS AVAILABLE",
  "BULK ORDERS — 22% OFF THIS WEEK",
];

export default function MenuTicker() {
  return (
    <section className="w-full overflow-hidden bg-[#D92127] py-2.5">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex items-center">
            {tickerItems.map((item, index) => (
              <div key={index} className="flex items-center">
                <span className="font-['Poppins'] text-sm font-semibold tracking-wider text-white">
                  {item}
                </span>
                <span className="mx-8 font-['Bebas_Neue'] text-base tracking-wider text-[#FCCE24]">
                  ◆
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
