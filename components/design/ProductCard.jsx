import Link from "next/link";

function ProductCard({ data }) {
  const { Title, Slug, Price, Image } = data.attributes;
  const imgUrl = Image.data.attributes.formats.small.url;
  return (
    <div className="p-3 bg-gray-200 border-2 border-transparent hover:border-black">
      <div className="w-full h-[200px] p-1 bg-white">
        <img src={imgUrl} alt={Title} />
      </div>
      <div className="pt-3 px-2">
        <p className="font-semibold">{Title}</p>
        <p className="text-base font-thin">
          {Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 2,
          }).format(Price)}
        </p>
        {/* <Link
          href={`/product/${Slug}`}
          className="pt-2 text-base font-semibold"
        >
          View item
        </Link> */}
      </div>
    </div>
  );
}

export default ProductCard;
