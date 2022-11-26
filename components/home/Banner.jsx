import { AiOutlineShopping } from "react-icons/ai";

const images = [
  "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2446655/pexels-photo-2446655.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/3536741/pexels-photo-3536741.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/3921742/pexels-photo-3921742.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/4048542/pexels-photo-4048542.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
];

function Banner() {
  return (
    <section className="py-16 w-full h-[650px]">
      <div className="absolute w-full h-full inset-0 flex items-center justify-between gap-[1px]">
        {images.map((data, id) => (
          <div className="flex-1 h-[650px] bg-black" key={id}>
            <img src={data} className="opacity-50" />
          </div>
        ))}
      </div>

      <div className="container w-full h-full flex items-center justify-center">
        <div className="text-center text-white space-y-2">
          <p className="tag">Shop the look</p>
          <h2 className="uppercase font-bold text-8xl">
            # The winter season has come.
          </h2>
          <p>What are you waiting. Shop now.</p>
          <div className="text-white w-fit mx-auto text-5xl ">
            <AiOutlineShopping />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
