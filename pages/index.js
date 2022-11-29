import Head from "next/head";
import ProductLists from "../components/home/ProductLists";
import Landing from "../components/home/Landing";
import Special from "../components/home/Special";
import Banner from "../components/home/Banner";
import Collection from "../components/home/Collection";
import { useFetch } from "../components/hooks/useFetch";

export const getStaticProps = async () => {
  const collection = await useFetch(
    "/collections?populate[0]=thumbnail&populate[1]=coverphoto"
  );

  const allProducts = await useFetch("/products?populate=*");

  return {
    props: {
      collection: collection.data,
      allProduct: allProducts.data,
    },
    revalidate: 10,
  };
};

export default function Home({ collection, allProduct }) {
  return (
    <>
      <Head>
        <title>Devstore - Find your new favourite collections here</title>
        <meta
          name="description"
          content="Devstore - Find your new favourite collections here"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Landing />
      <ProductLists
        tag="Most demanding"
        name="Trending Products"
        products={allProduct}
        showBtn={false}
      />
      {/* <ProductLists
        className="bg-gray-100"
        tag="Regulars"
        name="All Products"
        products={allProducts}
      /> */}
      <Banner />
      <Collection data={collection} />

      <Special />
    </>
  );
}
