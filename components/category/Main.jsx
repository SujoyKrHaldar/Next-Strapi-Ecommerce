import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import FilteredProducts from "./FilteredProducts";
import FilterOptions from "./FilterOptions";

const trendingProducts = [
  {
    id: "1",
    isNew: true,
    isHot: true,
    name: "lorem ipsum doller 2",
    img: "https://m.media-amazon.com/images/I/618Wek95laS._UY741_.jpg",
    price: "199",
    hoverimg: "https://m.media-amazon.com/images/I/61hq+LfAdOS._UY741_.jpg",
  },
  {
    id: "2",
    isHot: true,
    name: "lorem ipsum doller 1",
    img: "https://images.unsplash.com/photo-1441123694162-e54a981ceba5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: "199",
    hoverimg:
      "https://images.unsplash.com/photo-1441123100240-f9f3f77ed41b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: "3",
    isHot: true,
    isPopular: true,
    name: "lorem ipsum doller 4",
    img: "https://images.unsplash.com/photo-1481824429379-07aa5e5b0739?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=396&q=80",
    price: "199",
    hoverimg:
      "https://images.unsplash.com/photo-1530816735136-2ea32281ba3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: "4",
    isNew: true,
    isPopular: true,
    name: "lorem ipsum doller 3",
    img: "https://images.unsplash.com/photo-1482555670981-4de159d8553b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: "199",
    hoverimg:
      "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
];

function Main() {
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
            / <p className="text-sm uppercase">{router.query.slug}</p>
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
            <FilterOptions />
          </div>
          <div className="flex-1">
            <FilteredProducts data={trendingProducts} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
