import { useRouter } from "next/router";
import React from "react";
import Button from "../Common/Button";

import Image from "next/image";
import { Icon } from "@iconify/react";

const CartCard = () => {
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
          MAM Feed & Soothe Essenti...
        </h1>
        <h1 className="text-[11px] lg:text-sm text-grayOne">
          Seller: James Bond
        </h1>
        <h1 className="text-[13px] lg:text-base text-primaryOne font-semibold ">
          2,000
        </h1>
      </div>
      <div className="col-span-3 h-full flex flex-col justify-between items-end w-full">
        <div className="flex items-center space-x-3 lg:space-x-3 ">
          <Icon
            icon="akar-icons:circle-minus-fill"
            className="!text-primaryOne !text-xs lg:!text-base cursor-pointer"
          />
          <h1 className="text-xs lg:text-sm text-black  ">2</h1>
          <Icon
            icon="akar-icons:circle-plus-fill"
            className="!text-primaryOne !text-xs lg:!text-base cursor-pointer"
          />
        </div>
        <Icon
          icon="bxs:trash"
          className="!text-grayFour !text-base lg:!text-xl cursor-pointer"
        />
      </div>
    </div>
  );
};

const Cart = () => {
  const router = useRouter();
  const { pathname } = router;

  React.useEffect(() => {
    if (pathname === "/dashboard" && screen.width >= 1024) {
      router.push("/dashboard/profile");
    }
  }, []);
  return (
    <div className="!mt-[100px] lg:!mt-[120px] contain grid grid-cols-12 gap-x-5  items-start   ">
      <div
        className={`hidden lg:flex lg:!col-span-3 px-4 py-8 bg-grayThree flex-col space-y-10  `}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-base text-grayOne font-medium ">Sub Total</h3>
          <h3 className="text-xl font-bold text-primaryOne  ">₦4,000</h3>
        </div>
        <Button
          text="Check Out"
          width="w-full"
          action={() => router.push("/checkout/address")}
        />
      </div>
      <div
        className={`col-span-12 lg:col-span-9  h-full lg:px-8 py-2 lg:py-6  lg:bg-grayThree`}
      >
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="dash-header">Cart (123)</h1>
          </div>
          <div className="flex flex-col space-y-6">
            <CartCard />
            <CartCard />
            <CartCard />
            <CartCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
