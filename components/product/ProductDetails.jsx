import Link from "next/link";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useRouter } from "next/router";
import { useState } from "react";
import { BsFillCartPlusFill } from "react-icons/bs";

function ProductDetails() {
  const router = useRouter();

  const [quantity, setQuantity] = useState(1);
  const [fav, setFav] = useState(false);

  const addToFav = () => {
    setFav(!fav);
  };
  return (
    <section className="p-8 space-y-6">
      <div className="space-y-1">
        <p className="tag">Women collections</p>
        <h2 className="font-bold">{router.query.slug}</h2>

        <p className="font-thin text-base text-justify">
          <span className="font-bold">Description : </span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          cursus ut purus non elementum. Nunc convallis, quam quis interdum
          consequat, erat augue accumsan orci, eget elementum odio mi non mi.
          Aliquam bibendum eget quam et condimentum.
        </p>

        <div className="space-y-1">
          <p className="font-thin text-base">
            <span className="font-bold">Category : </span>
            Women collection
          </p>
          <p className="font-thin text-base">
            <span className="font-bold">Brand : </span>
            Gucci
          </p>
          <p className="font-thin text-base">
            <span className="font-bold">Meterial : </span>
            Silk
          </p>
        </div>

        <div className="pt-2 space-y-1">
          <p className="font-thin text-xl">
            <span className="font-bold">Total Price : </span> $199.00
          </p>

          <p className="font-thin text-xl">
            <span className="font-bold">In Stock : </span> Limited stocks -
            Hurry up!
          </p>
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
          Buy now - $199.00
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
