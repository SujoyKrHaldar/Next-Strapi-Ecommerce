import Link from "next/link";
import React from "react";

function Catalog({ data, className = "" }) {
  return (
    <Link
      href={data.url}
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
            src={data.img}
            alt={data.name}
            loading="lazy"
            className="object-top"
          />
        </div>
      </card>
    </Link>
  );
}

export default Catalog;
