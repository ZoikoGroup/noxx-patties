import PressContent from "./PressContent";
import PressAside from "./PressAside";

export default function PressBody() {
  return (
    <section className="w-full bg-[#FFFAF4] py-14 lg:py-[78px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-6 sm:px-8 lg:flex-row lg:items-start lg:gap-16 lg:px-[92px]">
        <PressContent />
        <PressAside />
      </div>
    </section>
  );
}
