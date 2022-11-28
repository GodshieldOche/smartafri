import { useRouter } from "next/router";
import React from "react";
import { useAppSelector } from "../../hooks/useDispatch";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";
import Subheader from "./Subheader";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const { menuState } = useAppSelector((state) => state.menu);
  const router = useRouter();
  return (
    <div className="font-Poppins bg-white w-full !h-full ">
      <div className="contain">
        {menuState && <Menu menuState={menuState} />}
      </div>
      <ToastContainer position="bottom-right" />
      {!router.pathname.includes("/auth/") &&
      !router.pathname.includes("/vendor") ? (
        <>
          <Header />
          <div className=" mt-[80px] mb-10 lg:mt-[95px]">
            {router.pathname === "/" && <Subheader />}
            {children}
          </div>
          <Footer />
        </>
      ) : (
        <div className="">
          {router.pathname === "/" && <Subheader />}
          {children}
        </div>
      )}
    </div>
  );
};

export default Layout;
