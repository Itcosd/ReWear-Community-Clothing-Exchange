import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg p-3 shadow hover:shadow-md transition">
      <img src={product.image} alt={product.title} className="h-36 w-full object-cover rounded" />
      <h3 className="mt-2 text-sm font-medium line-clamp-2">{product.title}</h3>
      <p className="text-lg font-semibold mt-1">₹{product.price}</p>
      <p className="text-green-600 text-sm">Free Delivery</p>
      <p className="text-xs text-gray-500">
        ⭐ {product.rating} ({product.reviews} Reviews)
      </p>
    </div>
  );
};

export default ProductCard;
