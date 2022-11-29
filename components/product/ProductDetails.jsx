import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import Link from "next/link";

function ProductDetails({ data }) {
  const [quantity, setQuantity] = useState(1);
  const [fav, setFav] = useState(false);

  const addToFav = () => {
    setFav(!fav);
  };
  return (
    <section className="p-8 space-y-6">
      <div className="space-y-1">
        <p className="tag">{data?.tagline}</p>
        <h2 className="font-bold">{data.title}</h2>
        {data.description && (
          <p className="font-thin text-base text-justify">
            <span className="font-bold">Description : </span>
            {data?.description}
          </p>
        )}

        <div className="space-y-1">
          {data?.brand && (
            <p className="font-thin text-base">
              <span className="font-bold">Brand : </span>
              {data.brand}
            </p>
          )}
          {data?.meterial && (
            <p className="font-thin text-base">
              <span className="font-bold">Meterial : </span>
              {data.meterial}
            </p>
          )}

          {data?.collection?.data && (
            <p className="font-thin text-base ">
              <span className="font-bold">Collection : </span>
              <span className="hover:text-red-500 font-medium duration-75">
                <Link
                  href={`/collection/${data?.collection?.data?.attributes.slug}`}
                >
                  {data?.collection?.data?.attributes.name} collection
                </Link>
              </span>
            </p>
          )}

          {data?.categories?.data.length > 0 && (
            <p className="font-thin text-base ">
              <span className="font-bold">Collection : </span>
              {data?.categories?.data.map((data) => (
                <span
                  key={data.id}
                  className="hover:text-red-500 font-medium mr-1 last:mr-0 duration-75"
                >
                  <Link href={`/category/${data?.attributes.slug}`}>
                    {data?.attributes.name}
                  </Link>
                </span>
              ))}
            </p>
          )}
        </div>

        <div className="pt-2 space-y-1">
          <p className="font-thin text-xl">
            <span className="font-bold">Total Price : </span>
            <span>
              {Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
                maximumFractionDigits: 2,
              }).format(data.price)}
            </span>
          </p>

          {!data.isinstock && (
            <p className="font-thin text-xl text-red-600">
              <span className="font-bold">Limited stocks - Hurry up!</span>
            </p>
          )}
        </div>
      </div>

      <div
        onClick={addToFav}
        className="w-fit flex items-center gap-2 cursor-pointer"
      >
        {fav ? <AiFillHeart /> : <AiOutlineHeart />}
        <p className="text-sm uppercase">Add to favourites</p>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={() => setQuantity((q) => (q === 1 ? 1 : q - 1))}
          className={`w-[40px] h-[40px] text-2xl  ${
            quantity === 1
              ? "pointer-events-none cursor-not-allowed bg-gray-100"
              : "pointer-events-auto cursor-pointer bg-gray-200"
          }`}
        >
          -
        </button>
        <p>{quantity}</p>
        <button
          onClick={() => setQuantity((q) => q + 1)}
          className="w-[40px] h-[40px] text-2xl bg-gray-200"
        >
          +
        </button>
      </div>

      <div className="flex items-center gap-4">
        <div className="btn cursor-pointer  bg-gray-900 text-white">
          {" "}
          Buy now -{" "}
          {Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 2,
          }).format(data.price)}
        </div>
        <div className="btn cursor-pointer bg-gray-200 flex items-center gap-2">
          <div className="text-xl">
            <BsFillCartPlusFill />
          </div>
          Add to cart{" "}
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
