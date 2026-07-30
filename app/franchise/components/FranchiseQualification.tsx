export default function FranchiseQualification() {
  return (
    <section
      id="qualification"
      className="w-full scroll-mt-16 bg-[#38833E] py-[72px]"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-[92px]">
        {/* Section Heading */}
        <h2 className="text-center font-[Poppins] text-2xl font-semibold leading-tight lg:leading-[57px] text-white">
          THE PROCESS IS DESIGNED TO QUALIFY NOT JUST COLLECT.
        </h2>

        {/* Form Container */}
        <div className="mt-4 rounded-[20px] border border-white/40 bg-white/5 px-6 py-8 sm:px-8 lg:px-10">
          {/* Form Title */}
          <h3 className="text-center font-[Poppins] text-3xl font-semibold text-white">
            Check Your Qualification
          </h3>

          {/* Description */}
          <p className="mx-auto mt-2 max-w-[714px] text-center font-[Poppins] text-sm leading-6 text-white/40">
            The first action is not &ldquo;Apply Now&rdquo; — it is &ldquo;Check Your
            Qualification.&rdquo; This process is designed to find the right
            operators, not the most operators.
          </p>

          {/* Form */}
          <form className="mt-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* Full Name */}
              <div>
                <label className="mb-2 block font-[Poppins] text-xs font-bold uppercase tracking-wide text-white/40">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Your full name"
                  className="h-12 w-full rounded-xl border border-white/10 bg-white px-5 font-[Poppins] text-sm text-[#1A0E04] placeholder:text-[#A2A2A2] outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block font-[Poppins] text-xs font-bold uppercase tracking-wide text-white/40">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="name@company.com"
                  className="h-12 w-full rounded-xl border border-white/10 bg-white px-5 font-[Poppins] text-sm text-[#1A0E04] placeholder:text-[#A2A2A2] outline-none"
                />
              </div>

              {/* Target Market */}
              <div>
                <label className="mb-2 block font-[Poppins] text-xs font-bold uppercase tracking-wide text-white/40">
                  Target Market
                </label>

                <select className="h-12 w-full rounded-xl border border-white/10 bg-white px-5 font-[Poppins] text-sm text-[#1A0E04] outline-none">
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Europe</option>
                  <option>Africa</option>
                </select>
              </div>

              {/* Available Capital */}
              <div>
                <label className="mb-2 block font-[Poppins] text-xs font-bold uppercase tracking-wide text-white/40">
                  Available Capital
                </label>

                <select className="h-12 w-full rounded-xl border border-white/10 bg-white px-5 font-[Poppins] text-sm text-[#1A0E04] outline-none">
                  <option>Under £/$ 50,000</option>
                  <option>£/$ 50,000 - 100,000</option>
                  <option>£/$ 100,000 - 250,000</option>
                  <option>Above £/$ 250,000</option>
                </select>
              </div>

              {/* Operating Experience */}
              <div>
                <label className="mb-2 block font-[Poppins] text-xs font-bold uppercase tracking-wide text-white/40">
                  Operating Experience
                </label>

                <select className="h-12 w-full rounded-xl border border-white/10 bg-white px-5 font-[Poppins] text-sm text-[#1A0E04] outline-none">
                  <option>None — first-time operator</option>
                  <option>Restaurant Experience</option>
                  <option>Franchise Experience</option>
                  <option>Multi-unit Operator</option>
                </select>
              </div>

              {/* Preferred Format */}
              <div>
                <label className="mb-2 block font-[Poppins] text-xs font-bold uppercase tracking-wide text-white/40">
                  Preferred Format
                </label>

                <select className="h-12 w-full rounded-xl border border-white/10 bg-white px-5 font-[Poppins] text-sm text-[#1A0E04] outline-none">
                  <option>Let the system recommend</option>
                  <option>Express Kiosk</option>
                  <option>Standard Store</option>
                  <option>Flagship Store</option>
                  <option>Delivery Hub</option>
                </select>
              </div>
                            {/* Why Noxx Patties */}
              <div className="lg:col-span-2">
                <label className="mb-2 block font-[Poppins] text-xs font-bold uppercase tracking-wide text-white/40">
                  Why Noxx Patties?
                </label>

                <textarea
                  rows={4}
                  placeholder="Brief statement of intent — this matters to us"
                  className="w-full rounded-xl border border-white/10 bg-white px-5 py-4 font-[Poppins] text-sm text-[#1A0E04] placeholder:text-[#A2A2A2] outline-none resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-10 flex justify-center">
              <button
                type="submit"
                className="w-full rounded-full bg-[#E8920A] px-10 py-4 font-[Poppins] text-base font-bold text-white shadow-[0px_6px_20px_rgba(232,146,10,0.40)] transition-all duration-300 hover:opacity-90 lg:w-[660px]"
              >
                Submit Qualification Request →
              </button>
            </div>

            {/* Disclaimer */}
            <p className="mx-auto mt-10 max-w-[935px] text-center font-[Poppins] text-xs font-normal leading-5 text-white/70">
              Qualification results are returned within 5 business days. A
              model-match recommendation and initial economics are shared before
              any formal interview proceeds. Submission of this form does not
              constitute an offer of franchise rights.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}