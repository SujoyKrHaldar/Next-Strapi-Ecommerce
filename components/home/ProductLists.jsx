import Link from "next/link";
import Card from "../design/Card";

function ProductLists({
  className = "",
  tag = "",
  name = "",
  products,
  showBtn = true,
}) {
  return (
    <section className={`py-16 ${className}`}>
      <div className="container space-y-6">
        <div className="space-y-1">
          <p className="tag">{tag}</p>
          <h2 className="font-bold">{name}</h2>
        </div>
        <div className="grid grid-cols-4 gap-5">
          {products.map((data) => (
            <Card data={data} key={data.id} />
          ))}
        </div>
        {showBtn && (
          <Link href="/shop" className="btn bg-black text-white">
            View all
          </Link>
        )}
      </div>
    </section>
  );
}

export default ProductLists;
