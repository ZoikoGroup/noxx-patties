import Image from "next/image";

const formats = [
  {
    id: 1,
    image: "/franchise/format-1.png",
    label: "FORMAT 1",
    title: "Express Kiosk",
    description: (
      <>
        High-footfall, low overhead. Ideal for
        <br />
        transport hubs, malls, and high-
        <br />
        street positions with strong
        <br />
        pedestrian throughput.
      </>
    ),
    features: [
      "Delivery and pickup focus",
      "Lower capital entry",
      "Fastest payback potential",
    ],
    badge: false,
  },
  {
    id: 2,
    image: "/franchise/format-2.png",
    label: "FORMAT 2",
    title: "Standard Store",
    description: (
      <>
        Full dine-in and delivery capability.
        <br />
        The core franchise format with
        <br />
        proven economics across multiple
        <br />
        operating contexts.
      </>
    ),
    features: [
      "Dine-in + delivery + takeaway",
      "Balanced capital requirement",
      "Full catering capability",
    ],
    badge: true,
  },
  {
    id: 3,
    image: "/franchise/format-3.png",
    label: "FORMAT 3",
    title: "Flagship Store",
    description: (
      <>
        Premium brand-building locations in
        <br />
        Tier 1 cities. Designed for maximum
        <br />
        brand visibility and multi-channel
        <br />
        revenue generation.
      </>
    ),
    features: [
      "Premium high-street positioning",
      "Full brand experience format",
      "B2B and institutional supply hub",
    ],
    badge: false,
  },
  {
    id: 4,
    image: "/franchise/format-4.png",
    label: "FORMAT 4",
    title: "Delivery Hub",
    description: (
      <>
        Dark kitchen / delivery-first format.
        <br />
        Optimized for aggregator platform
        <br />
        volume and catering supply. No
        <br />
        dine-in overhead.
      </>
    ),
    features: [
      "Aggregator platform optimized",
      "Low overhead model",
      "Catering and bulk supply eligible",
    ],
    badge: false,
  },
];

export default function FranchiseFormats() {
  return (
    <section className="flex w-full justify-center border-t border-[#EAE4D9] bg-[#FFF5E8]">
      <div className="relative h-[694px] w-[1440px] max-w-full">
        {/* Heading */}
        <h2 className="absolute top-[64px] w-full text-center font-[Poppins] text-[24px] lg:text-[36px] font-semibold leading-tight lg:leading-[57px] text-[#1A0E04]">
          CHOOSE YOUR FORMAT
        </h2>

        {/* Description */}
        <p className=" mt-4 absolute left-1/2 top-[114px] w-[1097px] max-w-full -translate-x-1/2 text-center font-[Poppins] text-base leading-7 text-[#8C8070]">
          The platform supports multiple operating formats. Each exists for a
          different capital profile, market context, and demand pattern. The
          system recommends the most appropriate match based on your investment
          capacity, experience, and location.
        </p>

        {/* Cards */}
        <div className=" mt-4 absolute left-1/2 top-[216px] flex -translate-x-1/2 gap-[20px]">
          {formats.map((format) => (
            <div
              key={format.id}
              className="relative min-h-[410px] w-69 overflow-hidden rounded-[20px] border border-[#EAE4D9] bg-white shadow-[0px_2px_8px_rgba(26,14,4,0.06)]"
            >
              {/* Badge */}
              {format.badge && (
                <div className="absolute right-4 top-[13px] flex h-5 w-24 items-center justify-center rounded-full bg-[#E8920A]">
                  <span className="font-[Poppins] text-[10px] font-bold text-white">
                    MOST COMMON
                  </span>
                </div>
              )}

              {/* Image */}
              <Image
                src={format.image}
                alt={format.title}
                width={36}
                height={57}
                className="absolute left-[29px] top-[31px] object-contain"
              />

              {/* Format */}
              <p className="absolute left-[29px] top-[100px] font-[Poppins] text-xs font-bold uppercase tracking-wide text-[#E8920A]">
                {format.label}
              </p>

              {/* Title */}
              <h3 className="absolute left-[29px] top-[126px] font-[Poppins] text-base font-bold text-[#1A0E04]">
                {format.title}
              </h3>

              {/* Description */}
              <div className="absolute left-[29px] top-[159px] font-[Poppins] text-xs leading-5 text-[#8C8070]">
                {format.description}
              </div>
                            {/* Features */}
              <div className="absolute left-[29px] top-[253px] space-y-2">
                {format.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#E8920A]">•</span>

                    <span className="font-[Poppins] text-xs text-[#4A3F32]">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Price */}
              <p className="absolute left-[29px] top-[335px] font-[Bebas_Neue] text-[24px] lg:text-[32px] text-[#E8920A] leading-8">
                From £/$ TBC
              </p>

              {/* Investment */}
              <p className="absolute left-[29px] top-[372px] w-[230px] max-w-full font-[Poppins] text-[10.5px] text-[#8C8070]">
                Investment range (conservative estimate)
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}