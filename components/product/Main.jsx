import Link from "next/link";
import { useRouter } from "next/router";
import ProductDetails from "./ProductDetails";
import ProductImage from "./ProductImage";

function Main() {
  const router = useRouter();

  return (
    <section className="py-16">
      <div className="container space-y-6">
        <div
          className="w-full flex items-center justify-between gap-2 py-2 bg-white
         sticky top-[4.5rem] border-b z-30 border-b-black"
        >
          <div className="flex items-center gap-2">
            <Link className="text-gray-500 hover:text-black" href="/">
              Home
            </Link>{" "}
            -{" "}
            <Link className="text-gray-500 hover:text-black" href="/shop">
              Shop
            </Link>{" "}
            - <p className="text-base">{router.query.slug}</p>
          </div>

          <p
            className="text-sm cursor-pointer px-3 py-1 bg-gray-200"
            onClick={() => router.back()}
          >
            Go back
          </p>
        </div>

        <div className="flex items-center gap-8">
          <div className="flex-1 sticky top-[8.6rem]">
            <ProductImage />
          </div>
          <div className="flex-1">
            <ProductDetails />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
