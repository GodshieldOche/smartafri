import { useRouter } from "next/router";
import React from "react";
import { currentUser } from "../../interface";
import IconText from "../Common/IconText";

const Subheader = () => {
  const [user, setUser] = React.useState<currentUser | null>(null);

  React.useEffect(() => {
    const data = localStorage.getItem("user");
    setUser(JSON.parse(data as string));
  }, []);

  const router = useRouter();

  const handleProfile = () => {
    if (user) {
      router.push("/dashboard");
    } else {
      router.push("/auth/signin");
    }
  };

  return (
    <div className="w-full overflow-hidden bg-grayThree">
      {/* Mobile */}
      <div className="contain w-full flex lg:hidden items-center justify-around py-3">
        <IconText icon="bi:person-fill" text="Sell" />
        <IconText
          icon="clarity:shopping-cart-solid"
          action={() => router.push("/cart")}
          text="Cart"
        />
        <IconText
          icon="bi:person-lines-fill"
          action={handleProfile}
          text="Profile"
        />
      </div>
    </div>
  );
};

export default Subheader;
