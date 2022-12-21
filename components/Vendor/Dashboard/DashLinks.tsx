import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface Props {
  icon: string;
  text: string;
  active?: boolean;
  name: string;
}

const DashLink: React.FC<Props> = ({ icon, text, name }) => {
  const router = useRouter();
  const active = router.pathname.split("/dashboard")[1];
  return (
    <Link
      href={`/vendor/dashboard${name}`}
      className={`w-full flex items-center py-3 px-10 space-x-4 ${
        active.includes(name) && name !== "" ? "bg-primaryOne" : ""
      } cursor-pointer`}
    >
      <Icon
        icon={icon}
        className={`text-lg ${
          active.includes(name) && name !== "" ? "text-white" : "text-[#B1B1B1]"
        }  `}
      />
      <h1
        className={`"text-base ${
          active.includes(name) && name !== "" ? "text-white" : "text-[#B1B1B1]"
        } font-medium "`}
      >
        {text}
      </h1>
    </Link>
  );
};

const DashLinks = () => {
  return (
    <div className="flex flex-col space-y-3 w-full">
      <DashLink name="/home" icon="bx:home-alt-2" text="Home" />
      <DashLink name="/products" icon="bi:box-seam" text="Products" />
      <DashLink name="/sales" icon="foundation:graph-bar" text="Sales" />
      <DashLink name="/payments" icon="la:cash-register" text="Payments" />
      <DashLink
        name="/subscription"
        icon="bi:credit-card-2-front"
        text="Subscription"
      />
      <DashLink name="/settings" icon="carbon:settings" text="Settings" />
      <DashLink name="/help" icon="carbon:help" text="Help" />
      <DashLink name="/doc" icon="gala:file-doc" text="Doc" />
    </div>
  );
};

export default DashLinks;
