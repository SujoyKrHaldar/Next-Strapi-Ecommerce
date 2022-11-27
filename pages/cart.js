import Head from "next/head";
import Body from "../components/cart/Body";

function cart() {
  return (
    <>
      <Head>
        <title>Shopping cart - Devstore</title>
        <meta
          name="description"
          content="Devstore - Find your new favourite collections here"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Body />
    </>
  );
}

export default cart;
