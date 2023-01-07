import { useRouter } from "next/router";
import { CarouselProvider } from "pure-react-carousel";
import React, { useEffect, useState } from "react";
import { dummyProducts } from "../../data";
import useAppDispatch, { useAppSelector } from "../../hooks/useDispatch";
import { product } from "../../interface";
import { getProduct } from "../../redux/slice/web/product";
import TabText from "../Common/TabText";
import Products from "../Products";
import Description from "./Description";
import Details from "./Details";
import DetailsCarousel from "./DetailsCarousel";
import Reviews from "./Reviews";
import Specifications from "./Specifications";

const images = [
  "https://res.cloudinary.com/drck33djn/image/upload/v1667296275/w51_1_1_llckia.png",
  "https://res.cloudinary.com/drck33djn/image/upload/v1667296275/w51_1_1_llckia.png",
  "https://res.cloudinary.com/drck33djn/image/upload/v1667296275/w51_1_1_llckia.png",
];

const products = dummyProducts;

const Product: React.FC<{ product: product }> = () => {
  const [active, setActive] = useState<string>("description");

  const {
    data: product,
    loading,
    error,
  } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    dispatch(getProduct(id));
  }, [id]);
  return (
    <>
      {loading ? (
        <div>loading</div>
      ) : (
        <div className="body">
          {/* <h1>//BreadCurmbs</h1> */}
          <div className="contain grid grid-cols-12 gap-y-10 lg:gap-x-10 ">
            <div className="col-span-12 lg:col-span-7">
              <CarouselProvider
                infinite
                naturalSlideWidth={100}
                naturalSlideHeight={100}
                totalSlides={images.length}
                visibleSlides={1}
                isIntrinsicHeight
                dragStep={1}
                className="w-full h-full"
              >
                <DetailsCarousel images={images} />
              </CarouselProvider>
            </div>
            <div className="col-span-12 lg:col-span-5 flex flex-col justify-between space-y-5   lg:max-w-[400px] ">
              <Details product={product as product} />
            </div>
          </div>

          {/* Des, Rev, Spec */}
          <div className="contain flex flex-col space-y-5 lg:space-y-7">
            <div className="grid grid-cols-3 w-full border-b-[1.5px] border-[#E4E4E7] ">
              <TabText
                text="description"
                active={active}
                setActive={setActive}
              />
              <TabText text="reviews" active={active} setActive={setActive} />
              <TabText
                text="specifications"
                active={active}
                setActive={setActive}
              />
            </div>
            <div className="w-full">
              {active === "description" && <Description />}
              {active === "reviews" && <Reviews />}
              {active === "specifications" && <Specifications />}
            </div>
          </div>

          {/* Recently Viewed */}
          <Products products={products} title="Recently Viewed items" />
          {/* You may also like */}
          <Products products={products} title="You may also like" />
        </div>
      )}
    </>
  );
};

export default Product;
