"use client";
import Sidebar from "../../../components/ui/sidebar";
import Button from "../../../components/ui/button";
import { Mail, Building2, Eye, List } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ShowAllAgents() {
  const router = useRouter();

  const agents = [
    { id: 1, name: "John Mathews", email: "john@estate.com", vendor: "Ahmed Real Estate", listings: 12 },
    { id: 2, name: "Priya Kapoor", email: "priya@luxuryhomes.com", vendor: "Luxury Homes LLC", listings: 8 },
    { id: 3, name: "Michael Lee", email: "michael@skyline.com", vendor: "Skyline Properties", listings: 15 },
    { id: 4, name: "Sara Khan", email: "sara@sunrise.com", vendor: "Sunrise Estates", listings: 5 },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 p-8">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">All Agents</h1>
          <Button
            onClick={() => router.push("/admin/agents")}
            className="bg-gray-400 hover:bg-gray-500 text-white px-5 py-2 rounded-lg shadow-md transition"
          >
            Back
          </Button>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <table className="w-full border-collapse text-left">
            <thead className="bg-green-700 text-white">
              <tr>
                <th className="py-3 px-5">Name</th>
                <th className="py-3 px-5">Email</th>
                <th className="py-3 px-5">Vendor</th>
                <th className="py-3 px-5 text-center">Listings</th>
                <th className="py-3 px-5 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {agents.map((agent) => (
                <tr key={agent.id} className="border-b hover:bg-gray-50 transition">
                  {/* Name */}
                  <td className="py-3 px-5 font-semibold text-gray-800">{agent.name}</td>

                  {/* Email */}
                  <td className="py-3 px-5 text-gray-700">{agent.email}</td>

                  {/* Vendor */}
                  <td className="py-3 px-5 text-gray-700">{agent.vendor}</td>

                  {/* Listings */}
                  <td className="py-3 px-5 text-center text-gray-800">
                    <div className="flex justify-center items-center gap-1">
                      <List size={16} className="text-green-700" /> {agent.listings}
                    </div>
                  </td>

                  {/* Action */}
                  <td className="py-3 px-5 text-center">
                    <div className="flex justify-center">
                    <Button
                      onClick={() => alert(`Viewing profile of ${agent.name}`)}
                      variant="outline"
                      className="border-green-600 text-green-700 hover:bg-green-50 flex items-center gap-1 justify-center"
                    >
                      <Eye size={16} /> View Profile
                    </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
