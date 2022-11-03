import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface Props {
  brand: string;
}

const Brand: React.FC<Props> = ({ brand }) => {
  const router = useRouter();

  const { id } = router.query;

  return (
    <Link
      href={`/brands/${brand}`}
      className={` ${
        id ? "border space-x-2" : "border-0 space-x-4 lg:space-x-6"
      } w-full p-2 pr-5 lg:p-3 flex items-center   bg-white rounded-[10px] `}
    >
      <div className=" flex items-center justify-center rounded-full bg-[#F1F1F1] p-2 w-[35px] h-[35px]  lg:w-[40px] lg:h-[40px] ">
        <div className="relative w-full h-full rounded-full">
          <Image
            src={`https://res.cloudinary.com/drck33djn/image/upload/v1667211582/image_19_kc5ruz.png`}
            fill
            alt="brand"
          />
        </div>
      </div>
      <h1 className=" font-medium text-sm lg:text-lg text-primaryOne  ">
        Addidas
      </h1>
    </Link>
  );
};

export default Brand;
