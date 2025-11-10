"use client";
import Sidebar from "../../components/ui/sidebar";
import { Card, CardContent } from "../../components/ui/card";
import Button from "../../components/ui/button";
import { Mail, Building2, Eye } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AdminAgents() {
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
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Manage Agents</h1>
          <Button
            onClick={() => router.push("/admin/agents/showall")}
            className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-lg shadow-md transition"
          >
            Show All
          </Button>
        </div>

        {/* Agent Cards */}
        <div className="space-y-6">
          {agents.map((agent) => (
            <Card key={agent.id} className="shadow-md border-0 rounded-xl bg-white hover:shadow-lg transition">
              <CardContent className="flex justify-between items-center">
                <div>
                  <p className="font-semibold text-lg text-gray-800">{agent.name}</p>
                  <p className="flex items-center text-gray-500 gap-1">
                    <Mail size={16} className="text-green-600" /> {agent.email}
                  </p>
                  <p className="text-sm text-gray-600">
                    <Building2 size={14} className="inline mr-1 text-blue-600" />
                    Vendor: {agent.vendor}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <p className="text-gray-700 font-medium">
                    Listings: <span className="text-green-700 font-semibold">{agent.listings}</span>
                  </p>
                  <Button
                    variant="outline"
                    className="text-green-700 border-green-600 hover:bg-green-50 flex items-center gap-1"
                    onClick={() => alert(`Viewing profile of ${agent.name}`)}
                  >
                    <Eye size={16} /> View
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
