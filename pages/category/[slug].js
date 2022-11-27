import Head from "next/head";
import Main from "../../components/category/Main";

function CategoryItems() {
  return (
    <>
      <Head>
        <title>Explore Category's collections - Devstore</title>
        <meta
          name="description"
          content="Devstore - Find your new favourite collections here"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
    </>
  );
}

export default CategoryItems;
