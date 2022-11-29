import { useState } from "react";

function FilterOptions({ data }) {
  const [value, setValue] = useState(500);
  const [sort, setSort] = useState(null);

  return (
    <section className=" w-full h-full border border-black bg-gray-200">
      <p className="font-bold text-2xl px-8 py-3 bg-gray-100 border-b border-black">
        Filters
      </p>

      <div className="p-5 px-8 space-y-4">
        {data.categories.data?.length > 0 && (
          <div className="space-y-1">
            <p className="font-semibold">Category</p>
            <div>
              {data.categories.data.map((data) => (
                <div key={data.id} className="flex gap-2 items-center">
                  <input type="checkbox" id={data.id} value={data.id} />
                  <label className="font-thin" htmlFor={data.id}>
                    {data.attributes.name}
                  </label>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="space-y-1">
          <p className="font-semibold">Price</p>
          <div className="flex gap-2 items-center">
            <span className="font-thin">0</span>
            <input
              className="slider w-full h-1 bg-black outline-none rounded-lg appearance-none cursor-pointer "
              type="range"
              min={199}
              max={999}
              onChange={(e) => setValue(e.target.value)}
            />
            <span className="font-thin">{value}</span>
          </div>
        </div>

        <div className="space-y-1">
          <p className="font-semibold">Sort by</p>
          <div>
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                id="asc"
                value="asc"
                name="price"
                onChange={(e) => setSort("asc")}
              />
              <label className="font-thin" htmlFor="asc">
                Price lowest
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                id="desc"
                value="desc"
                name="price"
                onChange={(e) => setSort("desc")}
              />
              <label className="font-thin" htmlFor="desc">
                Price highest
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FilterOptions;
