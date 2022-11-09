import Image from "next/image";
import React from "react";
import logo from "../../public/main.png";
import logoMobile from "../../public/main2.png";
import Button from "../Common/Button";
import IconText from "../Common/IconText";
import SearchInput from "../Common/SearchInput";
import { Icon } from "@iconify/react";
import Dropdown from "../Common/Dropdown";
import { useRouter } from "next/router";
import useAppDispatch, { useAppSelector } from "../../hooks/useDispatch";
import { setMenuState } from "../../redux/slice/menu";

const array = [
  "Best Sellers",
  "New Releases",
  "Books",
  "Computers",
  "Fashion",
  "Health",
  "Toys & Games",
];

const Header = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { menuState } = useAppSelector((state) => state.menu);

  return (
    <div className="fixed top-0 right-0 left-0 w-full !z-50 bg-grayThree ">
      {/* Desktop */}
      <div className="contain w-full hidden lg:grid grid-cols-12 items-center gap-10  py-6">
        <div className="col-span-2">
          <Image
            onClick={() => router.push("/")}
            className="cursor-pointer"
            src={logo}
            width={174}
            height={17}
            alt="logo"
          />
        </div>

        <div className="col-span-5 w-full">
          <SearchInput
            value={""}
            placeholder="Search for products, brands and categories"
            type="text"
          />
        </div>

        <div className="col-span-3 flex justify-end items-center space-x-8">
          <IconText icon="clarity:shopping-cart-solid" text="Cart" />
          <IconText icon="bi:person-fill" text="Become a seller" />
        </div>

        <div className="col-span-2 flex justify-end">
          <Button text="Log In" />
        </div>
      </div>

      {router.pathname === "/" && (
        <div className="w-full overflow-hidden bg-primaryOne">
          {/* Desktop */}
          <div className="contain w-full hidden lg:flex items-center justify-between py-4">
            <h2 className="text-[13px] !font-Poppins !font-medium tracking-wide text-grayThree capitalize">
              All Categories
            </h2>
            <div className="flex items-center space-x-9 ">
              {array.map((item, index) => (
                <h2
                  key={index}
                  className="text-[13px] !font-Poppins !font-light tracking-wide text-grayThree capitalize"
                >
                  {item}
                </h2>
              ))}
            </div>
            <div className="flex items-center space-x-6 ">
              <Dropdown color="text-white" text="NGN" />
              <Dropdown color="text-white" text="ENG" />
            </div>
          </div>
        </div>
      )}

      {/* Mobile */}
      <div className="contain w-full flex  items-center justify-between lg:hidden py-6 ">
        <div className="flex items-center space-x-6">
          <div onClick={() => dispatch(setMenuState(true))}>
            <Icon
              icon="ion:menu-outline"
              className="!text-[32px] !text-grayOne"
            />
          </div>

          <div>
            <Image
              onClick={() => router.push("/")}
              className="cursor-pointer"
              src={logoMobile}
              alt="logo"
            />
          </div>
        </div>
        {menuState ? (
          <Icon
            icon="iconoir:cancel"
            className=" !text-2xl !font-medium !text-grayOne cursor-pointer"
            onClick={() => dispatch(setMenuState(false))}
          />
        ) : (
          <Icon
            icon="ant-design:search-outlined"
            className=" !text-xl !font-medium !text-grayOne cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default Header;
