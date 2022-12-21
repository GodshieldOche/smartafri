import React from "react";
import { useRouter } from "next/router";
import Button from "../Common/Button";
import Link from "next/link";

const IconText: React.FC<{
  icon: any;
  text: string;
  name: string;
  active: boolean;
}> = ({ icon, text, name, active }) => {
  return (
    <Link href={`/checkout/${name}`} className="flex items-center space-x-4">
      <div className="!text-red-900">{icon}</div>
      <h1
        className={`${
          active ? "text-primaryOne" : "text-grayFour"
        } text-medium text-base `}
      >
        {text}
      </h1>
    </Link>
  );
};

const NavItems = () => {
  const router = useRouter();

  return (
    <div className="w-full h-full flex flex-col space-y-4 ">
      <h1 className="font-semibold text-lg text-primaryOne">Checkout</h1>
      <div className="flex flex-col space-y-8 px-6 py-5 bg-grayThree">
        <IconText
          name="address"
          icon={
            <svg
              width="22"
              height="16"
              viewBox="0 0 22 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.4749 6.47487C9.8185 7.13125 8.92826 7.5 8 7.5C7.07174 7.5 6.1815 7.13125 5.52513 6.47487C4.86875 5.8185 4.5 4.92826 4.5 4C4.5 3.07174 4.86875 2.1815 5.52513 1.52513C6.1815 0.868749 7.07174 0.5 8 0.5C8.92826 0.5 9.8185 0.868749 10.4749 1.52513C11.1313 2.1815 11.5 3.07174 11.5 4C11.5 4.92826 11.1313 5.8185 10.4749 6.47487ZM1.33657 15.5C1.33616 15.5 1.33565 15.5 1.33502 15.5C1.33115 15.4998 1.32316 15.4995 1.31167 15.4987C1.2885 15.497 1.25214 15.4935 1.2072 15.486C1.11495 15.4706 0.999583 15.4408 0.890273 15.3861C0.782922 15.3324 0.69078 15.2598 0.624358 15.1601C0.560024 15.0636 0.5 14.9125 0.5 14.6667C0.5 14.1284 0.783605 12.9235 1.85355 11.8536C2.90885 10.7983 4.77211 9.83333 8 9.83333C11.2279 9.83333 13.0912 10.7983 14.1464 11.8536C15.2164 12.9235 15.5 14.1284 15.5 14.6667C15.5 14.9125 15.44 15.0636 15.3756 15.1601C15.3092 15.2598 15.2171 15.3324 15.1097 15.3861C15.0004 15.4408 14.8851 15.4706 14.7928 15.486C14.7479 15.4935 14.7115 15.497 14.6883 15.4987C14.6768 15.4995 14.6689 15.4998 14.665 15.5C14.6644 15.5 14.6638 15.5 14.6634 15.5H1.33657ZM15.1667 2C15.1667 1.9558 15.1842 1.91341 15.2155 1.88215C15.2467 1.85089 15.2891 1.83333 15.3333 1.83333H20.6667C20.7109 1.83333 20.7533 1.85089 20.7845 1.88215C20.8158 1.9134 20.8333 1.9558 20.8333 2C20.8333 2.0442 20.8158 2.0866 20.7845 2.11785C20.7533 2.14911 20.7109 2.16667 20.6667 2.16667H15.3333C15.2891 2.16667 15.2467 2.14911 15.2155 2.11785C15.1842 2.0866 15.1667 2.0442 15.1667 2ZM15.2155 5.88215C15.2467 5.85089 15.2891 5.83333 15.3333 5.83333H20.6667C20.7109 5.83333 20.7533 5.85089 20.7845 5.88215C20.8158 5.9134 20.8333 5.9558 20.8333 6C20.8333 6.0442 20.8158 6.0866 20.7845 6.11785C20.7533 6.14911 20.7109 6.16667 20.6667 6.16667H15.3333C15.2891 6.16667 15.2467 6.14911 15.2155 6.11785C15.1842 6.0866 15.1667 6.0442 15.1667 6C15.1667 5.9558 15.1842 5.91341 15.2155 5.88215ZM17.8821 9.88215C17.9134 9.85089 17.9558 9.83333 18 9.83333H20.6667C20.7109 9.83333 20.7533 9.85089 20.7845 9.88215C20.8158 9.9134 20.8333 9.9558 20.8333 10C20.8333 10.0442 20.8158 10.0866 20.7845 10.1179C20.7533 10.1491 20.7109 10.1667 20.6667 10.1667H18C17.9558 10.1667 17.9134 10.1491 17.8822 10.1179C17.8509 10.0866 17.8333 10.0442 17.8333 10C17.8333 9.95579 17.8509 9.9134 17.8821 9.88215ZM17.8821 13.8821C17.9134 13.8509 17.9558 13.8333 18 13.8333H20.6667C20.7109 13.8333 20.7533 13.8509 20.7845 13.8821C20.8158 13.9134 20.8333 13.9558 20.8333 14C20.8333 14.0442 20.8158 14.0866 20.7845 14.1179C20.7533 14.1491 20.7109 14.1667 20.6667 14.1667H18C17.9558 14.1667 17.9134 14.1491 17.8822 14.1179C17.8509 14.0866 17.8333 14.0442 17.8333 14C17.8333 13.9558 17.8509 13.9134 17.8821 13.8821Z"
                stroke={`${
                  router.pathname.includes("address") ||
                  router.pathname.includes("delivery") ||
                  router.pathname.includes("payment")
                    ? "#4082E6"
                    : "#ABB3B7"
                }`}
              />
            </svg>
          }
          active={
            router.pathname.includes("address") ||
            router.pathname.includes("delivery") ||
            router.pathname.includes("payment")
          }
          text="Address Details"
        />
        <IconText
          name="delivery"
          icon={
            <svg
              width="19"
              height="21"
              viewBox="0 0 19 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.939438 17.5398L0.939542 17.5398L6.11799 20.129C6.23911 20.1896 6.37369 20.2181 6.50895 20.212C6.64421 20.2059 6.77567 20.1654 6.89086 20.0942C7.00605 20.0231 7.10114 19.9236 7.16712 19.8054C7.23309 19.6872 7.26776 19.554 7.26783 19.4186V11.9569C7.26775 11.8093 7.2266 11.6647 7.14899 11.5393L7.57422 11.2762L7.14899 11.5393C7.07138 11.4138 6.96037 11.3124 6.82839 11.2465L6.82829 11.2464L1.64984 8.65717C1.52872 8.59665 1.39415 8.56808 1.25888 8.57417C1.12362 8.58026 0.992159 8.62082 0.876972 8.69198C0.761784 8.76315 0.666691 8.86257 0.600715 8.98081C0.534757 9.09902 0.500089 9.23212 0.5 9.36748C0.5 9.36751 0.5 9.36755 0.5 9.36758L0 9.36731L0.939438 17.5398ZM0.939438 17.5398C0.80746 17.4738 0.696451 17.3724 0.61884 17.2469C0.541228 17.1215 0.500079 16.9769 0.5 16.8293L0.939438 17.5398ZM17.1855 17.5398L17.1854 17.5398L12.007 20.129C12.0069 20.129 12.0069 20.1291 12.0068 20.1291C11.8858 20.1896 11.7512 20.2181 11.616 20.212C11.4807 20.2059 11.3493 20.1654 11.2341 20.0942C11.1189 20.0231 11.0238 19.9236 10.9578 19.8054C10.8918 19.6872 10.8572 19.554 10.8571 19.4186V11.9569C10.8572 11.8093 10.8983 11.6647 10.9759 11.5393C11.0536 11.4138 11.1646 11.3124 11.2965 11.2465L11.2967 11.2464L16.4751 8.65717C16.5962 8.59665 16.7308 8.56808 16.8661 8.57417C17.0013 8.58026 17.1328 8.62082 17.248 8.69198C17.3632 8.76315 17.4583 8.86257 17.5242 8.98081L17.9609 8.73718L17.5242 8.98081C17.5902 9.09904 17.6249 9.23218 17.6249 9.36758V16.8293C17.6249 16.9769 17.5837 17.1215 17.5061 17.2469C17.4285 17.3724 17.3175 17.4738 17.1855 17.5398ZM15.9049 4.79522C15.8275 4.92058 15.7168 5.02195 15.5851 5.08802C15.585 5.08808 15.5849 5.08813 15.5848 5.08818L9.41767 8.17175C9.30738 8.22686 9.18577 8.25555 9.06247 8.25555C8.93917 8.25555 8.81756 8.22686 8.70727 8.17175L2.54014 5.08818C2.54006 5.08814 2.53997 5.0881 2.53989 5.08806C2.40818 5.02199 2.29744 4.9206 2.22003 4.79522C2.14258 4.66976 2.10155 4.52522 2.10155 4.37778C2.10155 4.23033 2.14258 4.08579 2.22003 3.96033C2.29744 3.83495 2.40818 3.73356 2.53989 3.6675C2.53997 3.66745 2.54006 3.66741 2.54014 3.66737L8.70727 0.583807C8.7073 0.583789 8.70734 0.583772 8.70737 0.583754C8.81764 0.528674 8.93921 0.5 9.06247 0.5C9.18573 0.5 9.3073 0.528674 9.41757 0.583754C9.4176 0.583772 9.41764 0.583789 9.41767 0.583807L15.5848 3.66737C15.5849 3.66742 15.585 3.66748 15.5851 3.66753C15.7168 3.7336 15.8275 3.83497 15.9049 3.96033L16.303 3.71458L15.9049 3.96033C15.9824 4.08579 16.0234 4.23033 16.0234 4.37778C16.0234 4.52522 15.9824 4.66976 15.9049 4.79522L16.3304 5.05788L15.9049 4.79522Z"
                stroke={`${
                  router.pathname.includes("delivery") ||
                  router.pathname.includes("payment")
                    ? "#4082E6"
                    : "#ABB3B7"
                }`}
              />
            </svg>
          }
          text="Delivery Method"
          active={
            router.pathname.includes("delivery") ||
            router.pathname.includes("payment")
          }
        />
        <IconText
          name="payment"
          icon={
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.55738 13.3335L8.00038 13.1768L8.50038 15C8.08672 15 7.68324 14.8718 7.34548 14.6329C7.00772 14.3941 6.7523 14.0565 6.61438 13.6665C6.57022 13.5415 6.57754 13.404 6.63474 13.2843C6.69194 13.1647 6.79433 13.0727 6.91938 13.0285C7.04443 12.9843 7.1819 12.9917 7.30154 13.0489C7.42119 13.1061 7.51322 13.2085 7.55738 13.3335ZM7.55738 13.3335L8.00038 13.1771V13.7071V13.8662C7.9739 13.8509 7.94806 13.8344 7.92295 13.8166C7.75407 13.6973 7.62635 13.5285 7.55738 13.3335ZM12.5495 1.98013L12.6273 1.1118C13.2499 1.31803 13.7954 1.55117 14.233 1.76908L14.233 1.7691L14.2372 1.77116C14.3563 1.82905 14.4737 1.89017 14.5893 1.95445L13.6491 3.32853L13.0231 3.65337C10.6165 4.86615 7.36809 4.8657 4.96259 3.6521L4.94283 3.64213L4.92227 3.63394L4.41279 3.43117L3.59728 2.23058L4.19739 2.42066C4.69241 2.57746 5.19651 2.70396 5.70691 2.79947L5.70797 2.79967C6.82888 3.00692 8.00136 3.04641 9.03366 2.74785C10.1968 2.4118 11.414 2.13983 12.5495 1.98013ZM13.6635 5.45489C14.5844 6.48669 15.4436 7.72016 16.0686 8.99882C16.7524 10.398 17.1373 11.8131 17.0537 13.0598C16.9719 14.2813 16.4417 15.3598 15.2363 16.1525C14.0057 16.9616 12.0303 17.4985 9.02038 17.4985C6.00906 17.4985 4.02694 16.9712 2.78844 16.1725C1.57563 15.3904 1.03941 14.3258 0.950788 13.1169C0.860241 11.8817 1.23802 10.4727 1.91963 9.06583C2.54292 7.77933 3.40476 6.52696 4.33513 5.46002C7.17714 6.79837 10.8236 6.79666 13.6635 5.45489ZM10.0004 7.5V7H9.50038H8.50038H8.00038V7.5V7.5505C7.52365 7.64782 7.0818 7.88304 6.73261 8.23223C6.26377 8.70107 6.00038 9.33696 6.00038 10C6.00038 10.663 6.26377 11.2989 6.73261 11.7678C7.0818 12.117 7.52365 12.3522 8.00038 12.4495V13.0953C7.90418 12.8779 7.73319 12.701 7.5172 12.5978C7.27791 12.4834 7.00298 12.4687 6.75289 12.557C6.5028 12.6453 6.29803 12.8294 6.18364 13.0687C6.06925 13.308 6.05459 13.5829 6.14291 13.833L6.14299 13.8332C6.31538 14.3207 6.63464 14.7427 7.05682 15.0412C7.34114 15.2422 7.66273 15.3806 8.00038 15.4495V15.5V16H8.50038H9.50038H10.0004V15.5V15.4495C10.4771 15.3522 10.919 15.117 11.2681 14.7678C11.737 14.2989 12.0004 13.663 12.0004 13C12.0004 12.337 11.737 11.7011 11.2681 11.2322C10.919 10.883 10.4771 10.6478 10.0004 10.5505V9.90652C10.0406 10.0006 10.0951 10.0882 10.1622 10.166C10.2494 10.2673 10.3561 10.3501 10.4759 10.4094C10.5958 10.4688 10.7263 10.5035 10.8597 10.5116C10.9932 10.5196 11.1269 10.5008 11.253 10.4563C11.3791 10.4117 11.4949 10.3423 11.5937 10.2522C11.6925 10.1621 11.7722 10.0531 11.8282 9.93169C11.8841 9.81024 11.9151 9.67881 11.9193 9.54516C11.9235 9.41414 11.9019 9.2836 11.8557 9.16097C11.6828 8.67598 11.3644 8.25611 10.9439 7.9588C10.6596 7.75776 10.338 7.61942 10.0004 7.5505V7.5Z"
                stroke={`${
                  router.pathname.includes("payment") ? "#4082E6" : "#ABB3B7"
                }`}
              />
            </svg>
          }
          text="Payment"
          active={router.pathname.includes("payment")}
        />
      </div>
      <div className="flex flex-col space-y-6 px-6 py-5 bg-grayThree">
        <div className="flex justify-between items-center">
          <h3 className="text-sm text-grayOne font-medium ">Sub Total</h3>
          <h3 className="text-lg font-bold text-primaryOne  ">₦4,000</h3>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="text-sm text-grayOne font-medium ">Delivery Fee</h3>
          <h3 className="text-lg font-bold text-primaryOne  ">₦4,000</h3>
        </div>
      </div>
      <div className="w-full h-full flex items-center justify-between py-3 px-4 bg-primaryOne">
        <h3 className="text-sm text-white font-medium ">Total</h3>
        <h3 className="text-lg font-bold text-white  ">₦8,000</h3>
      </div>
    </div>
  );
};

export default NavItems;