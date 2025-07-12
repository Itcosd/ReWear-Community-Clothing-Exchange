import React from "react";

const transactions = [
  { id: 1, item: "Shirt", date: "2025-07-10", status: "Completed" },
  { id: 2, item: "Jacket", date: "2025-07-08", status: "Pending" },
];

const statusColors = {
  Completed: "bg-green-600 text-white",
  Pending: "bg-yellow-500 text-black",
};

const TransactionHistory = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 py-10">
      <div className="bg-black w-full max-w-4xl p-8 rounded-xl shadow-lg border border-gray-700 text-white">
        <h2 className="text-2xl font-bold mb-6 text-center">Transaction History</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-600">
            <thead>
              <tr className="bg-gray-800 text-gray-300 text-sm uppercase tracking-wider">
                <th className="px-4 py-3 text-left">ID</th>
                <th className="px-4 py-3 text-left">Item</th>
                <th className="px-4 py-3 text-left">Date</th>
                <th className="px-4 py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {transactions.map((t) => (
                <tr key={t.id} className="hover:bg-gray-800 transition">
                  <td className="px-4 py-3">{t.id}</td>
                  <td className="px-4 py-3">{t.item}</td>
                  <td className="px-4 py-3">{t.date}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-block px-3 py-1 text-sm rounded-full font-medium ${statusColors[t.status] || "bg-gray-500 text-white"}`}
                    >
                      {t.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;
