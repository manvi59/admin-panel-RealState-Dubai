"use client";
import Sidebar from "../../components/ui/sidebar";
import { Card, CardContent } from "../../components/ui/card";
import Button from "../../components/ui/button";

const properties = [
  { id: 1, title: "Luxury 2BHK Downtown Dubai", status: "Pending" },
  { id: 2, title: "Marina Waterfront Villa", status: "Approved" },
];

export default function AdminProperties() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Manage Properties</h1>
        <div className="space-y-6">
          {properties.map((prop) => (
            <Card key={prop.id} className="shadow-md border-0 rounded-xl bg-white hover:shadow-lg transition">
              <CardContent className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">{prop.title}</p>
                  <p className={`text-sm ${prop.status === "Approved" ? "text-green-600" : "text-yellow-600"}`}>
                    {prop.status}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="text-green-700 border-green-500 hover:bg-green-50">Approve</Button>
                  <Button variant="destructive">Delete</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
