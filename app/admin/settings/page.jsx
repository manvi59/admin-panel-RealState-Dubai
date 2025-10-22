"use client";
import Sidebar from "../../components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import Button from "../../components/ui/button";
import { useState } from "react";

export default function AdminSettings() {
  const [siteName, setSiteName] = useState("Dubai Real Estate");
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Settings</h1>
        <Card className="rounded-2xl shadow-md border-0 bg-white hover:shadow-lg transition">
          <CardHeader className="border-b bg-green-50 rounded-t-2xl">
            <CardTitle>Site Settings</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Site Name</label>
              <input
                type="text"
                className="w-full mt-1 border rounded px-3 py-2"
                value={siteName}
                onChange={(e) => setSiteName(e.target.value)}
              />
            </div>
            <Button className="bg-green-600 hover:bg-green-700 text-white">Save Settings</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
