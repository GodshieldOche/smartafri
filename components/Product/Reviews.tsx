import React from "react";
import Pagination from "../Common/Pagination";
import Review from "../Common/Review";

const reviews = [1, 2, 3];

const Reviews = () => {
  return (
    <div className="flex flex-col w-full space-y-3 lg:space-y-4">
      {reviews.map((item) => (
        <Review key={item} />
      ))}
      <div className="flex w-full !mt-0 justify-center lg:justify-start">
        <Pagination itemsPerPage={3} totalItems={12} page={1} />
      </div>
    </div>
  );
};

export default Reviews;
