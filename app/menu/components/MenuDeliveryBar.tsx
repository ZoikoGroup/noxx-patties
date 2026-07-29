export default function MenuDeliveryBar() {
  return (
    <section className="w-full border-b border-t border-[#FEE1A3] bg-[#D92127] py-5 lg:py-[17px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-4 px-6 sm:px-8 lg:flex-row lg:items-center lg:gap-6 lg:px-[92px]">
        {/* Delivery / Collection Toggle */}
        <div className="flex h-9 w-full shrink-0 overflow-hidden rounded-full border border-[#FEE1A3] bg-white sm:w-[240px]">
          <button className="flex flex-1 items-center justify-center bg-[#E8920A] font-[Poppins] text-xs font-bold text-white">
            Delivery
          </button>

          <button className="flex flex-1 items-center justify-center font-[Poppins] text-xs font-bold text-[#4A3F32]">
            Collection
          </button>
        </div>

        {/* Postcode Input */}
        <input
          type="text"
          placeholder="Enter your postcode or address…"
          className="h-11 w-full rounded-full border border-[#FEE1A3] bg-white px-[21px] font-[Poppins] text-xs font-normal text-[#1A0E04] outline-none placeholder:text-[#757575] lg:flex-1"
        />

        {/* Status */}
        <div className="flex shrink-0 flex-wrap items-center gap-4">
          <span className="flex h-9 items-center whitespace-nowrap rounded-full bg-[#E8F5EE] px-4 font-[Poppins] text-xs font-semibold text-[#1A5C3A]">
            ✓ Delivering to your area
          </span>

          <span className="whitespace-nowrap font-[Poppins] text-xs font-normal text-[#8C8070]">
            Est. 25–35 min
          </span>
        </div>
      </div>
    </section>
  );
}
