import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const DashHeader: React.FC<{ page: string }> = ({ page }) => {
  const [user, setUser] = useState<any>({});

  useEffect(() => {
    const data = localStorage.getItem("user");
    setUser(JSON.parse(data as string));
  }, []);

  return (
    <div className="fixed w-full lg:w-[80%] z-50 py-2 px-4 lg:px-8 bg-primaryOne flex items-center justify-between">
      <h1 className="text-base text-white font-medium capitalize ">{page}</h1>
      <div className="rounded-[20px] bg-[#FAFAFA]  p-2 py-[6px] !pr-6 flex space-x-2 items-center ">
        <div className="relative w-[24px] h-[24px] rounded-full">
          <Image
            src={`https://res.cloudinary.com/drck33djn/image/upload/v1641273086/bookit/avatars/vxzwmriyvmbgqkghvz5f.jpg`}
            fill
            className="rounded-full w-full h-full object-cover object-top"
            alt=""
          />
        </div>
        <h2 className="text-xs capitalize text-primaryOne font-medium ">
          {user.name}
        </h2>
      </div>
    </div>
  );
};

export default DashHeader;
