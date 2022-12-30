import React from "react";
import { Icon } from "@iconify/react";
import { useAppSelector } from "../../hooks/useDispatch";

interface Props {
  icon: string;
  text: string;
  action?: any;
}

const IconText: React.FC<Props> = ({ icon, text, action }) => {
  const cart = useAppSelector((state) => state.cart.data);
  const [quantity, setQuantity] = React.useState(0);

  React.useEffect(() => {
    setQuantity(cart.reduce((acc, item) => acc + item.quantity, 0));
  }, [cart]);

  return (
    <div
      onClick={action}
      className="flex flex-col items-center cursor-pointer space-y-2 lg:flex-row lg:space-x-2 lg:space-y-0"
    >
      <div className="relative">
        <Icon icon={icon} className="!text-primaryOne !text-xl" />
        {text === "Cart" && quantity !== 0 && (
          <div className="absolute -top-[10px] -right-2 h-5 w-5 rounded-full bg-secondaryOne border-2 border-white p-1  flex items-center justify-center">
            <h1 className="text-[11px] lg:text-xs text-white font-medium">
              {quantity}
            </h1>
          </div>
        )}
      </div>

      <h2 className="text-grayOne text-[11px] lg:text-sm whitespace-nowrap ">
        {text}
      </h2>
    </div>
  );
};

export default IconText;
