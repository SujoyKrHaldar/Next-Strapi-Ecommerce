import { useQuery } from "urql";
import { product_query } from "../../lib/gQuery";
import ProductCard from "../design/ProductCard";

function AllProducts() {
  const [response] = useQuery({ query: product_query });
  const { fetching, error, data } = response;
  //   console.log(data);

  return (
    <section className="container py-16">
      {error && <p>Some things wrong. {error.message}</p>}
      {!error && (
        <div>
          <p className="tag">Featuerd</p>
          <h1 className="font-bold">Products</h1>
          {fetching ? (
            <p>Loading data....</p>
          ) : (
            <div className="grid grid-cols-4 gap-4 mt-4">
              {data.products.data.map((data) => (
                <ProductCard data={data} key={data.id} />
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}

export default AllProducts;
