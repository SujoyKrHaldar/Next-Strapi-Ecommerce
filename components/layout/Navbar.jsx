import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FiShoppingCart, FiSearch, FiMenu } from "react-icons/fi";
import { HiArrowSmRight } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";

const nav = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Shop",
    url: "/shop",
  },
  {
    name: "Women",
    url: "/collection/women",
  },
  {
    name: "Men",
    url: "/collection/men",
  },
  {
    name: "Kids",
    url: "/collection/kids",
  },
];

function Navbar() {
  const router = useRouter();
  const [openModel, setOpenModel] = useState(true);

  return (
    <header className="sticky top-0 z-50 w-full h-min bg-white border-b border-black">
      <section
        className={` bg-gray-900 text-white 
      ${
        openModel
          ? "h-fit opacity-100 py-3"
          : "h-0 overflow-hidden opacity-0 py-0"
      }`}
      >
        <div className="container flex justify-between items-center gap-4">
          <p className="text-sm">Spring 2022 sale is on. 50% off.</p>
          <div className="flex items-center gap-4">
            <Link className="text-sm flex items-center gap-1" href="/shop">
              Shop now
              <HiArrowSmRight />
            </Link>
            <div
              onClick={() => setOpenModel(!openModel)}
              className="bg-gray-700 p-1 cursor-pointer"
            >
              <IoCloseOutline />
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 container flex items-center justify-between gap-4">
        <Link
          href="/"
          className="py-1 px-2 border border-black border-dashed bg-gray-200"
        >
          <p className="uppercase font-bold ">Devstores</p>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {nav.map((link) => (
            <Link
              href={link.url}
              key={link.name}
              className={`uppercase text-sm hover:text-black duration-200 ${
                router.pathname === link.url || router.asPath === link.url
                  ? "text-black font-semibold"
                  : "text-gray-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <nav className="flex items-center gap-3">
          <Link
            href="/search"
            className={`hidden md:block cursor-pointer text-xl p-2 bg-gray-200 hover:bg-gray-300
            border
            ${
              router.pathname === "/search"
                ? " border-black"
                : "border-transparent"
            } `}
          >
            <FiSearch />
          </Link>

          <Link
            href="/cart"
            className={`cursor-pointer p-2 bg-gray-200 hover:bg-gray-300 border
            ${
              router.pathname === "/cart"
                ? " border-black"
                : "border-transparent"
            } `}
          >
            <div className="text-xl">
              <FiShoppingCart />
            </div>
            <p
              className="absolute top-[-10px] right-[-8px] bg-black px-[4px] py-[2px]
            border border-black text-xs text-white w-fit h-fit "
            >
              9+
            </p>
          </Link>

          <div className="md:hidden cursor-pointer text-xl p-2 bg-gray-200 hover:bg-gray-300 border border-transparent">
            <FiMenu />
          </div>
        </nav>
      </section>
    </header>
  );
}

export default Navbar;
