export default function PartnerPortalCTA() {
  return (
    <section className="w-full bg-[#E8920A] py-14 lg:py-[60px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col justify-between gap-8 px-6 sm:px-8 lg:flex-row lg:items-center lg:px-[92px]">
        {/* Left Content */}
        <div className="max-w-[453px]">
          {/* Heading */}
          <h2 className=" w-514 font-['Poppins'] text-3xl font-semibold leading-[48px] text-white">
            Already a partner? Sign in directly
          </h2>

          {/* Description */}
          <p className="mt-[10px] font-['Poppins'] text-base font-normal leading-6 text-white/80">
            Ordering, intelligence, and performance converge in real time. Your
            system is waiting.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex w-full flex-col gap-[21px] lg:w-[256px] lg:shrink-0">
          <a
            href="#"
            className="flex h-14 items-center justify-center whitespace-nowrap rounded-full bg-white px-6 font-['Poppins'] text-sm font-bold text-[#E8920A] transition hover:bg-[#1A0E04] hover:text-white"
          >
            Partner Sign In →
          </a>

          <a
            href="#partner-access"
            className="flex h-14 items-center justify-center whitespace-nowrap rounded-full border-2 border-white/50 px-6 font-['Poppins'] text-sm font-semibold text-white transition hover:border-white hover:bg-white hover:text-[#E8920A]"
          >
            Request Access
          </a>
        </div>
      </div>
    </section>
  );
}
