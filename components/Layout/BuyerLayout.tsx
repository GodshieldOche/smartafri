import { useRouter } from "next/router";
import React from "react";
import { ToastContainer } from "react-toastify";
import { useAppSelector } from "../../hooks/useDispatch";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";
import Subheader from "./Subheader";

interface Props {
  children: React.ReactNode;
}

const BuyerLayout: React.FC<Props> = ({ children }) => {
  const { menuState } = useAppSelector((state) => state.menu);
  const router = useRouter();
  return (
    <div>
      <div className="contain">
        {menuState && <Menu menuState={menuState} />}
      </div>
      <ToastContainer position="bottom-right" />
      {!router.pathname.includes("/auth/") ? (
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

export default BuyerLayout;
