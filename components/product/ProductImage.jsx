import { useState } from "react";

function ProductImage({ data }) {
  const [imgId, setImgId] = useState(0);

  const mainImg =
    data.productimages.data[imgId]?.attributes?.formats?.large?.url ||
    data.productimages.data[imgId]?.attributes?.formats?.medium?.url ||
    data.productimages.data[imgId]?.attributes?.formats?.thumbnail?.url;

  return (
    <section className="w-full h-[586px] border border-black overflow-hidden">
      <img
        src={mainImg}
        alt="product name"
        className="duration-300 ease-out object-top"
      />
      <div className="w-min h-full absolute inset-4 space-y-2">
        {data.productimages.data.map((data, id) => (
          <div
            key={data.id}
            className={`border w-[80px] h-[80px] ${
              imgId === id ? "border-black" : "border-gray-200"
            }`}
          >
            <img
              onClick={() => setImgId(id)}
              src={
                data.attributes.formats.large?.url ||
                data.attributes.formats.medium?.url ||
                data.attributes.formats.thumbnail?.url
              }
              alt={data.title}
              className={`cursor-pointer border-4 duration-300 ease-out ${
                imgId === id ? "border-white" : "border-transparent"
              } `}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductImage;
