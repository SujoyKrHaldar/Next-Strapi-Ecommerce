import Link from "next/link";
import React from "react";

function Catalog({ data }) {
  return (
    <Link href={data.url}>
      <card className="flex items-center justify-center p-4 w-full h-[450px]">
        <div
          className="absolute w-[90%] h-[90%] border-2 border-white z-10 
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
