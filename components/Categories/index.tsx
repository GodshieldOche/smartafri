import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Category from "../Common/Category";
import Pagination from "../Common/Pagination";
import Products from "../Products";
import ProductsGrid from "../ProductsGrid";

const categories = [
  { icon: "ic:baseline-agriculture", text: "agriculture" },
  { icon: "healthicons:electricity", text: "electronics" },
  { icon: "wpf:books", text: "books" },
  { icon: "maki:jewelry-store", text: "accessories" },
  { icon: "fluent:food-apple-20-filled", text: "groceries" },
  { icon: "ic:baseline-fitness-center", text: "fitness" },
];

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

const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const Categories = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className=" body">
      <div className="contain space-y-5">
        <div className="flex justify-between">
          <h1 className="headingOne">Top Categories</h1>
        </div>

        <div className="w-full flex items-center justify-between space-x-3 overflow-x-auto scroller">
          {categories.map((item, index) => (
            <Category icon={item.icon} text={item.text} key={index} />
          ))}
        </div>
      </div>
      <div className="sm:container mx-auto sm:px-10 grid gap-x-5 grid-cols-12">
        <div className="hidden lg:block col-span-3 w-full h-fit bg-grayThree py-6 px-3 space-y-6 ">
          {cates.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div
                className={`${
                  id?.includes(item.toLowerCase()) ? "opacity-100" : "opacity-0"
                } w-[7px] h-[7px] rounded-full bg-primaryOne `}
              ></div>
              <Link
                href={`/${item.toLowerCase()}`}
                className={`${
                  id?.includes(item.toLowerCase())
                    ? "text-primaryOne"
                    : "text-grayOne"
                }  font-medium text-base `}
              >
                {item}
              </Link>
            </div>
          ))}
        </div>
        <div className="col-span-12 lg:col-span-9 px-4 sm:px-0 space-y-6 ">
          {/* description */}
          <div className="flex-col space-y-4 w-full max-w-[638px]">
            <h1 className="text-base lg:text-lg xl:text-[22px] capitalize font-semibold text-primaryOne ">
              {id}
            </h1>
            <p className="text-black text-[13px] lg:text-base leading-[32px] ">
              We offer competitve prices We offer competitve prices on over 10
              million items We offer competitve prices on over 10 million items
            </p>
          </div>

          {/* Products */}
          <ProductsGrid products={products} />
          <div className="flex w-full items justify-center !mt-0">
            <Pagination itemsPerPage={12} page={1} totalItems={36} />
          </div>
        </div>
      </div>
      <Products products={products} title="Recently Viewed items" />
    </div>
  );
};

export default Categories;
