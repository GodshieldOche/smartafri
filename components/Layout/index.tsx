import { useRouter } from "next/router";
import React, { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import VendorDashLayout from "../Vendor";
import BuyerLayout from "./BuyerLayout";

interface Props {
  children: React.ReactNode;
  currentUser: any;
}

const Layout: React.FC<Props> = ({ children, currentUser }) => {
  const [user, setUser] = React.useState<any>(null);
  const router = useRouter();

  React.useEffect(() => {
    if (currentUser) {
      console.log(currentUser);
      localStorage.setItem("user", JSON.stringify(currentUser));

      const data = localStorage.getItem("user");
      setUser(JSON.parse(data as string));
    }
  }, []);

  return (
    <div className="font-Poppins bg-white w-full !h-full ">
      <ToastContainer position="bottom-right" />
      {router.pathname.includes("/vendor") ? (
        <VendorDashLayout>{children}</VendorDashLayout>
      ) : (
        <BuyerLayout currentUser={user}>{children}</BuyerLayout>
      )}
    </div>
  );
};

export default Layout;
