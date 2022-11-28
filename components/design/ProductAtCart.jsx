function ProductAtCart({ data }) {
  return (
    <card className="p-3 pr-5 bg-white border shadow-sm border-gray-200 hover:border-black hover:shadow-xl
    flex items-center justify-between gap-2">
      <div className="flex items-center gap-4">
        <div className="w-[80px] h-[80px]">
          <img src={data.img} alt={data.name} className="object-top" />
        </div>

        <p className="text-base font-bold">{data.name}</p>
      </div>

      <p className="text-base">1 x ${data.price}</p>
      <p className="py-1 px-3 bg-red-200 text-sm">Remove</p>
    </card>
  );
}

export default ProductAtCart;
