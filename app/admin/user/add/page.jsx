"use client";
import { useState } from "react";
import Sidebar from "../../../components/ui/sidebar";
import { Card, CardHeader, CardTitle, CardContent } from "../../../components/ui/card";
import { useRouter } from "next/navigation";

export default function AddUserPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    status: "active",
    lastlogin: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Added:", formData);
    alert("✅ User added successfully!");
    router.push("/admin/users");
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* <Sidebar /> */}
      <div className="flex-1 p-8">
        <Card className=" mx-auto shadow-lg rounded-2xl">
          <CardHeader className="bg-green-700 text-white rounded-t-2xl">
            <CardTitle className="text-xl font-semibold">Add New User</CardTitle>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Role</label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                >
                  <option value="">Select Role</option>
                  <option value="buyer">Buyer</option>
                  <option value="seller">Seller</option>
                  <option value="renter">Renter</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Account Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Last Login</label>
                <input
                  type="text"
                  name="lastlogin"
                  value={formData.lastlogin}
                  onChange={handleChange}
                  placeholder="e.g. today / yesterday / date"
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => router.push("/admin/user")}
                  className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800"
                >
                  Save User
                </button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
