import React, { useEffect, useRef, useState } from "react";
import ProductCard from "../Common/ProductCard";
import SlideButton from "../Common/SlideButton";

interface Props {
  products: number[];
}

const ProductCarousel: React.FC<Props> = ({ products }) => {
  const scrollRef = useRef<any>(0);
  const [index, setIndex] = useState<number>(0);

  const handleRight = (e: any) => {
    e.preventDefault();
    scrollRef.current.scrollTo({
      left: scrollRef.current.scrollLeft + 400,
      behavior: "smooth",
    });
  };

  const handleLeft = (e: any) => {
    e.preventDefault();
    scrollRef.current.scrollTo({
      left: scrollRef.current.scrollLeft - 400,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full h-full relative p-6 bg-grayThree">
      <div
        ref={scrollRef}
        onScroll={() => setIndex(scrollRef.current.scrollLeft)}
        className="space-x-3 lg:space-x-5 flex w-full h-full items-center overflow-x-auto scroller "
      >
        {products.map((item, index) => (
          <ProductCard key={index} />
        ))}
      </div>
      <div
        onClick={handleLeft}
        className={` ${
          index === 0 ? "hidden" : "hidden lg:block "
        } absolute top-[50%] w-fit rounded-full left-0 `}
      >
        <SlideButton icon="bi:arrow-left-short" />
      </div>
      <div
        onClick={handleRight}
        className=" hidden lg:block absolute top-[50%] right-0 w-fit rounded-full "
      >
        <SlideButton icon="bi:arrow-right-short" />
      </div>
    </div>
  );
};

export default ProductCarousel;
