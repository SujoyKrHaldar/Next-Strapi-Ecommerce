import Link from "next/link";
import { useState } from "react";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";

const images = [
  "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3062597/pexels-photo-3062597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1620796/pexels-photo-1620796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //"https://images.unsplash.com/photo-1581404917879-53e19259fdda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
];

function Landing() {
  const [currentView, setCurrentView] = useState(0);

  const prevSlide = () => {
    setCurrentView(currentView === 0 ? 2 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentView(currentView === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <section className="overflow-hidden w-screen h-screen">
      <div
        style={{ transform: `translateX(-${currentView * 100}vw)` }}
        className="absolute inset-0 flex w-max h-full duration-700 ease-in-out"
      >
        {images.map((data, id) => (
          <img loading="lazy" className="w-screen" src={data} key={id} />
        ))}
      </div>

      <div className="container w-full h-full flex items-center justify-between gap-4">
        <div className="space-y-2 max-w-2xl">
          <p className="tag">All new trends you need </p>
          <h1 className="font-bold">
            Find your new favourite collection at Spring Sale 2022.
          </h1>
          <div className="flex items-center gap-2 pt-8">
            <Link
              className="btn hover:bg-black bg-gray-800 text-white flex items-center gap-2"
              href="/shop"
            >
              Shop now
              <div className="translate-y-[-1.5px] translate-x-[10px]">
                <HiArrowSmRight />
              </div>
            </Link>
            <Link
              className="btn bg-gray-200 hover:bg-gray-300"
              href="/category"
            >
              Collections
            </Link>
          </div>
        </div>

        <div className="w-min space-y-2">
          <div
            onClick={prevSlide}
            className="bg-white text-black p-4 rounded-full cursor-pointer border border-black border-dashed"
          >
            <HiArrowSmLeft />
          </div>
          <div
            onClick={nextSlide}
            className="bg-white text-black p-4 rounded-full cursor-pointer border border-black border-dashed"
          >
            <HiArrowSmRight />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
