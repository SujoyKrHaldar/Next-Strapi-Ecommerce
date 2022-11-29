import Head from "next/head";
import Main from "../../components/category/Main";
import { useFetch } from "../../components/hooks/useFetch";

const populatesHiddens = "&populate[0]=coverphoto&populate[1]=categories";
const populatesProducts =
  "&populate[2]=products.mainimage&populate[3]=products.secondaryimage";

export const getServerSideProps = async ({ params }) => {
  const { slug } = params;
  const { data } = await useFetch(
    "/collections?filters[Slug][$eq]=" +
      slug +
      populatesHiddens +
      populatesProducts
  );
  return {
    props: { data: data[0].attributes },
  };
};

function CategoryItems({ data }) {
  return (
    <>
      <Head>
        <title>Explore {data.name} collections - Devstore</title>
        <meta
          name="description"
          content="Devstore - Find your new favourite collections here"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main data={data} />
    </>
  );
}

export default CategoryItems;
