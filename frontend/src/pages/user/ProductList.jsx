import React, { useState } from "react";

const sampleProducts = [
  { id: 1, name: "Shirt", isPublished: true, isVerified: true, isSwapped: false },
  { id: 2, name: "Jacket", isPublished: false, isVerified: true, isSwapped: false },
  { id: 3, name: "Bag", isPublished: true, isVerified: false, isSwapped: true },
];

const filterOptions = [
  { label: "All Products", value: "all" },
  { label: "Published & Verified", value: "published_verified" },
  { label: "Unpublished", value: "unpublished" },
  { label: "Swapped Only", value: "swapped" },
  { label: "Verified Only", value: "verified" },
  { label: "Unverified Only", value: "unverified" },
];

const ProductList = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const handleChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  const filtered = sampleProducts.filter((p) => {
    switch (selectedFilter) {
      case "published_verified":
        return p.isPublished && p.isVerified;
      case "unpublished":
        return !p.isPublished;
      case "swapped":
        return p.isSwapped;
      case "verified":
        return p.isVerified;
      case "unverified":
        return !p.isVerified;
      default:
        return true;
    }
  });

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 py-10">
      <div className="bg-black w-full max-w-4xl p-8 rounded-xl shadow-lg border border-gray-700 text-white">
        <h2 className="text-2xl font-bold mb-6 text-center">Product List</h2>

        {/* Dropdown Filter */}
        <div className="mb-6">
          <label className="block mb-2 text-gray-300 text-sm font-medium">
            Filter Products
          </label>
          <select
            value={selectedFilter}
            onChange={handleChange}
            className="w-full bg-gray-800 text-white p-2 rounded border border-gray-600"
          >
            {filterOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Table View */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-600">
            <thead>
              <tr className="bg-gray-800 text-gray-300 text-sm uppercase tracking-wider">
                <th className="px-4 py-3 text-left">ID</th>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Published</th>
                <th className="px-4 py-3 text-left">Verified</th>
                <th className="px-4 py-3 text-left">Swapped</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {filtered.length > 0 ? (
                filtered.map((p) => (
                  <tr key={p.id} className="hover:bg-gray-800 transition">
                    <td className="px-4 py-3">{p.id}</td>
                    <td className="px-4 py-3">{p.name}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-3 py-1 text-sm rounded-full font-medium ${
                          p.isPublished ? "bg-green-600 text-white" : "bg-red-600 text-white"
                        }`}
                      >
                        {p.isPublished ? "Yes" : "No"}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-3 py-1 text-sm rounded-full font-medium ${
                          p.isVerified ? "bg-blue-600 text-white" : "bg-yellow-500 text-black"
                        }`}
                      >
                        {p.isVerified ? "Yes" : "No"}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-3 py-1 text-sm rounded-full font-medium ${
                          p.isSwapped ? "bg-gray-500 text-white" : "bg-indigo-600 text-white"
                        }`}
                      >
                        {p.isSwapped ? "Yes" : "No"}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center text-gray-400 py-4">
                    No products match the selected filter.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
