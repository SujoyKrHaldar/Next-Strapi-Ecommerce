import Link from "next/link";
import React from "react";

function Catalog({ data, className = "" }) {
  const imgsrc =
    // data.thumbnail?.data?.attributes?.formats?.large?.url ||
    data.thumbnail?.data?.attributes?.formats?.medium?.url ||
    // data.coverphoto?.data?.attributes?.formats?.large?.url ||
    data.coverphoto?.data?.attributes?.formats?.medium?.url;

  return (
    <Link
      href={`/collection/${data.slug}`}
      className={`group p-4 border border-gray-200 hover:border-black bg-white ${className}`}
    >
      <card className="overflow-hidden flex items-center justify-center p-4 w-full h-[450px]">
        <div
          className="absolute w-[90%] h-[90%] border border-dashed border-white z-10 
        inset-1/2 -translate-y-1/2 -translate-x-1/2"
        ></div>
        <p className="z-10 py-1 px-5 bg-white border border-black uppercase">
          {data.name}
        </p>
        <div className="absolute inset-0 w-full h-full group-hover:scale-105">
          <img
            src={imgsrc}
            alt={data.title}
            loading="lazy"
            className="object-top"
          />
        </div>
      </card>
    </Link>
  );
}

export default Catalog;
