"use client";

const announcements = [
  "NOXX CLASSIC PATTY",
  "PLANT-BASED RANGE NOW LIVE",
  "30% OFF STACKING DAY",
  "NOW SUPPLYING UK RETAILERS",
  "HALAL CERTIFIED | FDA APPROVED",
  "WHOLESALE ORDERS OPEN",
];

export default function AnnouncementBar() {
  return (
    <section className="w-full overflow-hidden bg-[#3C893F]">
      <div className="mx-auto flex h-11 max-w-[1440px] items-center justify-center overflow-hidden px-4">
        <div className="flex items-center gap-6 whitespace-nowrap">
          {announcements.map((item, index) => (
            <div key={index} className="flex items-center gap-6">
              <span className="font-['Barlow_Condensed'] text-base font-normal uppercase tracking-wider text-white">
                {item}
              </span>

              {index !== announcements.length - 1 && (
                <span className="font-['Bebas_Neue'] text-base text-white/20">
                  ◆
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}