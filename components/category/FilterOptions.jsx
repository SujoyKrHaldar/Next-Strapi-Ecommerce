import { useState } from "react";

function FilterOptions() {
  const [value, setValue] = useState(500);
  const [sort, setSort] = useState(null);

  return (
    <section className=" w-full h-full border border-black bg-gray-200">
      <p className="font-bold text-2xl px-8 py-3 bg-gray-100 border-b border-black">
        Apply filters
      </p>

      <div className="p-5 px-8 space-y-4">
        <div className="space-y-1">
          <p className="font-semibold">Filter option</p>
          <div>
            <div className="flex gap-2 items-center">
              <input type="checkbox" id="1" value="1" />
              <label className="font-thin" htmlFor="1">
                Cloths
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <input type="checkbox" id="2" value="2" />
              <label className="font-thin" htmlFor="2">
                Skirts
              </label>
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <p className="font-semibold">Filter price</p>
          <div className="flex gap-2 items-center">
            <span className="font-thin">0</span>
            <input
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
