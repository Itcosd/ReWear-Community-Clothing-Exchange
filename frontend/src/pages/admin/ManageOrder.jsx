import React from 'react'

const ManageOrder = () => {
  const orders = [
    {
      id: 1,
      user: 'Ayush Kadiya',
      product: 'Vintage Denim Jacket',
      description: 'Classic denim jacket with a retro feel.',
    },
    {
      id: 2,
      user: 'Maitri Thakar',
      product: 'Boho Maxi Dress',
      description: 'Colorful floral boho-style dress for summer.',
    },
    {
      id: 3,
      user: 'Riya Shah',
      product: 'Corduroy Pants',
      description: 'Stylish high-waisted corduroy pants in beige.',
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">📦 Manage Orders</h2>

      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white shadow-md rounded-xl p-5 flex flex-col md:flex-row md:items-center md:justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold">{order.user}</h3>
              <p className="text-sm text-gray-700">{order.product}</p>
              <p className="text-xs text-gray-500 mt-1">{order.description}</p>
            </div>

            <div className="mt-4 md:mt-0 flex gap-4">
              <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
                Accept
              </button>
              <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition">
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageOrder;
