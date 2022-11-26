import Link from "next/link";

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

function Footer() {
  return (
    <footer className="bg-gray-900 py-12 mt-auto">
      <div className="container space-y-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/">
            <p className="uppercase font-bold text-white">Devstores</p>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {nav.map((link) => (
              <Link
                href={link.url}
                key={link.name}
                className="uppercase text-sm text-white "
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            Copyright {new Date().getFullYear()} - Devstore - All rights
            reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Develop using Next.js (12), tailwind css and Strapi. Developed by{" "}
            <Link target="_blank" href="https://sujoykh.vercel.app">
              Sujoy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
