"use client";

import { useState } from "react";

const thumbnails = [0, 1, 2, 3];

export default function ProductGallery() {
  const [selected, setSelected] = useState(0);

  return (
    <div>
      <div className="relative min-h-[400px] w-full overflow-hidden rounded-[20px] bg-[#8B8B8B] sm:h-[500px] lg:h-[611px]">
        <span className="absolute left-5 top-5 rounded-[50px] bg-[#E8920A] px-4 py-1.5 font-['Poppins'] text-xs font-bold tracking-wide text-white">
          🔥 Best Seller — #1 This Week
        </span>
      </div>

      <div className="mt-4 grid grid-cols-4 gap-4">
        {thumbnails.map((index) => (
          <button
            key={index}
            onClick={() => setSelected(index)}
            aria-label={`View image ${index + 1}`}
            className={`aspect-square rounded-xl bg-[#8B8B8B] border-2 transition-colors ${
              selected === index
                ? "border-[#E8920A] shadow-[0px_2px_8px_rgba(26,14,4,0.06)]"
                : "border-transparent"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
