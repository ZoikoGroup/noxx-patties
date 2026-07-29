import Image from "next/image";

export default function MenuReorder() {
  return (
    <section className="w-full border-b border-t border-[#EAE4D9] bg-[#E8920A] py-8 lg:py-[39px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col justify-between gap-6 px-6 sm:px-8 lg:flex-row lg:items-center lg:px-[92px]">
        {/* Left Content */}
        <div className="flex items-center gap-[18px]">
          {/* Icon */}
          <Image
            src="/menu/reorder.png"
            alt="Order again"
            width={40}
            height={56}
            className="h-[56px] w-10 shrink-0 object-contain"
          />

          <div>
            {/* Heading */}
            <h2 className="font-[Poppins] text-2xl font-semibold text-[#1A0E04]">
              ORDER AGAIN ONE TAP
            </h2>

            {/* Description */}
            <p className="mt-[6px] font-[Poppins] text-sm font-normal text-white/80">
              Your last order or saved combination is always ready to go.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex shrink-0 flex-col gap-4 sm:flex-row">
          <button className="flex h-11 items-center justify-center whitespace-nowrap rounded-full bg-[#1A0E04] px-6 font-[Poppins] text-xs font-bold text-white transition hover:opacity-90">
            🛒 Reorder Last Order
          </button>

          <button className="flex h-11 items-center justify-center whitespace-nowrap rounded-full border border-[#EAE4D9] px-6 font-[Poppins] text-xs font-semibold text-[#1A0E04] transition hover:bg-white">
            💾 My Saved Orders
          </button>
        </div>
      </div>
    </section>
  );
}
