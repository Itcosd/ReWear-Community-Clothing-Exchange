// rafce
import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProductDetail = () => {
  const { id } = useParams();

  // ✅ Static mock data (single image)
  const product = {
    id,
    title: 'Vintage Denim Jacket',
    description: 'A stylish vintage denim jacket perfect for casual wear. Made with durable denim and lined with soft cotton.',
    category: { id: 1, name: 'Jackets', min_point: 20 },
    type: { id: 2, name: 'Outerwear' },
    size: { id: 3, name: 'M' },
    condition: { id: 4, name: 'Like New' },
    tags: [{ id: 1, name: 'Denim' }, { id: 2, name: 'Winter' }],
    uploader: {
      id: 5,
      username: 'ayushkadiya',
      full_name: 'Ayush Kadiya',
      email: 'ayush@example.com',
      profile_image: '/media/profile/avatar.jpg'
    },
    points: 50,
    is_verified: true,
    is_published: true,
    is_swapped: false,
    created_at: '2025-07-10T14:32:00Z',
    updated_at: '2025-07-12T10:15:00Z',
    image: 'img/demo.jpg'
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#212529] p-8 m-5 flex flex-col md:flex-row items-center justify-center gap-10">
      {/* Left: Single Image */}
      <motion.img
        src={product.image}
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
        <p className="text-lg mb-4 text-[#495057]">{product.description}</p>

        <div className="mb-4 space-y-1 text-[#495057]">
          <p><strong>Category:</strong> {product.category.name}</p>
          <p><strong>Type:</strong> {product.type.name}</p>
          <p><strong>Size:</strong> {product.size.name}</p>
          <p><strong>Condition:</strong> {product.condition.name}</p>
          <p><strong>Tags:</strong> {product.tags.map(tag => tag.name).join(', ')}</p>
          <p><strong>Points:</strong> {product.points} pts</p>
          <p><strong>Status:</strong> 
            {product.is_swapped ? ' Swapped' : product.is_published ? ' Available' : ' Not Published'}
          </p>
        </div>

        {/* Uploader Info */}
        <div className="flex items-center gap-4 mt-6">
          <img
            src={product.uploader.profile_image}
            alt="Uploader"
            className="w-12 h-12 rounded-full border border-gray-300"
          />
          <div>
            <p className="font-semibold">{product.uploader.full_name}</p>
            <p className="text-sm text-gray-600">{product.uploader.email}</p>
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
