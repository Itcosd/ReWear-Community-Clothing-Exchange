import React from "react";
import Carousel from "../../components/Carousel";
import CategoryBox from "../../components/CategoryBox";
import ItemCard from "../../components/ItemCard";
import AdminPanel from "../admin/AdminPanel";

const Home = () => {
  return (
    <div>
      <Carousel />
      <CategoryBox />
      <ItemCard title="Denim Jacket & Jeans & Shorts" />
    </div>
  );
};

export default Home;
