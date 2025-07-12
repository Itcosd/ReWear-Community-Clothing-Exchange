import React from "react";

const PointRedemption = () => {
  const points = 120;

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="bg-black w-full max-w-sm p-8 rounded-xl shadow-lg border border-gray-700 text-white">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Your Points
        </h2>
        <p className="text-center text-4xl font-extrabold text-green-400">
          {points}
        </p>
      </div>
    </div>
  );
};

export default PointRedemption;
