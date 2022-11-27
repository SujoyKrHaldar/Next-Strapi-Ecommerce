import { BsFillCreditCardFill } from "react-icons/bs";
import { AiOutlineReload } from "react-icons/ai";

function OrderSummery() {
  return (
    <section className="w-full h-full border border-black bg-gray-100">
      <p className="font-bold text-2xl px-5 py-3 bg-gray-200 border-b border-black">
        Order Summery
      </p>

      <div className="p-5 space-y-2">
        <div className="flex items-center justify-between gap-2">
          <p className="font-bold">Subtotal </p>
          <p>$19998</p>
        </div>

        <div className="flex items-center justify-between gap-2 pb-2">
          <p className="font-bold">Shipping cost </p>
          <p className="text-red-500"> - $100</p>
        </div>

        <div className="flex items-center justify-between gap-2 pt-2 border-t border-black">
          <p className="font-bold">Grand Total </p>
          <p>$19998</p>
        </div>
      </div>

      <div className="btn cursor-pointer hover:bg-blue-800 bg-blue-900 text-white w-auto m-2 flex justify-center items-center gap-2">
        <div className="text-lg text-blue-500">
          <BsFillCreditCardFill />
        </div>
        Proceed to checkout
      </div>
      <div className="btn cursor-pointer hover:bg-red-700 bg-red-800 text-white w-auto m-2 flex justify-center items-center gap-2">
        <div className="text-lg text-white">
          <AiOutlineReload />
        </div>
        Reset cart
      </div>
    </section>
  );
}

export default OrderSummery;
