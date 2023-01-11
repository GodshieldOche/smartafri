import Image from "next/image";
import React from "react";
import { product } from "../interface";
import ProductCarousel from "./Home/ProductCarousel";

interface Props {
  title: string;
  products: product[];
}

const Products: React.FC<Props> = ({ title, products }) => {
  return (
    <div className="sm:container mx-auto sm:px-10 space-y-5">
      <h1 className="headingOne px-[20px] sm:px-0">{title}</h1>
      {products.length > 0 ? (
        <ProductCarousel products={products} />
      ) : (
        <div className=" flex flex-col justify-center items-center space-y-5 text-lg ">
          <Image src="/nodata.svg" height={200} width={300} alt="No Data" />
          <h1 className="text-center text-sm lg:text-lg font-medium text-grayOne ">
            There are no <span className="font-semibold">{title}</span> at the
            moment{" "}
          </h1>
        </div>
      )}
    </div>
  );
};

export default Products;
