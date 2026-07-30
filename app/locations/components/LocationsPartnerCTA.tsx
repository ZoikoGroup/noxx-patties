import Link from "next/link";

export default function LocationsPartnerCTA() {
  return (
    <section className="w-full border-t border-[#EAE4D9] bg-[#E8920A] py-10 lg:py-[45px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col justify-between gap-6 px-6 sm:px-8 lg:flex-row lg:items-center lg:px-[92px]">
        {/* Left Content */}
        <p className="max-w-[715px] font-[Poppins] text-base">
          <span className="font-bold text-[#1A0E04]">
            Interested in bringing Noxx to your city?
          </span>
          <br />
          <span className="font-normal text-white">
            Franchise, wholesale, and distribution partnerships available.
          </span>
        </p>

        {/* Button */}
        <Link
          href="/franchise"
          className="flex h-10 w-fit shrink-0 items-center justify-center rounded-full border border-white px-6 font-[Poppins] text-xs font-bold text-white transition hover:bg-white hover:text-[#E8920A]"
        >
          Become a Partner →
        </Link>
      </div>
    </section>
  );
}
