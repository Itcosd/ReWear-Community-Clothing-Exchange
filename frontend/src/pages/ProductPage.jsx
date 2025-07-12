import React from "react";
import FilterSidebar from "../components/filter/FilterSidebar";
import ProductGrid from "../components/filter/ProductGrid";
const dummyProducts = [
  {
    title: "New Wall Hooks",
    price: 121,
    image: "/images/wall-hook.jpg",
    rating: 4.2,
    reviews: 3776,
  },
  {
    title: "Gorgeous Doormats",
    price: 147,
    image: "/images/doormat.jpg",
    rating: 3.5,
    reviews: 4765,
  },
  // Add more dummy products here
];

const ProductPage = () => {
  return (
    <div className="flex min-h-screen">
      <FilterSidebar />
      <main className="flex-1">
        <ProductGrid products={dummyProducts} />
      </main>
    </div>
  );
};

export default ProductPage;
