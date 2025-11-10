"use client";
import Sidebar from "../../../components/ui/sidebar";
import Button from "../../../components/ui/button";
import { Eye, Users, Building2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ShowAllVendors() {
  const router = useRouter();

  const vendors = [
    { id: 1, name: "Ahmed Real Estate", email: "ahmed@dubai.com", properties: 25, agents: 5 },
    { id: 2, name: "Luxury Homes LLC", email: "luxury@dubai.com", properties: 18, agents: 3 },
    { id: 3, name: "Skyline Properties", email: "skyline@dubai.com", properties: 40, agents: 8 },
    { id: 4, name: "Sunrise Estates", email: "sunrise@dubai.com", properties: 12, agents: 2 },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">All Vendors</h1>
          <Button
            onClick={() => router.push("/admin/vendors")}
            className="bg-gray-400 hover:bg-gray-500 text-white px-5 py-2 rounded-lg shadow-md transition"
          >
            Back
          </Button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-green-700 text-white">
              <tr>
                <th className="py-3 px-5">Name</th>
                <th className="py-3 px-5">Email</th>
                <th className="py-3 px-5 text-center"># Properties</th>
                <th className="py-3 px-5 text-center"># Agents</th>
                <th className="py-3 px-5 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {vendors.map((vendor) => (
                <tr key={vendor.id} className="border-b hover:bg-gray-50 transition">
                  <td className="py-3 px-5 font-semibold">{vendor.name}</td>
                  <td className="py-3 px-5 text-gray-600">{vendor.email}</td>

                  {/* ✅ Fixed: inline-flex instead of flex for proper centering */}
                  <td className="py-3 px-5 text-center text-gray-700">
                    <span className="inline-flex items-center justify-center gap-1">
                      <Building2 size={16} className="text-green-700" /> {vendor.properties}
                    </span>
                  </td>

                  <td className="py-3 px-5 text-center text-gray-700">
                    <span className="inline-flex items-center justify-center gap-1">
                      <Users size={16} className="text-blue-700" /> {vendor.agents}
                    </span>
                  </td>

                  {/* ✅ Centered View Profile button */}
                  <td className="py-3 px-5 text-center">
                    <div className="flex justify-center">
                      <Button
                        onClick={() => alert(`Viewing profile of ${vendor.name}`)}
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
