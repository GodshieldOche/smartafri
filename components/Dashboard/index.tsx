import { useRouter } from "next/router";
import React, { useEffect } from "react";
import DashboardLinks from "./DashboardLinks";

interface Props {
  children: React.ReactNode;
}

const Dashboard: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    if (pathname === "/dashboard" && screen.width >= 1024) {
      router.push("/dashboard/profile");
    }
  }, []);

  return (
    <div className="!mt-[80px] lg:!mt-[120px] contain grid grid-cols-12 gap-x-5  items-start bg-grayThree lg:bg-white   ">
      <div
        className={` ${
          pathname === "/dashboard"
            ? "col-span-12"
            : "hidden lg:block lg:!col-span-3 "
        } px-1 `}
      >
        <DashboardLinks />
      </div>
      <div
        className={` ${
          pathname === "/dashboard" ? "hidden" : "col-span-12 lg:col-span-9 "
        } h-full lg:px-8 py-6 bg-grayThree`}
      >
        {children}
      </div>
    </div>
  );
};

export default Dashboard;
