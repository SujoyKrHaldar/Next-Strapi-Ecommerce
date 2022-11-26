import Link from "next/link";
import { useRouter } from "next/router";
import { FiShoppingCart, FiSearch, FiMenu } from "react-icons/fi";
import { HiArrowSmRight } from "react-icons/hi";

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
    url: "/category/women",
  },
  {
    name: "Men",
    url: "/category/men",
  },
  {
    name: "Kids",
    url: "/category/kids",
  },
];

function Navbar() {
  const router = useRouter();

  return (
    <header className="fixed inset-0 z-50 w-screen h-min bg-white border-b border-black">
      {/* <section className="py-3 bg-gray-900 text-white">
        <div className="container flex justify-between items-center gap-4">
          <p className="text-sm">Spring 2022 sale is on. 50% off.</p>
          <Link className="text-sm flex items-center gap-1" href="/shop">
            Shop now
            <HiArrowSmRight />
          </Link>
        </div>
      </section> */}

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
                router.pathname === link.url
                  ? "text-black font-medium"
                  : "text-gray-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <nav className="flex items-center gap-3">
          <div className="hidden md:block cursor-pointer text-xl p-2 bg-gray-200 hover:bg-gray-300">
            <FiSearch />
          </div>

          <div className="cursor-pointer p-2 bg-gray-200 hover:bg-gray-300">
            <div className="text-xl">
              <FiShoppingCart />
            </div>
            <p
              className="absolute top-[-10px] right-[-8px] bg-black px-[4px] py-[2px]
            border border-black text-xs text-white w-fit h-fit "
            >
              9+
            </p>
          </div>

          <div className="md:hidden cursor-pointer text-xl p-2 bg-gray-200 hover:bg-gray-300">
            <FiMenu />
          </div>
        </nav>
      </section>
    </header>
  );
}

export default Navbar;
