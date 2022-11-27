import { useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1500336624523-d727130c3328?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  "https://images.unsplash.com/photo-1481214110143-ed630356e1bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
];

function ProductImage() {
  const [imgId, setImgId] = useState(0);

  return (
    <section className="w-full h-[586px]">
      <img
        src={images[imgId]}
        alt="product name"
        className="duration-300 ease-out"
      />
      <div className="w-[80px] h-[80px] absolute inset-4 space-y-2">
        {images.map((data, id) => (
          <img
            onClick={() => setImgId(id)}
            src={data}
            alt=""
            className={`cursor-pointer border-4 duration-300 ease-out ${
              imgId === id ? "border-white" : "border-transparent"
            } `}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductImage;
