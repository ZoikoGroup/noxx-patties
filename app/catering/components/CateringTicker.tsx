"use client";

const tickerItems = [
  "NEXT AVAILABLE SLOT: TOMORROW 12:30–13:00",
  "AI OPTIMIZED FOR MINIMUM WASTE",
  "HALAL CERTIFIED",
  "VEGAN LINES AVAILABLE",
  "OFFICE CATERING • EVENTS • RETAIL SUPPLY",
];

export default function CateringTicker() {
  return (
    <section className="w-full overflow-hidden bg-[#D92127] py-2">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex items-center">
            {tickerItems.map((item, index) => (
              <div key={index} className="flex items-center">
                <span className="font-['Poppins'] text-[16px] font-normal uppercase text-white">
                  {item}
                </span>

<span className="mx-4 text-[12px] text-[#FFFFFF33]">◆</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}