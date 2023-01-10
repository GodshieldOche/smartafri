import { Icon } from "@iconify/react";
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
    <>
      <div className="fixed hidden w-[80%] z-50 py-3 px-4 lg:px-8 bg-primaryOne lg:flex items-center justify-between">
        <h1 className="text-base text-white font-medium capitalize ">{page}</h1>
        <div>
          <svg
            width="32"
            height="29"
            viewBox="0 0 32 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.2735 0.00238259C7.43846 -0.148561 0.153328 6.89144 0.00238417 15.7265C-0.0833517 20.736 2.1494 25.2383 5.70442 28.2324C5.93687 28.0295 6.18623 27.8436 6.46337 27.6926L11.2374 25.0886C11.8635 24.7468 12.2536 24.0905 12.2536 23.3769V21.4206C12.2536 21.4206 10.8522 19.7446 10.3179 17.4158C9.87469 17.129 9.57763 16.6333 9.57763 16.0688V13.9278C9.57763 13.4569 9.78714 13.036 10.1126 12.7414V9.64646C10.1126 9.64646 9.4768 4.83016 15.9994 4.83016C22.5219 4.83016 21.8862 9.64646 21.8862 9.64646V12.7414C22.2122 13.036 22.4211 13.4569 22.4211 13.9278V16.0688C22.4211 16.7885 21.9381 17.3941 21.2824 17.5963C20.9171 18.732 20.39 19.8146 19.6933 20.7988C19.5176 21.0469 19.3533 21.257 19.2096 21.4206V23.4264C19.2096 24.1648 19.6268 24.8404 20.2874 25.1701L25.3995 27.7259C25.7062 27.8792 25.9834 28.073 26.2388 28.2886C29.6863 25.4134 31.9136 21.1145 31.9963 16.2735C32.1485 7.43846 25.1091 0.153326 16.2735 0.00238259Z"
              fill="#D1D1D1"
            />
          </svg>
        </div>
        {/* <div className="rounded-[20px] bg-[#FAFAFA]  p-2 py-[6px] !pr-6 flex space-x-2 items-center ">
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
        </div> */}
      </div>

      <div className="fixed flex lg:hidden bg-white  w-full z-50 py-3 px-4 md:px-10  items-center justify-between">
        <Icon icon="eva:menu-outline" className="!text-3xl !text-grayOne" />
        <h1 className="text-base text-primaryOne font-semibold ">Home</h1>
        <div>
          <svg
            width="32"
            height="29"
            viewBox="0 0 32 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.2735 0.00238259C7.43846 -0.148561 0.153328 6.89144 0.00238417 15.7265C-0.0833517 20.736 2.1494 25.2383 5.70442 28.2324C5.93687 28.0295 6.18623 27.8436 6.46337 27.6926L11.2374 25.0886C11.8635 24.7468 12.2536 24.0905 12.2536 23.3769V21.4206C12.2536 21.4206 10.8522 19.7446 10.3179 17.4158C9.87469 17.129 9.57763 16.6333 9.57763 16.0688V13.9278C9.57763 13.4569 9.78714 13.036 10.1126 12.7414V9.64646C10.1126 9.64646 9.4768 4.83016 15.9994 4.83016C22.5219 4.83016 21.8862 9.64646 21.8862 9.64646V12.7414C22.2122 13.036 22.4211 13.4569 22.4211 13.9278V16.0688C22.4211 16.7885 21.9381 17.3941 21.2824 17.5963C20.9171 18.732 20.39 19.8146 19.6933 20.7988C19.5176 21.0469 19.3533 21.257 19.2096 21.4206V23.4264C19.2096 24.1648 19.6268 24.8404 20.2874 25.1701L25.3995 27.7259C25.7062 27.8792 25.9834 28.073 26.2388 28.2886C29.6863 25.4134 31.9136 21.1145 31.9963 16.2735C32.1485 7.43846 25.1091 0.153326 16.2735 0.00238259Z"
              fill="#D1D1D1"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default DashHeader;
