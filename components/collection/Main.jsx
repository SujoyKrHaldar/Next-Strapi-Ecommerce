import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import FilteredProducts from "./FilteredProducts";
import FilterOptions from "./FilterOptions";

function Main({ data }) {
  const router = useRouter();

  return (
    <section className="pt-0 pb-16">
      <div className="container space-y-4">
        <div
          className="w-full flex items-center justify-between gap-2 py-3 bg-white
         border-b z-30 border-b-black"
        >
          <div className="flex items-center gap-2">
            <Link
              className="text-gray-500 text-sm hover:text-black uppercase"
              href="/"
            >
              Home
            </Link>{" "}
            /{" "}
            <Link
              className="text-gray-500 text-sm hover:text-black uppercase"
              href="/collection"
            >
              Collections
            </Link>{" "}
            / <p className="text-sm uppercase">{data.name}</p>
          </div>

          <p
            className="text-sm cursor-pointer px-3 py-1 bg-gray-200"
            onClick={() => router.back()}
          >
            Go back
          </p>
        </div>

        <div className="flex items-start gap-8">
          <div className="flex-0 sticky top-[8.6rem]">
            <FilterOptions data={data}/>
          </div>
          <div className="flex-1">
            <FilteredProducts data={data} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
