import Image from "next/image";

export default function HelpRoutingNotice() {
  return (
    <div className="flex gap-[20px] rounded-[20px] border border-l-4 border-[#E8920A] bg-[#FEF3DC] px-8 py-[25px]">
      {/* Icon */}
      <Image
        src="/help/routing-notice.png"
        alt="Routing notice"
        width={22}
        height={22}
        className="mt-[7px] h-6 w-6 shrink-0 object-contain"
      />

      <div>
        {/* Title */}
        <h2 className="font-[Poppins] text-base font-bold text-[#1A0E04]">
          Routing Notice
        </h2>

        {/* Description */}
        <p className="mt-[8px] font-[Poppins] text-sm font-normal leading-6 text-[#4A3F32]">
          Submitting requests through the correct channel ensures faster
          processing, improved accuracy, and appropriate commercial handling. All
          enquiries are managed according to operational priority, request type,
          and account classification where applicable.
        </p>
      </div>
    </div>
  );
}
