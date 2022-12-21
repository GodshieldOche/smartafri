import { useRouter } from "next/router";
import React from "react";
import { useAppSelector } from "../../hooks/useDispatch";
import { currentUser } from "../../interface";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";
import Subheader from "./Subheader";

interface Props {
  children: React.ReactNode;
  currentUser: currentUser;
}

const BuyerLayout: React.FC<Props> = ({ children, currentUser }) => {
  const { menuState } = useAppSelector((state) => state.menu);
  const router = useRouter();
  return (
    <div>
      <div className="contain">
        {menuState && <Menu menuState={menuState} />}
      </div>
      {!router.pathname.includes("/auth/") ? (
        <>
          <Header user={currentUser} />
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
