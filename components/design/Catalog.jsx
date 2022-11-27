import Link from "next/link";
import React from "react";

function Catalog({ data, className = "" }) {
  return (
    <Link
      href={data.url}
      className={`p-4 border border-black border-dashed bg-white ${className}`}
    >
      <card className="flex items-center justify-center p-4 w-full h-[450px]">
        <div
          className="absolute w-[90%] h-[90%] border border-dashed border-white z-10 
        inset-1/2 -translate-y-1/2 -translate-x-1/2"
        ></div>
        <p className="z-10 py-1 px-4 bg-white border border-black">
          {data.name}
        </p>
        <div className="absolute inset-0 w-full h-full">
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
