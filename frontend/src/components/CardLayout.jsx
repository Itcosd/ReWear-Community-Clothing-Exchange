import React from "react";

const CardLayout = ({ image, price }) => {
  return (
    <div className="w-full max-w-sm flex flex-col items-center bg-white border rounded-lg shadow-md p-4">
      <img
        src={image}
        alt="Product"
        className="w-full h-[320px] object-cover"
      />
      <p className="text-[#495057] mt-2 font-medium text-base">I'm a product</p>
      <p className="text-[#495057] text-sm">${price}</p>
    </div>
  );
};

export default CardLayout;

