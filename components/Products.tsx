import React from "react";
import ProductCarousel from "./Home/ProductCarousel";

interface Props {
  title: string;
  products: number[];
}

const Products: React.FC<Props> = ({ title, products }) => {
  return (
    <div className="sm:container mx-auto sm:px-10 space-y-5">
      <h1 className="headingOne px-[20px] sm:px-0">{title}</h1>
      <ProductCarousel products={products} />
    </div>
  );
};

export default Products;
