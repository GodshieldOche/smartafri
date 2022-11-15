import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Common/Button";
import DashIconText from "../Common/DashIconText";

const DashboardLinks = () => {
  const [active, setActive] = useState("personal information");
  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    if (pathname.includes("/profile")) {
      setActive("personal information");
    } else if (pathname.includes("/orders")) {
      setActive("orders");
    }
  }, [pathname]);

  return (
    <div className="bg-grayThree py-6 lg:p-6">
      <div className="lg:hidden space-y-3 mb-[40px]">
        <h1 className="text-base font-[700]  text-primaryOne">
          Johnson Adewale
        </h1>
        <h1 className="text-sm text-secondaryThree">example@gmail.com</h1>
      </div>
      <div className="flex flex-col space-y-12 lg:space-y-9 ">
        <DashIconText
          active={active}
          link="profile"
          text="Personal Information"
          icon="bi:person-lines-fill"
        />
        <DashIconText
          active={active}
          link="orders"
          text="Orders"
          icon="heroicons-solid:cube"
        />
        <DashIconText
          active={active}
          link="whitelist"
          text="Whitelist"
          icon="bi:suit-heart-fill"
        />
        <DashIconText
          active={active}
          link="recents"
          text="Recently Viewed"
          icon="eva:eye-fill"
        />
        <DashIconText
          active={active}
          link="reviews"
          text="Pending Reviews"
          icon="fluent:person-feedback-16-filled"
        />
        <DashIconText
          active={active}
          link="help"
          text="Help"
          icon="fluent:chat-help-20-filled"
        />
        <Button text="Log Out" color="bg-primaryTwo" width="w-full" />
      </div>
    </div>
  );
};

export default DashboardLinks;
