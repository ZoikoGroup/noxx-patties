import type { ReactNode } from "react";

type Panel = {
  chip: string;
  chipBg: string;
  chipColor: string;
  title: string;
  paragraphs: ReactNode[];
};

const panels: Panel[] = [
  {
    chip: "The Problem",
    chipBg: "#F5F1EA",
    chipColor: "#8C8070",
    title: "Most retailers carry dead weight.",
    paragraphs: [
      "Slow-moving products, diluted differentiation, and inconsistent repeat purchase. Shelf space is lost to products that never justify their position.",
      "Traditional buying is driven by habit, legacy patterns, and supplier pressure — not by what consumers are actually choosing.",
      <>
        This is not a supply problem. It is a{" "}
        <span className="font-bold">decision problem</span>. And the cost
        compounds every week.
      </>,
    ],
  },
  {
    chip: "Our Approach",
    chipBg: "#FEF3DC",
    chipColor: "#9A5E00",
    title: "A demand-driven, performance-led system.",
    paragraphs: [
      "Noxx Patties transforms retail from static category management into a live intelligence system. Every SKU is expected to perform — and replaced if it doesn't.",
      "Through our AI-powered demand intelligence layer, retailers gain clear, actionable visibility into what is moving, what is stalling, and when to act.",
      <>
        This is not advisory. It is{" "}
        <span className="font-bold">
          operational guidance backed by live data
        </span>
        .
      </>,
    ],
  },
];

export default function RetailProblemApproach() {
  return (
    <section className="w-full border-t border-[#EAE4D9] bg-[#D92127] py-16 lg:py-20">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-16 px-6 sm:px-8 lg:grid-cols-2 lg:px-[92px]">
        {panels.map((panel) => (
          <div
            key={panel.chip}
            className="rounded-[20px] border border-l-4 border-[#EAE4D9] bg-white px-10 pb-10 pt-[41px] shadow-[0px_2px_8px_rgba(26,14,4,0.06)]"
          >
            {/* Chip */}
            <span
              className="inline-block rounded-full px-[10px] py-[3px] font-[Poppins] text-[10px] font-bold uppercase tracking-wide"
              style={{ backgroundColor: panel.chipBg, color: panel.chipColor }}
            >
              {panel.chip}
            </span>

            {/* Title */}
            <h2 className="mt-[17px] font-[Poppins] text-xl font-extrabold text-[#1A0E04]">
              {panel.title}
            </h2>

            {/* Paragraphs */}
            <div className="mt-[14px] flex flex-col gap-[10px]">
              {panel.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="font-[Poppins] text-sm font-normal leading-6 text-[#4A3F32]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
