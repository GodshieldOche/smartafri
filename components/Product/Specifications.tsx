import React from "react";

const Specifications = () => {
  return (
    <div className="flex flex-col space-y-5 lg:space-y-6 !mb-10">
      {/* Product */}
      <div className="flex items-center space-x-2">
        <h1 className="spec !font-semibold">Product:</h1>
        <h2 className="spec">Dried Hibiscus Flower</h2>
      </div>
      {/* Origin */}
      <div className="flex items-center space-x-2">
        <h1 className="spec !font-semibold">Origin:</h1>
        <h2 className="spec">Nigeria</h2>
      </div>
      {/*  Production process: */}
      <div className="flex items-center space-x-2">
        <h1 className="spec !font-semibold"> Production process:</h1>
        <h2 className="spec">Hand-picked and sorted</h2>
      </div>
      {/*  Color */}
      <div className="flex items-center space-x-2">
        <h1 className="spec !font-semibold">Color:</h1>
        <h2 className="spec">Reddish Scarlet</h2>
      </div>
      {/*  Moisture content */}
      <div className="flex items-center space-x-2">
        <h1 className="spec !font-semibold">Moisture content:</h1>
        <h2 className="spec">less than 8%</h2>
      </div>
      {/*  Foreign matter */}
      <div className="flex items-center space-x-2">
        <h1 className="spec !font-semibold">Foreign matter:</h1>
        <h2 className="spec">None, Free from salmonella</h2>
      </div>
      {/*  Packing */}
      <div className="flex items-center space-x-2">
        <h1 className="spec !font-semibold">Packing:</h1>
        <h2 className="spec">25/50kg PP bag (or as desirable)</h2>
      </div>
    </div>
  );
};

export default Specifications;
