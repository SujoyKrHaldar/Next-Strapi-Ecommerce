import ProductAtCart from "../design/ProductAtCart";

const trendingProducts = [
  {
    id: "1",
    isNew: true,
    isHot: true,
    name: "lorem ipsum doller 2",
    img: "https://m.media-amazon.com/images/I/618Wek95laS._UY741_.jpg",
    price: "199",
    hoverimg: "https://m.media-amazon.com/images/I/61hq+LfAdOS._UY741_.jpg",
  },
  {
    id: "2",
    isHot: true,
    name: "lorem ipsum doller 1",
    img: "https://images.unsplash.com/photo-1441123694162-e54a981ceba5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: "199",
    hoverimg:
      "https://images.unsplash.com/photo-1441123100240-f9f3f77ed41b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: "3",
    isHot: true,
    isPopular: true,
    name: "lorem ipsum doller 4",
    img: "https://images.unsplash.com/photo-1481824429379-07aa5e5b0739?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=396&q=80",
    price: "199",
    hoverimg:
      "https://images.unsplash.com/photo-1530816735136-2ea32281ba3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: "4",
    isNew: true,
    isPopular: true,
    name: "lorem ipsum doller 3",
    img: "https://images.unsplash.com/photo-1482555670981-4de159d8553b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: "199",
    hoverimg:
      "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
];

function ProductList() {
  return (
    <section className="space-y-5">
      <div className="flex items-center justify-between gap-4">
        <p className="font-bold">Products in your cart</p>
        <p className="text-base"> Total 9 items.</p>
      </div>

      <div className="space-y-4">
        {trendingProducts?.map((data) => (
          <ProductAtCart data={data} key={data.id} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
