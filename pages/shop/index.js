import Head from "next/head";
import Card from "../../components/design/Card";
import { useFetch } from "../../components/hooks/useFetch";

export const getStaticProps = async () => {
  const { data } = await useFetch("/products?populate=*");

  return {
    props: { data },
    revalidate: 10,
  };
};

function shop({ data }) {
  return (
    <>
      <Head>
        <title>
          Buy products from Devstore - Find your new favourite collections here
        </title>
        <meta
          name="description"
          content="Devstore - Find your new favourite collections here"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="py-16">
        <div className="container space-y-8">
          <h2 className="font-bold">All Products</h2>
          <div className="grid grid-cols-3 gap-4">
            {data.map((data) => (
              <Card
                data={data.attributes}
                key={data.id}
                className="p-0 border-none bg-gray-200"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default shop;
