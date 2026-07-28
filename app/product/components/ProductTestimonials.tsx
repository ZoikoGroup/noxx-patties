const testimonials = [
  {
    tag: "Consumer",
    review:
      "\"The flavor is unlike anything else on the market — it actually tastes like a proper Jamaican patty, not a pale imitation. I've ordered six times now and it's always consistent.\"",
    name: "Marcus T.",
    role: "Verified · London, UK",
  },
  {
    tag: "Office Catering",
    review:
      "\"We've been ordering for our team lunches every Friday for 3 months. Delivery is always on time, the patties arrive well-packaged, and the team absolutely loves them.\"",
    name: "Priya S.",
    role: "Office Buyer · New York, NY",
  },
  {
    tag: "Retail Partner",
    review:
      "\"We stocked these on a trial basis and sold out in the first week. The demand data Noxx provided was accurate — customers were already asking for it. Reordered three times since.\"",
    name: "David O.",
    role: "Retail Buyer · Birmingham, UK",
  },
];

export default function ProductTestimonials() {
  return (
    <section className="w-full bg-[#3C893F] py-16">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-[75px]">
        <h2 className="text-center font-['Poppins'] text-4xl font-semibold leading-tight lg:leading-[49px] text-white">
          WHAT THEY SAY
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-[20px] border border-[#EAE4D9] bg-white p-7 shadow-[0px_2px_8px_rgba(26,14,4,0.06)]"
            >
              <p className="font-['Poppins'] text-[10px] font-bold uppercase tracking-wide text-[#E8920A]">
                {item.tag}
              </p>
              <div className="mt-2 font-['Poppins'] text-xs tracking-widest text-[#E8920A]">
                ★★★★★
              </div>
              <p className="mt-4 font-['Poppins'] text-sm leading-6 text-[#1A0E04]">
                {item.review}
              </p>

              <div className="mt-6 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-[#8B8B8B]" />
                <div>
                  <p className="font-['Poppins'] text-xs font-bold text-[#1A0E04]">
                    {item.name}
                  </p>
                  <p className="font-['Poppins'] text-xs text-[#8C8070]">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
