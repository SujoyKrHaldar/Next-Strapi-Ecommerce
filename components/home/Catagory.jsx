import Catalog from "../design/Catalog";

const data = [
  {
    id: "1",
    name: "Men",
    url: "/category/men",
    img: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: "2",
    name: "Women",
    url: "/category/women",
    img: "https://images.unsplash.com/photo-1513094735237-8f2714d57c13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
  },
  {
    id: "3",
    name: "Kids",
    url: "/category/kids",
    img: "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=364&q=80",
  },
];

function Catagory() {
  return (
    <section className=" py-16">
      <div className="absolute w-full h-1/2 bg-gray-100 bottom-0 left-0"></div>
      <div className="container grid grid-cols-3 gap-4">
        {data.map((data) => (
          <Catalog data={data} key={data.id} />
        ))}
      </div>
    </section>
  );
}

export default Catagory;
