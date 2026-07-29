import CookiesSidebar from "./CookiesSidebar";
import CookiesContent from "./CookiesContent";

export default function CookiesBody() {
  return (
    <section className="w-full bg-[#FFFAF4] py-14 lg:py-[65px]">
      <div className="mx-auto flex w-full max-w-[1440px] gap-14 px-6 sm:px-8 lg:px-[92px]">
        <CookiesSidebar />
        <CookiesContent />
      </div>
    </section>
  );
}
