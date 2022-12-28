import { useRouter } from "next/router";
import React from "react";
import Button from "../Common/Button";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { cart } from "../../interface";
import useAppDispatch, { useAppSelector } from "../../hooks/useDispatch";
import { decrement, deleteFromCart, increment } from "../../redux/slice/cart";

const CartCard: React.FC<{
  item: cart;
}> = ({ item }) => {
  const dispatch = useAppDispatch();
  return (
    <div className="grid grid-cols-12 gap-x-5 border border-grayTwo/30 bg-white p-3  lg:py-4 lg:px-6 rounded-[8px] ">
      <div className=" col-span-2 sm:col-span-1 w-9 lg:w-[40px] h-[40px] relative justify-start">
        <Image
          src={
            "https://res.cloudinary.com/drck33djn/image/upload/v1671010146/bookit/product_hampua.png"
          }
          fill
          alt="image 1"
        />
      </div>
      <div className="col-span-7 lg:col-span-8 space-y-2 w-full">
        <h1 className="text-xs lg:text-sm font-semibold text-black ">
          {item?.name}
        </h1>
        <h1 className="text-[11px] lg:text-sm text-grayOne capitalize">
          Seller: {item?.seller}
        </h1>
        <h1 className="text-[13px] lg:text-base text-primaryOne font-semibold ">
          ₦ {item?.price?.toLocaleString()}
        </h1>
      </div>
      <div className="col-span-3 h-full flex flex-col justify-between items-end w-full">
        <div className="flex items-center space-x-3 lg:space-x-3 ">
          <Icon
            icon="akar-icons:circle-minus-fill"
            className="!text-primaryOne !text-sm lg:!text-base cursor-pointer"
            onClick={() => item?.quantity > 1 && dispatch(decrement(item?.id))}
          />
          <h1 className="text-xs lg:text-sm text-black  ">{item?.quantity}</h1>
          <Icon
            icon="akar-icons:circle-plus-fill"
            className="!text-primaryOne !text-sm lg:!text-base cursor-pointer"
            onClick={() =>
              item?.quantity < item?.max && dispatch(increment(item?.id))
            }
          />
        </div>
        <Icon
          icon="bxs:trash"
          className="!text-grayFour !text-base lg:!text-xl cursor-pointer"
          onClick={() => dispatch(deleteFromCart(item?.id))}
        />
      </div>
    </div>
  );
};

const Cart = () => {
  const [quantity, setQuantity] = React.useState(0);
  const [total, setTotal] = React.useState(0);

  const router = useRouter();
  const cart = useAppSelector((state) => state.cart.data);

  React.useEffect(() => {
    setQuantity(cart.reduce((acc, item) => acc + item.quantity, 0));
    setTotal(cart.reduce((acc, item) => acc + item.quantity * item.price, 0));
  }, [cart]);

  return (
    <div className="!mt-[100px] lg:!mt-[120px] contain grid grid-cols-12 gap-x-5  items-start   ">
      <div
        className={`col-span-12 order-last lg:order-first lg:!col-span-3 lg:px-4 py-8 lg:bg-grayThree flex-col space-y-10  `}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-sm lg:text-base text-grayOne font-medium ">
            Sub Total
          </h3>
          <h3 className="text-lg lg:text-xl font-bold text-primaryOne  ">
            ₦{total.toLocaleString()}
          </h3>
        </div>
        <Button
          text="Check Out"
          width="w-full"
          color="bg-primaryTwo"
          action={() => router.push("/checkout/address")}
        />
      </div>
      <div
        className={`col-span-12 lg:col-span-9  h-full lg:px-8 py-2 lg:py-6  lg:bg-grayThree`}
      >
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="dash-header">Cart ({quantity})</h1>
          </div>
          <div className="flex flex-col space-y-6">
            {cart.map((item) => (
              <CartCard item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
