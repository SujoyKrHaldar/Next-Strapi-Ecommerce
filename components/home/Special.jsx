import { RiFeedbackLine } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { BsServer } from "react-icons/bs";
import { TbFreeRights } from "react-icons/tb";

function Special() {
  return (
    <section className="py-16 container">
      <div className="bg-gray-100 absolute w-full h-1/2 inset-0"></div>
      {/* <div className="bg-gray-900 absolute w-full h-1/2 bottom-0 left-0"></div> */}

      <div className="w-full h-full bg-gray-800 p-8 py-16 space-y-8">
        <div className="text-center w-full text-white">
          <p className="tag text-gray-500">Special</p>
          <h2 className="font-bold">Get all special Features.</h2>
          <p className="text-gray-300">
            Get all special services from our shop.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-4 px-8">
          <div className="space-y-2 p-5 bg-gray-700 text-white">
            <div className="p-3 rounded-md text-xl bg-gray-600 w-min">
              <RiFeedbackLine />
            </div>
            <div className="space-y-1">
              <p className="font-bold">100% Feedback</p>
              <p className="text-sm text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                lobortis suscipit vehicula. Sed eu bibendum elit.
              </p>
            </div>
          </div>

          <div className="space-y-2 p-5 bg-gray-700 text-white">
            <div className="p-3 rounded-md text-xl bg-gray-600 w-min">
              <TbFreeRights />
            </div>
            <div className="space-y-1">
              <p className="font-bold">For free return </p>
              <p className="text-sm text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                lobortis suscipit vehicula. Sed eu bibendum elit.
              </p>
            </div>
          </div>

          <div className="space-y-2 p-5 bg-gray-700 text-white">
            <div className="p-3 rounded-md text-xl bg-gray-600 w-min">
              <BsServer />
            </div>
            <div className="space-y-1">
              <p className="font-bold">Secure system</p>
              <p className="text-sm text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                lobortis suscipit vehicula. Sed eu bibendum elit.
              </p>
            </div>
          </div>

          <div className="space-y-2 p-5 bg-gray-700 text-white">
            <div className="p-3 rounded-md text-xl bg-gray-600 w-min">
              <BiSupport />
            </div>
            <div className="space-y-1">
              <p className="font-bold">Online supports </p>
              <p className="text-sm text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                lobortis suscipit vehicula. Sed eu bibendum elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Special;
