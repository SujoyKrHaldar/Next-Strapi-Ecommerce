import Card from "../design/Card";

function FilteredProducts({ data }) {
  return (
    <section className="space-y-8">
      <div className="w-full h-[300px] p-4 bg-gray-900 ">
        <img
          className="absolute w-full h-full inset-0 opacity-60"
          src="https://images.unsplash.com/photo-1504194921103-f8b80cadd5e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Women"
          loading="lazy"
        />
        <div className="p-6 border-2 border-white w-full h-full flex items-end">
          <div className="text-white max-w-md space-y-2 ">
            <h2 className="font-bold">Women's clothing catalog</h2>
            <p className=" text-thin">
              We have the latest and most complete catalog of clothes for women.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {data.map((data) => (
          <Card data={data} key={data.id} />
        ))}
      </div>
    </section>
  );
}

export default FilteredProducts;
