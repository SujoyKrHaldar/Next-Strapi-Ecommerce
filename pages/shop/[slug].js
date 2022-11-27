import Head from "next/head";
import { useRouter } from "next/router";
import Main from "../../components/product/Main";

function product() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{router.query.slug} - Devstore</title>
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

export default product;
