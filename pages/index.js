import Head from "next/head";
import ProductLists from "../components/home/ProductLists";
import Landing from "../components/home/Landing";
import Special from "../components/home/Special";
import Banner from "../components/home/Banner";
import Catagory from "../components/home/Catagory";

const trendingProducts = [
  {
    id: "1",
    isNew: true,
    isHot: true,
    name: "lorem ipsum doller 2",
    img: "https://m.media-amazon.com/images/I/618Wek95laS._UY741_.jpg",
    price: "199",
    hoverimg: "https://m.media-amazon.com/images/I/61hq+LfAdOS._UY741_.jpg",
  },
  {
    id: "2",
    isHot: true,
    name: "lorem ipsum doller 1",
    img: "https://images.unsplash.com/photo-1441123694162-e54a981ceba5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: "199",
    hoverimg:
      "https://images.unsplash.com/photo-1441123100240-f9f3f77ed41b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: "3",
    isHot: true,
    isPopular: true,
    name: "lorem ipsum doller 4",
    img: "https://images.unsplash.com/photo-1481824429379-07aa5e5b0739?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=396&q=80",
    price: "199",
    hoverimg:
      "https://images.unsplash.com/photo-1530816735136-2ea32281ba3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: "4",
    isNew: true,
    isPopular: true,
    name: "lorem ipsum doller 3",
    img: "https://images.unsplash.com/photo-1482555670981-4de159d8553b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: "199",
    hoverimg:
      "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
];

const allProducts = [...trendingProducts, ...trendingProducts];

export default function Home() {
  return (
    <>
      <Head>
        <title>Next strapi ecomm</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Landing />
      <ProductLists
        tag="Most demanding"
        name="Trending Products"
        products={trendingProducts}
        showBtn={false}
      />
      <Banner />
      <Catagory />
      <ProductLists
        className="bg-gray-100"
        tag="Regulars"
        name="All Products"
        products={allProducts}
      />
      <Special />
    </>
  );
}
