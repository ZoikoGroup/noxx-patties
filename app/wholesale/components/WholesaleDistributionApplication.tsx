export default function WholesaleDistributionApplication() {
  return (
    <section
      id="distribution-application"
      className="w-full scroll-mt-16 border-t border-[#EAE4D9] bg-[#F5F1EA] py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[92px]">
        {/* Heading */}
        <h2 className="text-center font-[Poppins] text-3xl font-semibold leading-tight text-[#1A0E04] lg:text-4xl lg:leading-[57px]">
          BECOME A CERTIFIED DISTRIBUTION PARTNER.
        </h2>

        {/* Description */}
        <p className="mx-auto mt-0 max-w-[960px] text-center font-[Poppins] text-base leading-7 text-[#8C8070]">
          Approved partners are designated as Certified Distribution Partners
          only after legal, operational, and commercial sign-off. This protects
          brand integrity and prevents avoidable execution failures.
        </p>

        {/* Form Card */}
        <div className="mx-auto mt-8 max-w-[1028px] rounded-[20px] bg-[#3C893F] px-10 py-10 shadow-[0px_20px_48px_rgba(26,14,4,0.14)] lg:px-[40px]">
          <h3 className="text-center font-[Poppins] text-3xl font-semibold text-white">
            Apply for Distribution Rights
          </h3>

          <p className="mt-2 text-center font-[Poppins] text-sm text-white/90">
            This begins the formal qualification process — not a casual enquiry
            form.
          </p>

          <div className="mt-10 space-y-6">
            {/* Company */}
            <div>
              <label className="mb-2 block font-[Poppins] text-xs font-bold uppercase tracking-wide text-white/40">
                Company Name
              </label>

              <input
                type="text"
                placeholder="Your company name"
                className="h-12 w-full rounded-xl border border-white/10 bg-white px-5 font-[Poppins] text-sm placeholder:text-[#8C8C8C] focus:outline-none"
              />
            </div>

            {/* Territory */}
            <div>
              <label className="mb-2 block font-[Poppins] text-xs font-bold uppercase tracking-wide text-white/40">
                Target Market / Territory
              </label>

              <select className="h-12 w-full rounded-xl border border-white/10 bg-white px-5 font-[Poppins] text-sm text-[#8C8C8C] focus:outline-none">
                <option>United States</option>
              </select>
            </div>

            {/* Distribution */}
            <div>
              <label className="mb-2 block font-[Poppins] text-xs font-bold uppercase tracking-wide text-white/40">
                Distribution Channel
              </label>

              <select className="h-12 w-full rounded-xl border border-white/10 bg-white px-5 font-[Poppins] text-sm text-[#8C8C8C] focus:outline-none">
                <option>Retail (Supermarkets / Convenience)</option>
              </select>
            </div>

            {/* Capacity */}
            <div>
              <label className="mb-2 block font-[Poppins] text-xs font-bold uppercase tracking-wide text-white/40">
                Annual Volume Capacity (Cases)
              </label>

              <select className="h-12 w-full rounded-xl border border-white/10 bg-white px-5 font-[Poppins] text-sm text-[#8C8C8C] focus:outline-none">
                <option>Under 500 cases/year</option>
              </select>
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block font-[Poppins] text-xs font-bold uppercase tracking-wide text-white/40">
                Contact Email
              </label>

              <input
                type="email"
                placeholder="name@company.com"
                className="h-12 w-full rounded-xl border border-white/10 bg-white px-5 font-[Poppins] text-sm placeholder:text-[#8C8C8C] focus:outline-none"
              />
            </div>
          </div>

          {/* Button */}
          <button className="mt-4 h-14 w-full rounded-xl bg-[#E8920A] font-[Poppins] text-base font-bold text-white shadow-[0px_4px_14px_rgba(232,146,10,0.40)] transition hover:opacity-90">
            Submit Distribution Application
          </button>

          {/* Footer */}
          <p className="mt-4 text-center font-[Poppins] text-xs leading-4 text-white">
            Applications are reviewed within 5 business days. A qualification
            call is required before any rights discussion proceeds.
          </p>
        </div>
      </div>
    </section>
  );
}