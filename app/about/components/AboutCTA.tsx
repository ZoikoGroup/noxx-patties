"use client";

export default function AboutCTA() {
  return (
    <section className="w-full bg-[#FDB735]">
      <div className="mx-auto flex h-[240px] max-w-[1440px] items-center justify-between px-[92px]">

        {/* Left Content */}
        <div className="max-w-[677px]">
          <h2 className="font-['Poppins'] text-[36px] font-semibold leading-[53.2px] text-[#373737]">
            JOIN THE SYSTEM.
          </h2>

          <p className="mt-3 font-['Poppins'] text-[16px] font-normal leading-7 text-black/80">
            Built for consumers seeking depth, retailers seeking performance,
            distributors seeking scalable opportunities, and franchisees
            seeking operating structure.
          </p>
        </div>

        {/* Right Buttons */}
        <div className="flex flex-col gap-6">

          <button className="h-[56px] w-[384px] rounded-full bg-black font-['Poppins'] text-[18px] font-bold text-[#FDB735] transition-all duration-300 hover:scale-[1.02]">
            Order Now
          </button>

          <button className="h-[56px] w-[384px] rounded-full border-2 border-[#373737]/50 bg-transparent font-['Poppins'] text-[18px] font-semibold text-[#373737] transition-all duration-300 hover:bg-black/5">
            Become a Partner →
          </button>

        </div>

      </div>
    </section>
  );
}