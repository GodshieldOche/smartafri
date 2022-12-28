import Head from "next/head";
import Home from "../components/Home";
import { product } from "../interface";
import { getProducts } from "../redux/slice/web/products";
import { wrapper } from "../redux/store";

interface Props {
  products: product[];
}

export default function HomePage({ products }: Props) {
  return (
    <div className="">
      <Head>
        <title>SmartAfri | Home</title>
        <meta name="description" content="SmartAfri by Uniccon Group" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home products={products} />
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({}) => {
      await store.dispatch(getProducts());

      const products = store.getState().products.data;

      console.log("Products", products);
      return {
        props: {
          products,
        },
      };
    }
);
