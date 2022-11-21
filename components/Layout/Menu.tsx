import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import useAppDispatch from "../../hooks/useDispatch";
import { setMenuState } from "../../redux/slice/menu";
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
  const dispatch = useAppDispatch();

  const { id } = router.query;

  return (
    <div
      className={`${
        menuState ? "h-full " : "h-0"
      } !shadow-2xl lg:hidden fixed transition-[hieght] duration-700 ease-in-out  w-[100%] md:w-[40%] bottom-0 bg-grayThree top-0 left-0 overflow-hidden !z-40 `}
    >
      <div className="relative flex flex-col w-full px-5 mt-[90px] h-full ">
        <div className="flex flex-col space-y-6 pb-8 h-[calc(100vh-250px)] scroller overflow-auto overscroll-contain ">
          {cates.map((item, index) => (
            <div
              key={index}
              className={` ${
                id?.includes(item.toLowerCase())
                  ? "text-primaryOne"
                  : "text-grayOne"
              }  text-sm cursor-pointer `}
              onClick={() => {
                dispatch(setMenuState(false));
                setTimeout(() => {
                  router.push(`/${item.toLowerCase()}`);
                }, 1000);
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-grayThree px-5 pt-5 pb-[33px] ">
        <div className="flex space-x-10 mb-[33px]">
          <Dropdown color="text-primaryOne" text="NGN" />
          <Dropdown color="text-primaryOne" text="ENG" />
        </div>
        <Button
          action={() => {
            dispatch(setMenuState(false));
            setTimeout(() => {
              router.push("/auth/signin");
            }, 1000);
          }}
          text="Log In"
        />
      </div>
    </div>
  );
};

export default Menu;
