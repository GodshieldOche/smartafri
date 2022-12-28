import Head from "next/head";
import Product from "../../components/Product";
import { product } from "../../interface";
import { getProduct } from "../../redux/slice/web/product";
import { wrapper } from "../../redux/store";

export default function HomePage({ product }: { product: product }) {
  return (
    <div className="">
      <Head>
        <title>SmartAfri | Product Details</title>
        <meta name="description" content="SmartAfri by Uniccon Group" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Product product={product} />
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ query }) => {
      await store.dispatch(getProduct(query.id));

      const product = store.getState().product.data;

      return {
        props: {
          product,
        },
      };
    }
);
