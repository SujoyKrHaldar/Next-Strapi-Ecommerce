import Head from "next/head";
import Catalog from "../../components/design/Catalog";
import { useFetch } from "../../components/hooks/useFetch";

export const getStaticProps = async () => {
  const { data } = await useFetch("/collections?populate=*");

  return {
    props: { data },
    revalidate: 10,
  };
};

function index({ data }) {
  return (
    <>
      <Head>
        <title> Devstore collections</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="py-16">
        <div className="container space-y-8">
          <div className="grid grid-cols-3 gap-4">
            {data.map((data) => (
              <Catalog
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

export default index;
