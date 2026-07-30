export default function FranchiseCTA() {
  return (
    <section className="w-full bg-[#FDB735] py-[52px]">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-10 px-6 sm:px-8 lg:flex-row lg:px-[92px]">
        {/* Left Content */}
        <div className="max-w-[753px]">
          <h2 className="font-[Poppins] text-3xl font-semibold leading-tight lg:leading-[53.2px] text-[#212121]">
            STRUCTURED TO SCALE. STRUCTURED TO PROTECT.
          </h2>

          <p className="mt-2 font-[Poppins] text-base font-normal text-black/95">
            This network is designed to scale — but equally designed to protect
            itself. Serious operators and institutional investors deserve a
            platform built on discipline, not enthusiasm.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex w-full flex-col gap-4 sm:w-auto">
          <a
            href="#qualification"
            className="flex h-14 items-center justify-center rounded-full bg-[#212121] px-8 font-[Poppins] text-base font-bold text-white transition duration-300 hover:bg-[#101010]"
          >
            Check Qualification →
          </a>

          <button className="flex h-14 items-center justify-center rounded-full border-2 border-[#212121]/80 px-8 font-[Poppins] text-base font-semibold text-[#212121] transition duration-300 hover:bg-[#212121] hover:text-white">
            Download Franchise Pack
          </button>
        </div>
      </div>
    </section>
  );
}