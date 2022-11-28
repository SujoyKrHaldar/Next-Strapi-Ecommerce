import Link from "next/link";
import { IoMdAdd } from "react-icons/io";

function Card({ data }) {
  return (
    <card
      className="space-y-4 p-3 bg-white shadow-sm border border-gray-200  group hover:border-black
      hover:scale-105 hover:shadow-xl"
    >
      <div className="w-full h-[300px] bg-white">
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
          className="z-10 group-hover:opacity-0 duration-250 ease-in-out object-top"
        />
        <img
          loading="lazy"
          src={data.hoverimg}
          alt={data.name}
          className="absolute inset-0 h-full w-full object-top"
        />
      </div>
      <div className="px-1 -space-y-1">
        <div className="p-3 cursor-pointer bg-gray-900 text-white absolute bottom-0 right-0 rounded-full z-10">
          <IoMdAdd />
        </div>
        <p className="font-semibold">{data.name}</p>
        <p className="text-sm font-thin text-gray-500">the collection type</p>
        <p className="font-semibold text-orange-700">
          {Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 2,
          }).format(data.price)}
        </p>
        <Link className="pt-2" href={`/shop/${data.name}`}>
          View item
        </Link>
      </div>
    </card>
  );
}

export default Card;
