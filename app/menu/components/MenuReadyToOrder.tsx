export default function MenuReadyToOrder() {
  return (
    <section className="w-full bg-[#E8920A] py-14">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-5 lg:flex-row lg:items-center lg:justify-between lg:px-[75px]">
        <div>
          <h2 className="font-['Poppins'] text-4xl font-medium leading-tight lg:leading-[53px] text-white lg:text-5xl">
            READY TO ORDER?
          </h2>
          <p className="mt-3 font-['Poppins'] text-base text-white/80">
            Your recommended box is already built. Add to cart and
            <br className="hidden lg:block" /> check out in under 10 seconds.
          </p>
        </div>

        <div className="flex w-full flex-col gap-5 lg:w-96">
          <button className="h-14 w-full rounded-[50px] bg-white font-['Poppins'] text-base font-bold text-[#E8920A] transition hover:bg-white/90">
            🍔 Add Recommended Box
          </button>

          <button className="h-14 w-full rounded-[50px] border-2 border-white/50 font-['Poppins'] text-base font-semibold text-white transition hover:bg-white/10">
            For Business →
          </button>
        </div>
      </div>
    </section>
  );
}
