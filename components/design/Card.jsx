import Link from "next/link";
import { IoMdAdd } from "react-icons/io";

function Card({ data }) {
  const primaryImg =
    data.mainimage?.data?.attributes?.formats?.large?.url ||
    data.mainimage?.data?.attributes?.formats?.medium?.url ||
    data.mainimage?.data?.attributes?.formats?.thumbnail?.url;

  const secondaryImg =
    data.secondaryimage?.data?.attributes?.formats?.large?.url ||
    data.secondaryimage?.data?.attributes?.formats?.medium?.url ||
    data.secondaryimage?.data?.attributes?.formats?.thumbnail.url;

  return (
    <card
      className="space-y-4 p-3 bg-white shadow-sm border border-gray-200  group hover:border-black
      hover:scale-105 hover:shadow-xl"
    >
      <div className="absolute inset-2 w-min h-fit  flex items-center gap-1 z-20">
        {data.isnew && (
          <p className="py-1 px-2 text-sm bg-green-500 text-white">New</p>
        )}
        {data?.type && (
          <p className="py-1 px-2 text-sm bg-red-700 text-white">
            {data?.type}
          </p>
        )}
      </div>
      <div className="w-full h-[230px] bg-white border border-gray-200">
        <img
          loading="lazy"
          src={primaryImg}
          alt={data.title}
          className=" duration-250 ease-in-out object-top"
        />
        {secondaryImg && (
          <img
            loading="lazy"
            src={secondaryImg}
            alt={data.title}
            className="absolute inset-0 h-full w-full object-top z-10 opacity-0 group-hover:opacity-100"
          />
        )}
      </div>
      <div className="px-1">
        <div className="p-3 cursor-pointer bg-gray-900 text-white absolute bottom-0 right-0 rounded-full z-10">
          <IoMdAdd />
        </div>
        <p className="font-semibold text-base">{data.title}</p>
        <p className="text-sm font-thin text-gray-500">{data?.tagline}</p>
        <p className="font-semibold text-orange-700">
          {Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 2,
          }).format(data.price)}
        </p>
        <Link className="pt-2" href={`/shop/${data.slug}`}>
          View item
        </Link>
      </div>
    </card>
  );
}

export default Card;
