import React from "react";
import ProductCardTwo from "./Common/ProductCardTwo";

interface Props {
  products: number[];
}

const ProductsGrid: React.FC<Props> = ({ products }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-4">
      {products.map((item, index) => (
        <div key={index} className="flex w-full justify-center">
          <ProductCardTwo />
        </div>
      ))}
    </div>
  );
};

export default ProductsGrid;
