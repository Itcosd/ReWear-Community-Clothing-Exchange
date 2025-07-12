import React from "react";
import { Link } from "react-router-dom";

const CardLayout = ({ id, image, price, title }) => {
  return (
    <Link
      to={`/products/${id}`}
      className="w-full max-w-sm flex flex-col items-center bg-white border rounded-lg shadow-md p-4 hover:shadow-lg transition"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-[320px] object-cover rounded"
      />
      <p className="text-[#495057] mt-2 font-medium text-base">{title}</p>
      <p className="text-[#495057] text-sm">{price} points</p>
    </Link>
  );
};

export default CardLayout;
