import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import Rating from "./Rating";
import { cart, product } from "../../interface";
import { useRouter } from "next/router";
import useAppDispatch, { useAppSelector } from "../../hooks/useDispatch";
import { addToCart } from "../../redux/slice/cart";

const ProductCard: React.FC<{ product: product }> = ({ product }) => {
  const [showAddToCart, setShowAddToCart] = useState(false);
  const [inCart, setInCart] = React.useState(false);

  const cart = useAppSelector((state) => state.cart.data);

  const router = useRouter();
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const inCart = cart.find(
      (item) => item.id.toString() === product.id.toString()
    );

    setInCart(inCart ? true : false);
  }, [cart]);

  const handleAddToCart = () => {
    const item = {
      name: product.name,
      seller: product.brand,
      price: product.price,
      quantity: 1,
      id: product.id,
      max: product.quantity,
    };

    dispatch(addToCart(item));

    setInCart(true);
  };

  const handleGoToCart = () => {
    router.push("/cart");
  };

  return (
    <div className="flex flex-col bg-white rounded-[10px] w-fit shadow-sm border-[#b0babf]/20 !my-2 ">
      <div
        onMouseOver={() => setShowAddToCart(true)}
        onMouseOut={() => setShowAddToCart(false)}
        className=" relative w-[205px] h-[150px] lg:w-[275px] lg:h-[210px] flex items-center justify-center bg-[#F1F1F1] rounded-t-[10px] "
      >
        <div className=" w-[80px] h-[80px] lg:w-[145px] lg:h-[145px] relative">
          <Image
            src={
              "https://res.cloudinary.com/drck33djn/image/upload/v1671010146/bookit/product_hampua.png"
            }
            fill
            alt="image 1"
          />
        </div>
        {showAddToCart && (
          <div
            onClick={inCart ? handleGoToCart : handleAddToCart}
            className="absolute hidden lg:block bottom-5 py-2 px-6 lg:px-7 bg-primaryOne text-white text-xs lg:text-sm cursor-pointer"
          >
            {inCart ? "Go To Cart" : "Add To Cart"}
          </div>
        )}
      </div>
      <div className="flex flex-col !my-6 px-4 space-y-3">
        <Link href={`/products/${product.id}`}>
          <h1 className="text-xs lg:text-base font-medium text-black">
            {product.name}
          </h1>
        </Link>
        <h1 className="text-primaryOne  text-base lg:text-xl font-[700]  ">
          ₦ {Number(product.price).toLocaleString()}
        </h1>
        <Rating />
      </div>
    </div>
  );
};

export default ProductCard;
