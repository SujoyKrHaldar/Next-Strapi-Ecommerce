import Card from "../design/Card";

function FilteredProducts({ data }) {
  const imgsrc = data.coverphoto?.data?.attributes?.formats?.large.url;

  return (
    <section className="space-y-8">
      <div className="w-full h-[350px] p-4 bg-gray-900 ">
        <img
          className="absolute w-full h-full inset-0 opacity-60 object-center"
          src={imgsrc}
          alt={data.name}
          loading="lazy"
        />
        <div className="p-6 border-2 border-white w-full h-full flex items-end">
          <div className="text-white max-w-md space-y-2 ">
            <h2 className="font-bold">{data.title}</h2>
            <p className=" text-thin">{data.description}</p>
          </div>
        </div>
      </div>

      {data.products.data.length > 0 ? (
        <div className="grid grid-cols-3 gap-4">
          {data.products?.data.map((data) => (
            <Card data={data.attributes} key={data.id} />
          ))}
        </div>
      ) : (
        <p>Coming soon</p>
      )}
    </section>
  );
}

export default FilteredProducts;
