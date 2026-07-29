const principles = [
  {
    number: "01",
    title: "Work is tracked through impact, not activity",
    description:
      "What moved the platform forward. Not how many meetings were attended or how many tasks were completed.",
  },
  {
    number: "02",
    title: "Decisions are guided by data and system logic",
    description:
      "Instinct matters. But every significant decision is validated against real system data and defined commercial objectives.",
  },
  {
    number: "03",
    title: "Execution speed and consistency matter",
    description:
      "The platform moves. People who thrive here move with it — and contribute to the reliability that the system depends on.",
  },
];

export default function CareersHowWeWork() {
  return (
    <section className="w-full bg-[#D92127] py-14 lg:py-20">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-[92px]">
        {/* Eyebrow */}
        <span className="font-[Poppins] text-xs font-bold uppercase tracking-wider text-white">
          How We Work
        </span>

        {/* Heading */}
        <h2 className="mt-[8px] font-[Poppins] text-3xl font-semibold leading-10 text-white lg:text-4xl">
          Every function connected
          <br />
          to measurable outcomes.
        </h2>

        {/* Description */}
        <p className="mt-[19px] w-full max-w-[422.11px] font-[Poppins] text-base font-normal leading-6 text-white">
          Noxx Patties is a system-led organisation. Outcomes are tracked across
          demand, distribution, and product performance — not activity or tenure.
        </p>

        {/* Cards + Quote */}
        <div className="mt-8 flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
          {/* Principle Cards */}
          <div className="flex w-full min-w-0 flex-col gap-[13px] lg:w-[596px]">
            {principles.map((principle) => (
              <div
                key={principle.number}
                className="flex gap-[10px] rounded-[20px] border border-white/70 bg-white px-[25px] py-[24px]"
              >
                {/* Number */}
                <span className="font-[Poppins] text-xs font-bold uppercase tracking-wide text-[#404040]/60">
                  {principle.number}
                </span>

                <div>
                  {/* Title */}
                  <h3 className="font-[Poppins] text-base font-bold text-[#404040]">
                    {principle.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-[6px] font-[Poppins] text-sm font-normal leading-6 text-[#404040]/40">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quote Card */}
          <div className="w-full min-w-0 rounded-[20px] border border-white/10 bg-white px-[41px] py-10 lg:w-[596px]">
            {/* Quote */}
            <p className="font-[Poppins] text-xl font-bold leading-7 text-[#404040]">
              &quot;We are building a global food infrastructure system that
              connects{" "}
              <span className="text-[#E8920A]">
                culture, data, and commerce.
              </span>
              &quot;
            </p>

            {/* Body */}
            <p className="mt-[22px] font-[Poppins] text-base font-normal leading-6 text-[#404040]/40">
              Noxx Patties operates at the intersection of food, technology,
              logistics, and retail execution. The people who build it need to be
              comfortable operating across all of them — with precision,
              discipline, and a clear sense of what they are contributing to the
              larger system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
