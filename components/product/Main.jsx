import Link from "next/link";
import { useRouter } from "next/router";
import ProductDetails from "./ProductDetails";
import ProductImage from "./ProductImage";

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
              href="/shop"
            >
              Shop
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
