export type MenuProduct = {
  name: string;
  description: string;
  price: string;
  tag?: { label: string; className: string };
};

export default function MenuProductCard({
  product,
  bordered = false,
}: {
  product: MenuProduct;
  bordered?: boolean;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[20px] bg-white ${
        bordered ? "border border-[#D6D3D1]" : ""
      }`}
    >
      <div className="relative h-40 w-full bg-[#D6D3D1]">
        {product.tag && (
          <span
            className={`absolute left-2.5 top-2.5 rounded-[50px] px-2.5 py-1 font-['Poppins'] text-[10px] font-bold text-white ${product.tag.className}`}
          >
            {product.tag.label}
          </span>
        )}
      </div>

      <div className="px-4 pb-5 pt-4">
        <h3 className="font-['Poppins'] text-base font-bold text-[#1A0E04]">
          {product.name}
        </h3>
        <p className="mt-1 font-['Poppins'] text-xs leading-4 text-[#8C8070]">
          {product.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="font-['Poppins'] text-xl font-semibold text-[#1A0E04]">
            {product.price}
          </span>
          <button className="h-8 rounded-[50px] bg-[#1A0E04] px-5 font-['Poppins'] text-xs font-bold text-white">
            + Add
          </button>
        </div>
      </div>
    </div>
  );
}
