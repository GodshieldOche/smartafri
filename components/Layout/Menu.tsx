import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Button from "../Common/Button";
import Dropdown from "../Common/Dropdown";

interface Props {
  menuState: boolean;
}

const cates = [
  "Agriculture",
  "Electronics",
  "Fashion",
  "Gift Cards",
  "NFTs",
  "Pet Supplies",
  "Bags & Accessories",
  "Beauty & Hair",
  "Books",
  "Fabrics",
  "Groceries",
  "Home & Art",
  "Jewlery",
  "Kids & Babies",
  "Sports & Fitness",
];

const Menu: React.FC<Props> = ({ menuState }) => {
  const router = useRouter();

  const { id } = router.query;

  return (
    <div
      className={`${
        menuState ? " w-[100%] md:w-[40%] " : "w-0"
      } !shadow-2xl lg:hidden fixed transition-all duration-700 ease-in-out bottom-0 bg-grayThree top-0 left-0 overflow-hidden !z-40 `}
    >
      <div className="relative flex flex-col w-full px-5 mt-[90px] h-full ">
        <div className="flex flex-col space-y-6 pb-8 h-[calc(100vh-250px)] scroller scrollerSec overflow-auto overscroll-contain ">
          {cates.map((item, index) => (
            <Link
              href={`/${item.toLowerCase()}`}
              key={index}
              className={` ${
                id?.includes(item.toLowerCase())
                  ? "text-primaryOne"
                  : "text-grayOne"
              }  font-medium text-[15px] `}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-grayThree px-5 pt-5 pb-[33px] ">
        <div className="flex space-x-10 mb-[33px]">
          <Dropdown color="text-primaryOne" text="NGN" />
          <Dropdown color="text-primaryOne" text="ENG" />
        </div>
        <Button text="Log In" />
      </div>
    </div>
  );
};

export default Menu;
