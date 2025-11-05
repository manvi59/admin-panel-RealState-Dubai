"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

export default function EditUserPage() {
  const router = useRouter();
  const { id } = useParams(); // get the user id from the URL

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    phone: "",
    status: "active",
  });

  // 🧠 Fetch existing user data by ID (mock example)
  useEffect(() => {
    // TODO: Replace with actual API call (e.g. /api/users/:id)
    // For now, just simulating fetching
    const fetchUser = async () => {
      // simulate async call
      const fakeUser = {
        name: "Ayush Sharma",
        email: "ayush@example.com",
        role: "Admin",
        phone: "9876543210",
        status: "active",
      };
      setFormData(fakeUser);
    };
    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Updated:", formData);
    alert("User updated successfully!");
    router.push("/admin/user");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 min-w-full">
      <div
        className="w-full bg-white rounded-xl shadow-lg overflow-hidden"
        style={{ margin: "50px" }}
      >
        <div className="bg-green-700 text-white text-center py-4">
          <h3 className="text-2xl font-semibold">Edit User</h3>
        </div>

        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block font-semibold text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter full name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block font-semibold text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Role */}
            <div>
              <label htmlFor="role" className="block font-semibold text-gray-700 mb-1">
                Role
              </label>
              <select
                id="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              >
                <option value="Admin">Admin</option>
                <option value="User">User</option>
                <option value="Manager">Manager</option>
              </select>
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block font-semibold text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Status */}
            <div>
              <label htmlFor="status" className="block font-semibold text-gray-700 mb-1">
                Status
              </label>
              <select
                id="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 pt-3">
              <button
                type="button"
                onClick={() => router.push("/admin/user")}
                className="px-5 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
