import Link from "next/link";
import OrderSummery from "./OrderSummery";
import ProductList from "./ProductList";

function Body() {
  return (
    <section className="pt-8 pb-28">
      {/* <div className="absolute w-full h-[230px] inset-0 bg-gray-100"></div> */}
      <div className="container space-y-6">
        <div className="flex items-end justify-between gap-2">
          <div className="space-y-1">
            <h2 className="font-bold">Shopping Cart</h2>
            <p className="text-base font-thin">
              This is your cart based on your item you want to buy.
            </p>
          </div>

          {/* <Link className="btn" href="/shop">
            back to shopping
          </Link> */}
          <Link className="btn bg-gray-200" href="/shop">
            back to shopping
          </Link>
        </div>

        <div className="flex items-start gap-8">
          <div className="flex-1 w-full">
            <ProductList />
          </div>
          <div className="flex-1 max-w-[350px] sticky top-[6rem]">
            <OrderSummery />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Body;
