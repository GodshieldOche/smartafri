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
import { cart, currentUser } from "../../interface";
import { getSession, logout } from "../../redux/slice/auth/session";
import { clearCart, getCart, postAddToCart } from "../../redux/slice/cart";

const array = [
  "Best Sellers",
  "New Releases",
  "Books",
  "Computers",
  "Fashion",
  "Health",
  "Toys & Games",
];

const Header: React.FC<{ user: currentUser }> = ({ user }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { menuState } = useAppSelector((state) => state.menu);

  const populateCart = async (token: string, cart: cart[]) => {
    cart.forEach((item) => {
      dispatch(
        postAddToCart({
          token,
          product_id: item.product_id,
          quantity: item.quantity,
        })
      );
    });
  };

  React.useEffect(() => {
    if (!user) {
      localStorage.removeItem("user");
    }
    dispatch(getSession()).then((res: any) => {
      const token = res.payload.token;
      const localCart = localStorage.getItem("cart");
      if (token && localCart) {
        dispatch(clearCart());
        populateCart(token, JSON.parse(localCart)).then(() => {
          dispatch(getCart(token)).then((res: any) => {
            localStorage.removeItem("cart");
          });
        });
      } else if (token && !localCart) {
        dispatch(getCart(token)).then((res: any) => {
          localStorage.removeItem("cart");
        });
      }
    });
  }, []);

  const name = user?.full_name?.split(" ")[0];

  const handleTransition = () => {
    dispatch(logout()).then((res: any) => {
      console.log(res);
      localStorage.removeItem("user");
      const origin = location.origin;
      const newUrl: any = origin + "/vendor/auth/signin";
      location = newUrl as Location;
    });
  };

  return (
    <div className="fixed top-0 right-0 left-0 w-full !z-50 bg-grayThree ">
      {/* Desktop */}
      <div className="contain w-full hidden lg:grid grid-cols-12 items-center gap-10  py-6">
        <div className="col-span-2">
          <Image
            onClick={() => {
              router.push("/");
            }}
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

        <div className="col-span-3 flex justify-end items-center space-x-16">
          <IconText
            icon="clarity:shopping-cart-line"
            text="Cart"
            action={() => router.push("/cart")}
          />
          <IconText
            icon="bi:person"
            text="Become a seller"
            action={handleTransition}
          />
        </div>

        {!user && (
          <div className="col-span-2 flex justify-end">
            <Button action={() => router.push("/auth/signin")} text="Log In" />
          </div>
        )}
        {user && (
          <div
            onClick={() => router.push("/dashboard/profile")}
            className=" col-span-2 cursor-pointer flex items-center justify-end  space-x-2"
          >
            <div>
              <svg
                width="20"
                height="17"
                viewBox="0 0 24 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.3772 7.71066C10.6584 8.42955 9.68333 8.83342 8.66667 8.83342C7.65 8.83342 6.67498 8.42955 5.95609 7.71066C5.2372 6.99177 4.83333 6.01674 4.83333 5.00008C4.83333 3.98342 5.2372 3.0084 5.95609 2.28951C6.67498 1.57062 7.65 1.16675 8.66667 1.16675C9.68333 1.16675 10.6584 1.57062 11.3772 2.28951C12.0961 3.0084 12.5 3.98342 12.5 5.00008C12.5 6.01675 12.0961 6.99177 11.3772 7.71066ZM1.44743 17.5001C1.44685 17.5001 1.446 17.5 1.44488 17.5C1.4402 17.4999 1.43102 17.4995 1.418 17.4985C1.3918 17.4967 1.3511 17.4927 1.30095 17.4843C1.19828 17.4672 1.06903 17.4339 0.945829 17.3723C0.824588 17.3117 0.718558 17.2286 0.64172 17.1134C0.566968 17.0012 0.5 16.8293 0.5 16.5556C0.5 15.9618 0.811383 14.6458 1.97855 13.4786C3.13107 12.3261 5.161 11.2779 8.66667 11.2779C12.1723 11.2779 14.2023 12.3261 15.3548 13.4786C16.522 14.6458 16.8333 15.9618 16.8333 16.5556C16.8333 16.8293 16.7664 17.0012 16.6916 17.1134C16.6148 17.2286 16.5087 17.3117 16.3875 17.3723C16.2643 17.4339 16.1351 17.4672 16.0324 17.4843C15.9822 17.4927 15.9415 17.4967 15.9153 17.4985C15.9023 17.4995 15.8931 17.4999 15.8885 17.5C15.8873 17.5 15.8865 17.5001 15.8859 17.5001H1.44743ZM16.3889 2.83341C16.3889 2.77448 16.4123 2.71795 16.454 2.67628L16.1004 2.32273L16.454 2.67628C16.4957 2.63461 16.5522 2.61119 16.6111 2.61119H22.3889C22.4478 2.61119 22.5044 2.6346 22.546 2.67628C22.5877 2.71795 22.6111 2.77448 22.6111 2.83341C22.6111 2.89235 22.5877 2.94888 22.546 2.99055C22.5044 3.03223 22.4478 3.05564 22.3889 3.05564H16.6111C16.5522 3.05564 16.4957 3.03222 16.454 2.99055L16.1004 3.3441L16.454 2.99055C16.4123 2.94888 16.3889 2.89235 16.3889 2.83341ZM16.454 7.00961C16.4957 6.96794 16.5522 6.94453 16.6111 6.94453H22.3889C22.4478 6.94453 22.5044 6.96794 22.546 7.00961C22.5877 7.05129 22.6111 7.10781 22.6111 7.16675C22.6111 7.22569 22.5877 7.28221 22.546 7.32388C22.5044 7.36556 22.4478 7.38897 22.3889 7.38897H16.6111C16.5522 7.38897 16.4957 7.36556 16.454 7.32388C16.4123 7.28221 16.3889 7.22569 16.3889 7.16675C16.3889 7.10781 16.4123 7.05129 16.454 7.00961L16.1004 6.65606L16.454 7.00961ZM19.3429 11.3429C19.3845 11.3013 19.4411 11.2779 19.5 11.2779H22.3889C22.4478 11.2779 22.5044 11.3013 22.546 11.3429C22.5877 11.3846 22.6111 11.4411 22.6111 11.5001C22.6111 11.559 22.5877 11.6155 22.546 11.6572C22.5044 11.6989 22.4478 11.7223 22.3889 11.7223H19.5C19.4411 11.7223 19.3845 11.6989 19.3429 11.6572C19.3012 11.6155 19.2778 11.559 19.2778 11.5001C19.2778 11.4411 19.3012 11.3846 19.3429 11.3429ZM19.3429 15.6763C19.3845 15.6346 19.4411 15.6112 19.5 15.6112H22.3889C22.4478 15.6112 22.5044 15.6346 22.546 15.6763C22.5877 15.718 22.6111 15.7745 22.6111 15.8334C22.6111 15.8924 22.5877 15.9489 22.546 15.9905C22.5044 16.0322 22.4478 16.0556 22.3889 16.0556H19.5C19.4411 16.0556 19.3845 16.0322 19.3429 15.9906C19.3012 15.9489 19.2778 15.8924 19.2778 15.8334C19.2778 15.7745 19.3012 15.718 19.3429 15.6763Z"
                  stroke="#4082E6"
                />
              </svg>
            </div>

            <h1 className="tex-base text-primaryOne ">{name}</h1>
          </div>
        )}
      </div>

      {router.pathname === "/" && (
        <div className="w-full overflow-hidden bg-primaryOne">
          {/* Desktop */}
          <div className="contain w-full hidden lg:flex items-center justify-between py-4">
            <h2 className="text-[13px] !font-Poppins cursor-pointer !font-medium tracking-wide text-grayThree capitalize">
              All Categories
            </h2>
            <div className="flex items-center space-x-9 ">
              {array.map((item, index) => (
                <h2
                  key={index}
                  className="text-[13px] !font-Poppins !font-light tracking-wide text-grayThree capitalize cursor-pointer"
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
              className="!text-[32px] !text-grayOne cursor-pointer"
            />
          </div>

          <div>
            <Image
              onClick={() => {
                dispatch(setMenuState(false));
                setTimeout(() => {
                  router.push(`/`);
                }, 1000);
              }}
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
