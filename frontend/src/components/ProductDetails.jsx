import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useGetProductByIdQuery } from "../features/productApi";

const ProductDetail = () => {
  const { id } = useParams();

  const { data: product, error, isLoading } = useGetProductByIdQuery(id);

  if (isLoading) return <p className="p-10">Loading product details...</p>;
  if (error) return <p className="p-10 text-red-500">Error loading product!</p>;

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#212529] p-8 m-5 flex flex-col md:flex-row items-center justify-center gap-10">
      {/* Left: Image */}
      <motion.img
        src={product.images?.[0]?.image || "/img/demo.jpg"}
        alt={product.title}
        className="w-full max-w-sm rounded-2xl shadow-lg"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      />

      {/* Right: Details */}
      <motion.div
        className="max-w-xl w-full"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
        <div
          className="text-lg mb-4 text-[#495057]"
          dangerouslySetInnerHTML={{ __html: product.description }}
        />

        <div className="mb-4 space-y-1 text-[#495057]">
          <p>
            <strong>Category:</strong> {product.category?.name}
          </p>
          <p>
            <strong>Type:</strong> {product.type?.name}
          </p>
          <p>
            <strong>Size:</strong> {product.size?.name}
          </p>
          <p>
            <strong>Condition:</strong> {product.condition?.name}
          </p>
          <p>
            <strong>Tags:</strong>{" "}
            {product.tags?.map((tag) => tag.name).join(", ")}
          </p>
          <p>
            <strong>Points:</strong> {product.points} pts
          </p>
          <p>
            <strong>Status:</strong>
            {product.is_swapped
              ? " Swapped"
              : product.is_published
              ? " Available"
              : " Not Published"}
          </p>
        </div>

        {/* Uploader Info */}
        <div className="flex items-center gap-4 mt-6">
          <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
            👤
          </div>
          <div>
            <p className="font-semibold">{product.uploader?.username}</p>
            <p className="text-sm text-gray-600">{product.uploader?.email}</p>
          </div>
        </div>

        {/* Action Button */}
        <button className="mt-8 px-6 py-2 bg-[#343a40] text-white rounded-xl hover:bg-[#212529] transition">
          Swap Request
        </button>
      </motion.div>
    </div>
  );
};

export default ProductDetail;
