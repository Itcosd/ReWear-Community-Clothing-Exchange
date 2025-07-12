import React from "react";
import CardLayout from "./CardLayout";

const products = [
  { image: "/img/demo.jpg", price: 160 },
  { image: "/img/demo.jpg", price: 150 },
  { image: "/img/demo.jpg", price: 160 },
  { image: "/img/demo.jpg", price: 160 },
];

const ItemCard = ({title}) => {
  return (
    <div className="w-full px-10 py-10 border">
      <h1 className="text-2xl font-bold mb-6">{title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {products.map((item, index) => (
          <CardLayout key={index} image={item.image} price={item.price} />
        ))}
      </div>
    </div>
  );
};

export default ItemCard;
