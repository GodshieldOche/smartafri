import { useRouter } from "next/router";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Subheader from "./Subheader";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  return (
    <div className="font-Poppins bg-white w-full !h-full ">
      <Header />
      <div className="min-h-screen mt-[78px] lg:mt-[84px]">
        {router.pathname === "/" && <Subheader />}
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
