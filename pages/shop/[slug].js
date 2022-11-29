import Head from "next/head";
import { useFetch } from "../../components/hooks/useFetch";
import Main from "../../components/product/Main";

export const getServerSideProps = async ({ params }) => {
  const { slug } = params;
  const { data } = await useFetch(
    "/products?filters[Slug][$eq]=" + slug + "&populate=*"
  );
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data: data[0].attributes },
  };
};

function product({ data }) {
  return (
    <>
      <Head>
        <title> {data?.title} - Devstore</title>
        <meta name="description" content={data.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main data={data} />
    </>
  );
}

export default product;
