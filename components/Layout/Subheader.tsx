import React from "react";
import IconText from "../Common/IconText";

const Subheader = () => {
  return (
    <div className="w-full overflow-hidden bg-grayThree">
      {/* Mobile */}
      <div className="contain w-full flex lg:hidden items-center justify-around py-3">
        <IconText icon="bi:person-fill" text="Sell" />
        <IconText icon="clarity:shopping-cart-solid" text="Cart" />
        <IconText icon="bi:person-lines-fill" text="Profile" />
      </div>
    </div>
  );
};

export default Subheader;
