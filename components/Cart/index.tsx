import { useRouter } from "next/router";
import React from "react";
import Button from "../Common/Button";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { cart } from "../../interface";
import useAppDispatch, { useAppSelector } from "../../hooks/useDispatch";
import {
  clearCart,
  decrement,
  deleteFromCart,
  deleteItem,
  getCart,
  increment,
  updateQuantity,
} from "../../redux/slice/cart";
import { getSession } from "../../redux/slice/auth/session";
import { setRedirect } from "../../redux/slice/menu";

const CartCard: React.FC<{
  item: cart;
  isLoggedIn: boolean;
  token: string;
}> = ({ item, isLoggedIn, token }) => {
  const dispatch = useAppDispatch();

  const handleIncrement = (id: number, quantity: number) => {
    if (!isLoggedIn) {
      return dispatch(increment(id));
    }

    dispatch(updateQuantity({ token, id, quantity }));
  };

  const handleDecrement = (id: number, quantity: number) => {
    if (!isLoggedIn) {
      return dispatch(decrement(id));
    }

    dispatch(updateQuantity({ token, id, quantity }));
  };

  const handleDelete = (id: number) => {
    if (!isLoggedIn) {
      return dispatch(deleteFromCart(id));
    }

    dispatch(deleteItem({ token, id }));
  };

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
          {item?.product?.name}
        </h1>
        <h1 className="text-[11px] lg:text-sm text-grayOne capitalize">
          Seller: {item?.product?.brand}
        </h1>
        <h1 className="text-[13px] lg:text-base text-primaryOne font-semibold ">
          ₦ {item?.product?.price?.toLocaleString()}
        </h1>
      </div>
      <div className="col-span-3 h-full flex flex-col justify-between items-end w-full">
        <div className="flex items-center space-x-3 lg:space-x-3 ">
          <Icon
            icon="akar-icons:circle-minus-fill"
            className="!text-primaryOne !text-sm lg:!text-base cursor-pointer"
            onClick={() =>
              item?.quantity > 1 && handleDecrement(item?.id, item.quantity - 1)
            }
          />
          <h1 className="text-xs lg:text-sm text-black  ">{item?.quantity}</h1>
          <Icon
            icon="akar-icons:circle-plus-fill"
            className="!text-primaryOne !text-sm lg:!text-base cursor-pointer"
            onClick={() =>
              item?.quantity < item?.product?.quantity &&
              handleIncrement(item?.id, item?.quantity + 1)
            }
          />
        </div>
        <Icon
          icon="bxs:trash"
          className="!text-grayFour !text-base lg:!text-xl cursor-pointer"
          onClick={() => handleDelete(item?.id)}
        />
      </div>
    </div>
  );
};

const Cart = () => {
  const [quantity, setQuantity] = React.useState(0);
  const [total, setTotal] = React.useState(0);
  const [isLoggedIn, setisLoggedIn] = React.useState(false);
  const [token, setToken] = React.useState("");

  const router = useRouter();
  const dispatch = useAppDispatch();
  const { data: cart, loading } = useAppSelector((state) => state.cart);

  React.useEffect(() => {
    setQuantity(cart.reduce((acc, item) => acc + item.quantity, 0));
    setTotal(
      cart.reduce((acc, item) => acc + item.quantity * item.product.price, 0)
    );

    dispatch(getSession()).then((res: any) => {
      const token = res.payload.token;
      setToken(token);
      setisLoggedIn(token ? true : false);
    });
  }, [cart]);

  const handleCheckOut = () => {
    if (token) {
      return router.push("/checkout/address");
    }

    dispatch(setRedirect("/checkout/address"));
    router.push("/auth/signin");
  };

  return (
    <div className="!mt-[100px] lg:!mt-[120px] contain grid grid-cols-12 gap-x-5  items-start   ">
      <div
        className={`col-span-12 order-last lg:order-first lg:!col-span-3 lg:px-3 py-8 lg:bg-grayThree flex-col space-y-10  `}
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
          action={handleCheckOut}
          disabled={quantity === 0}
        />
      </div>
      {loading ? (
        <div>loading...</div>
      ) : (
        <div
          className={`col-span-12 lg:col-span-9  h-full lg:px-8 py-2 lg:py-6  lg:bg-grayThree`}
        >
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="dash-header">Cart ({quantity})</h1>
            </div>
            <div className="flex flex-col space-y-6">
              {cart.map((item) => (
                <CartCard
                  isLoggedIn={isLoggedIn}
                  token={token}
                  item={item}
                  key={item.id}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
