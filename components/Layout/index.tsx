import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Subheader from "./Subheader";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="font-Poppins bg-white w-full !h-full ">
      <Header />
      <div className="min-h-screen mt-[78px] lg:mt-[84px]">
        <Subheader />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
