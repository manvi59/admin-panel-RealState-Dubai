"use client";
import Sidebar from "../../components/ui/sidebar";
import { Card, CardContent } from "../../components/ui/card";
import Button from "../../components/ui/button";

const vendors = [
  { id: 1, name: "Ahmed Real Estate", email: "ahmed@dubai.com", status: "Verified" },
  { id: 2, name: "Luxury Homes LLC", email: "luxury@dubai.com", status: "Pending" },
];

export default function AdminVendors() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Manage Vendors</h1>
        <div className="space-y-6">
          {vendors.map((vendor) => (
            <Card key={vendor.id} className="shadow-md border-0 rounded-xl bg-white hover:shadow-lg transition">
              <CardContent className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">{vendor.name}</p>
                  <p className={`text-sm ${vendor.status === "Verified" ? "text-green-600" : "text-yellow-600"}`}>
                    {vendor.status}
                  </p>
                  <p className="text-sm text-gray-500">{vendor.email}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="text-green-700 border-green-500 hover:bg-green-50">Verify</Button>
                  <Button variant="destructive">Suspend</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
