import "../styles/globals.css";
import { Provider, createClient } from "urql";
import Layout from "../components/layout/Layout";

const client = createClient({ url: process.env.NEXT_PUBLIC_STRAPI_API });

function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
