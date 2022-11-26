import { RiFeedbackLine } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { BsServer } from "react-icons/bs";
import { TbFreeRights } from "react-icons/tb";
import { useState } from "react";

function Special() {
  const [input, setInput] = useState("");
  const [error, setError] = useState(null);

  const handelSubmit = (e) => {
    e.preventDefault();
    input === "" ? setError("Field can not be empty.") : alert("Subscribed");
  };

  return (
    <section className="py-16">
      <div className="bg-gray-100 absolute w-full h-1/2 inset-0"></div>
      <div className="bg-gray-900 absolute w-full h-1/2 bottom-0 left-0"></div>

      <div className="container">
        <div className="w-full h-full bg-gray-800 p-8 py-16 space-y-8">
          <div className="text-center w-full text-white">
            <p className="tag text-gray-500">Special</p>
            <h2 className="font-bold">Get all special Features.</h2>
            <p className="text-gray-300 max-w-md mx-auto">
              Get all special services from our shop. Subscrible for more future
              updates.
            </p>

            <form
              onSubmit={handelSubmit}
              className="flex items-center max-w-lg mx-auto
            p-2 bg-gray-600 mt-4"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                className="flex-1 w-full bg-transparent outline-none px-4 py-2"
                placeholder="Your Email"
              />
              <input
                type="submit"
                value="Subscrible"
                className="px-5 py-2 bg-gray-800 text-white"
              />
            </form>
            {error && (
              <p className="text-sm text-red-500 font-regular mt-2">{error}</p>
            )}
          </div>

          <div className="grid grid-cols-4 gap-4 px-8">
            <div className="space-y-2 p-5 bg-gray-700 text-white">
              <div className="p-3 rounded-md text-xl bg-gray-600 w-min">
                <RiFeedbackLine />
              </div>
              <div className="space-y-1">
                <p className="font-bold">100% Feedback</p>
                <p className="text-sm text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer lobortis suscipit vehicula. Sed eu bibendum elit.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer lobortis suscipit vehicula. Sed eu bibendum elit.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer lobortis suscipit vehicula. Sed eu bibendum elit.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer lobortis suscipit vehicula. Sed eu bibendum elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Special;
