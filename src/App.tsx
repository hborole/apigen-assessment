// App.tsx
import React, { useState } from 'react';
import userData from './data';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  signUpDate: string;
  lastLogin: string;
}

const App = () => {
  const [users, setUsers] = useState<User[]>(userData);
  const [editFormData, setEditFormData] = useState<User | null>(null);

  const handleDelete = (userId: number) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  const handleEditFormChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (editFormData) {
      setEditFormData({
        ...editFormData,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleEdit = (user: User) => {
    setEditFormData(user);
  };

  const handleCancel = () => {
    setEditFormData(null);
  };

  const handleSave = () => {
    if (editFormData) {
      const updatedUsers = users.map((user) =>
        user.id === editFormData.id ? editFormData : user
      );
      setUsers(updatedUsers);
      setEditFormData(null);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <table className="table-auto w-full text-left shadow-lg bg-white">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Role</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Sign Up Date</th>
            <th className="px-4 py-2">Last Login</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b">
              <td className="px-4 py-2">{user.id}</td>
              <td className="px-4 py-2">{user.name}</td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2">{user.role}</td>
              <td className="px-4 py-2">{user.status}</td>
              <td className="px-4 py-2">{user.signUpDate}</td>
              <td className="px-4 py-2">{user.lastLogin}</td>
              <td className="px-4 py-2 flex space-x-2">
                <button
                  onClick={() => handleEdit(user)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editFormData && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full px-4">
          <div className="relative top-20 mx-auto shadow-lg rounded-md bg-white max-w-md">
            <div className="flex justify-between items-center bg-blue-500 text-white text-lg px-4 py-2">
              <h3>Edit User</h3>
              <button onClick={handleCancel}>X</button>
            </div>
            <div className="p-4">
              <input
                type="text"
                name="name"
                value={editFormData.name}
                onChange={handleEditFormChange}
                className="px-4 py-2 border rounded w-full mb-2"
              />
              <input
                type="email"
                name="email"
                value={editFormData.email}
                onChange={handleEditFormChange}
                className="px-4 py-2 border rounded w-full mb-2"
              />
              <button
                onClick={handleSave}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
