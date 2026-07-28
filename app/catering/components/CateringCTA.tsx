"use client";

export default function CateringCTA() {
  return (
    <section className="w-full bg-[#FDB735] py-[49px]">
      <div className="mx-auto flex max-w-[1440px] items-start justify-between px-[92px]">

        {/* Left Content */}
        <div className="max-w-[678px]">
          <h2 className="font-['Poppins'] text-[36px] font-semibold leading-[53.2px] text-[#373737]">
            READY TO FEED YOUR CROWD?
          </h2>

          <p className="mt-2 font-['Poppins'] text-[16px] font-normal leading-7 text-[#373737]/95">
            Your optimized order is already waiting. Start with our AI <br/>
            recommendation or build your own — either way, fulfillment is
            guaranteed.
          </p>
        </div>

        {/* Right Buttons */}
        <div className="flex flex-col gap-4">

          <button className="h-14 w-[384px] rounded-full bg-[#272727] font-['Poppins'] text-[16px] font-bold text-[#FDB735] transition-all duration-300 hover:bg-black">
            🍔 Start My Order
          </button>

          <button className="h-14 w-[384px] rounded-full border-2 border-[#353535] bg-transparent font-['Poppins'] text-[16px] font-semibold text-[#373737] transition-all duration-300 hover:bg-[#353535] hover:text-white">
            Talk to Sales →
          </button>

        </div>

      </div>
    </section>
  );
}