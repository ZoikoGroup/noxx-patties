import Link from "next/link";

export default function LocationsRetail() {
  return (
    <section className="w-full border-t border-[#EAE4D9] bg-[#E8920A] py-12 lg:py-[55px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col justify-between gap-8 px-6 sm:px-8 lg:flex-row lg:items-center lg:px-[92px]">
        {/* Left Content */}
        <div className="max-w-[542px]">
          {/* Heading */}
          <h2 className="font-[Poppins] text-3xl font-semibold text-white lg:text-4xl">
            LOOKING FOR NOXX IN RETAIL?
          </h2>

          {/* Description */}
          <p className="mt-3 font-[Poppins] text-base font-normal leading-6 text-white">
            Noxx Patties will be available in supermarkets and convenience
            retail. Check for stockists near you or register your interest for
            when we launch in your area.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex w-full flex-col gap-[15px] sm:w-[320px]">
          <Link
            href="/retail"
            className="flex h-12 items-center justify-center rounded-full bg-white px-8 font-[Poppins] text-sm font-semibold text-[#E8920A] transition hover:bg-[#1A0E04] hover:text-white"
          >
            Find Stockists
          </Link>

          <Link
            href="/retail"
            className="flex h-12 items-center justify-center rounded-full border border-white px-8 font-[Poppins] text-sm font-semibold text-white transition hover:bg-white hover:text-[#E8920A]"
          >
            Check Availability
          </Link>
        </div>
      </div>
    </section>
  );
}
