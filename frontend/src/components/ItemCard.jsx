import React from "react";
import { useGetProductsQuery } from "../features/productApi";
import CardLayout from "./CardLayout";

const ItemCard = ({ title }) => {
  const { data: products, error, isLoading } = useGetProductsQuery();

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products!</p>;

  return (
    <div className="w-full px-10 py-10 border">
      <h1 className="text-2xl font-bold mb-6">{title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {products.map((item) => {
          const imageUrl =
            item.images && item.images.length > 0
              ? `${item.images[0].image}` // Use image path as is
              : "/img/demo.jpg";

          return (
            <CardLayout
              key={item.id}
              image={imageUrl}
              title={item.title}
              price={item.points}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ItemCard;
