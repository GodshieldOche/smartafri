import { useRouter } from "next/router";
import React from "react";
import { useAppSelector } from "../../hooks/useDispatch";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";
import Subheader from "./Subheader";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import VendorDashLayout from "../Vendor";
import BuyerLayout from "./BuyerLayout";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const { menuState } = useAppSelector((state) => state.menu);
  const router = useRouter();
  return (
    <div className="font-Poppins bg-white w-full !h-full ">
      {router.pathname.includes("/vendor") ? (
        <VendorDashLayout>{children}</VendorDashLayout>
      ) : (
        <BuyerLayout>{children}</BuyerLayout>
      )}
    </div>
  );
};

export default Layout;
