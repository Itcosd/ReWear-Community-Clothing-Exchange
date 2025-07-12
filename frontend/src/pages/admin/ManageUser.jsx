import React from 'react';

const mockUsers = [
  {
    id: 1,
    name: 'Ayush Kadiya',
    email: 'ayush@example.com',
    role: 'User',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Maitri Thakar',
    email: 'maitri@example.com',
    role: 'User',
    status: 'Blocked',
  },
  {
    id: 3,
    name: 'Admin User',
    email: 'admin@rewear.com',
    role: 'Admin',
    status: 'Active',
  },
];

const ManageUser = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">👥 Manage Users</h2>

      <div className="overflow-x-auto shadow rounded-lg">
        <table className="min-w-full bg-white text-left text-sm">
          <thead className="bg-[#dee2e6] text-gray-800 uppercase tracking-wider">
            <tr>
              <th className="px-6 py-3">#</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Role</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {mockUsers.map((user, index) => (
              <tr
                key={user.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.role}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      user.status === 'Active'
                        ? 'bg-green-200 text-green-800'
                        : 'bg-red-200 text-red-800'
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
