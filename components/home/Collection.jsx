import Catalog from "../design/Catalog";

function Collection({ data }) {
  return (
    <section className="py-8">
      <div className="absolute w-full h-1/2 bg-gray-100 bottom-0 left-0"></div>
      <div className="container grid grid-cols-3 gap-4">
        {data.map((data) => (
          <Catalog
            data={data.attributes}
            key={data.id}
            className="even:-translate-y-28"
          />
        ))}
      </div>
    </section>
  );
}

export default Collection;
