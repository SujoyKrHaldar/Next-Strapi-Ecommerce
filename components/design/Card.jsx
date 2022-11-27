import Link from "next/link";

function Card({ data }) {
  return (
    <card className="space-y-4">
      <div className="w-full h-[300px] bg-white group">
        <div className="absolute inset-4 w-min h-fit  flex items-center gap-1 z-20">
          {data.isHot && (
            <p className="py-1 px-2 text-sm bg-red-700 text-white">Hot</p>
          )}
          {data.isPopular && (
            <p className="py-1 px-2 text-sm bg-green-600 text-white">Popular</p>
          )}
          {data.isNew && (
            <p className="py-1 px-2 text-sm bg-white text-black">New</p>
          )}
        </div>
        <img
          loading="lazy"
          src={data.img}
          alt={data.name}
          className="z-10 group-hover:opacity-0 duration-75 object-top"
        />
        <img
          loading="lazy"
          src={data.hoverimg}
          alt={data.name}
          className="absolute inset-0 h-full w-full object-top"
        />
      </div>
      <div className="space-y-1">
        <p className="font-semibold">{data.name}</p>
        <p className="text-base font-thin">
          {Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 2,
          }).format(data.price)}
        </p>
        <Link
          href={`/shop/${data.name}`}
          className="pt-2 text-base font-semibold"
        >
          View item
        </Link>
      </div>
    </card>
  );
}

export default Card;
