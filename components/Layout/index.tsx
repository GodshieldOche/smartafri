import { useRouter } from "next/router";
import React from "react";
import { useAppSelector } from "../../hooks/useDispatch";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";
import Subheader from "./Subheader";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const { menuState } = useAppSelector((state) => state.menu);
  const router = useRouter();
  return (
    <div className="font-Poppins bg-white w-full !h-full ">
      {menuState && <Menu menuState={menuState} />}
      <Header />
      <div className=" mt-[80px] mb-10 lg:mt-[95px]">
        {router.pathname === "/" && <Subheader />}
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
