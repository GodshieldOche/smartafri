import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import React from "react";
import useAppDispatch, { useAppSelector } from "../../hooks/useDispatch";
import { cart, product } from "../../interface";
import { getSession } from "../../redux/slice/auth/session";
import { addToCart, postAddToCart } from "../../redux/slice/cart";
import Button from "../Common/Button";
import Rating from "../Common/Rating";

const Details: React.FC<{ product: product }> = ({ product }) => {
  const [quantity, setQuantity] = React.useState(1);
  const [token, setToken] = React.useState("");
  const [inCart, setInCart] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [isLoggedIn, setisLoggedIn] = React.useState(false);

  const cart = useAppSelector((state) => state.cart.data);
  const router = useRouter();
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    setLoading(true);
    const inCart = cart.find(
      (item) => item.product_id.toString() === product.id.toString()
    );
    setInCart(inCart ? true : false);
    setLoading(false);
  }, [cart]);

  React.useEffect(() => {
    dispatch(getSession()).then((res: any) => {
      const token = res.payload.token;
      setToken(token);
      setisLoggedIn(token ? true : false);
    });
  }, []);

  const handleIncrement = () => {
    if (quantity < product.quantity) {
      setQuantity((prev) => prev + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    setLoading(true);

    const item: cart = {
      quantity: quantity,
      id: cart.length,
      product: product,
      product_id: product.id,
    };

    if (!isLoggedIn) {
      dispatch(addToCart(item));
      setInCart(true);
      setLoading(false);
      return;
    }

    dispatch(postAddToCart({ token, product_id: product.id, quantity })).then(
      () => {
        setInCart(true);
        setLoading(false);
      }
    );
  };

  const handleGoToCart = () => {
    router.push("/cart");
  };

  return (
    <>
      {/* Name */}
      <h1 className="text-black text-base lg:text-xl xl:text-2xl font-semibold ">
        {product.name}
      </h1>
      {/* Rating */}
      <Rating />
      {/* Price */}
      <div className="space-y-5">
        <h1 className="text-primaryOne  text-xl lg:text-[28px] font-[700]  ">
          ₦ {product.price.toLocaleString()}
        </h1>
        <div className="flex items-center space-x-2">
          <Icon icon="clarity:tag-solid" className="!text-grayOne !text-sm" />
          <span className="text-grayOne text-xs lg:text-sm ">
            excl. VAT , Free shipping
          </span>
        </div>
      </div>
      {/* Quantity */}
      <div className="flex items-center !mt-6 lg:!my-0 space-x-3 lg:space-x-6 ">
        <Icon
          icon="akar-icons:circle-minus-fill"
          className="!text-primaryOne !text-xl lg:!text-2xl cursor-pointer"
          onClick={handleDecrement}
        />
        <h1 className="text-xs lg:text-base text-black w-5 flex justify-center  ">
          {quantity}
        </h1>
        <Icon
          icon="akar-icons:circle-plus-fill"
          className="!text-primaryOne !text-xl lg:!text-2xl cursor-pointer"
          onClick={handleIncrement}
        />
      </div>
      {/* Action */}
      <div className="flex items-center !mt-5 lg:!my-0 space-x-3 md:space-x-5">
        <Button
          text={inCart ? "Go To Cart" : "Add To Cart"}
          action={inCart ? handleGoToCart : handleAddToCart}
          loading={loading}
        />
        <div className="py-4 lg:py-3 px-5 lg:px-4 cursor-pointer bg-grayThree rounded-[5px] border border-grayTwo/30">
          <Icon icon="bi:heart-fill" className="!text-primaryOne !text-base" />
        </div>
      </div>
      <div className="space-y-4 lg:space-y-5">
        <div className="flex items-center space-x-2">
          <Icon
            icon="fluent:vehicle-truck-24-filled"
            className="!text-xl !text-primaryOne "
          />
          <h1 className="text-xs lg:text-sm text-[#52525B]">
            Free shipping worldwide
          </h1>
        </div>
        <div className="flex items-center space-x-2">
          <Icon icon="bxs:credit-card" className="!text-xl !text-primaryOne " />
          <h1 className="text-xs lg:text-sm text-[#52525B]">
            100% Secured Payment
          </h1>
        </div>
      </div>
    </>
  );
};

export default Details;
