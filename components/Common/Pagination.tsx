import { Icon } from "@iconify/react";
import React from "react";
import Paginate from "react-js-pagination";

interface Props {
  page: number;
  itemsPerPage: number;
  totalItems: number;
}

const Pagination: React.FC<Props> = ({ page, itemsPerPage, totalItems }) => {
  //   const router: NextRouter = useRouter();

  const handlePagination = (pageNumber: number) => {
    // router.push({
    //   pathname: router.pathname,
    //   query: {
    //     ...router.query,
    //     page: pageNumber,
    //   },
    // });
  };

  return (
    <div className="w-fit px-3 !mt-[35px]">
      <Paginate
        activePage={page}
        itemsCountPerPage={itemsPerPage}
        totalItemsCount={totalItems}
        onChange={handlePagination}
        pageRangeDisplayed={4}
        hideFirstLastPages={true}
        nextPageText={
          <Icon
            icon="ic:round-chevron-right"
            className=" !text-sm !p-0 !m-0 text-grayTwo lg:!text-base !text-center"
          />
        }
        prevPageText={
          <Icon
            icon="ic:round-keyboard-arrow-left"
            className=" !text-sm !p-0 !m-0 text-grayTwo lg:!text-base !text-center"
          />
        }
        innerClass=" flex space-x-2 lg:space-x-3 items-center"
        activeClass="bg-primaryOne border !border-primaryOne "
        itemClass=" rounded-xl px-3 lg:px-[14px] border border-grayTwo py-1 lg:py-[6px]"
        linkClass="text-primaryOne text-xs lg:text-sm"
        itemClassNext="!flex !items-center !justify-center w-[26px] h-[26px] lg:!w-[30px] lg:!h-[30px] !rounded-full"
        itemClassPrev="!flex !items-center !justify-center w-[26px] h-[26px] lg:!w-[30px] lg:!h-[30px] !rounded-full"
        activeLinkClass="text-white text-xs lg:text-sm"
      />
    </div>
  );
};

export default Pagination;
