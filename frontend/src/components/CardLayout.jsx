import React from "react";

const CardLayout = ({ image, price, title }) => {
  return (
    <div className="w-full max-w-sm flex flex-col items-center bg-white border rounded-lg shadow-md p-4">
      <img src={image} alt={title} className="w-full h-[320px] object-cover" />
      <p className="text-[#495057] mt-2 font-medium text-base">{title}</p>
      <p className="text-[#495057] text-sm">{price} points</p>
    </div>
  );
};

export default CardLayout;
