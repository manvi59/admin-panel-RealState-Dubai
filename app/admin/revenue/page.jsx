"use client";
import Sidebar from "../../components/ui/sidebar";
import { Card, CardContent } from "../../components/ui/card";
import { useState } from "react";
import { TrendingUp, DollarSign, Home } from "lucide-react";

export default function RevenuePage() {
  const [revenueData] = useState([
    { id: 1, property: "Palm Jumeirah Villa", amount: 4200000, date: "2025-09-12", agent: "Emaar Properties" },
    { id: 2, property: "Dubai Marina Apartment", amount: 2350000, date: "2025-10-02", agent: "Nakheel Group" },
    { id: 3, property: "Downtown Penthouse", amount: 5800000, date: "2025-10-25", agent: "Damac" },
  ]);

  const totalRevenue = revenueData.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Revenue Overview</h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-green-100 border-green-300">
            <CardContent className="flex items-center justify-between p-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-700">Total Revenue</h2>
                <p className="text-2xl font-bold text-green-700">
                  {/* AED {totalRevenue.toLocaleString()} */}
                  AED {totalRevenue}
                </p>
              </div>
              <DollarSign className="text-green-700 w-8 h-8" />
            </CardContent>
          </Card>

          <Card className="bg-blue-100 border-blue-300">
            <CardContent className="flex items-center justify-between p-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-700">Total Transactions</h2>
                <p className="text-2xl font-bold text-blue-700">
                  {revenueData.length}
                </p>
              </div>
              <TrendingUp className="text-blue-700 w-8 h-8" />
            </CardContent>
          </Card>

          <Card className="bg-yellow-100 border-yellow-300">
            <CardContent className="flex items-center justify-between p-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-700">Top Agent</h2>
                <p className="text-xl font-bold text-yellow-700">
                  {revenueData[0].agent}
                </p>
              </div>
              <Home className="text-yellow-700 w-8 h-8" />
            </CardContent>
          </Card>
        </div>

        {/* Detailed Table */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="py-3 px-4 text-left">ID</th>
                <th className="py-3 px-4 text-left">Property</th>
                <th className="py-3 px-4 text-left">Agent</th>
                <th className="py-3 px-4 text-left">Amount (AED)</th>
                <th className="py-3 px-4 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {revenueData.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50 transition">
                  <td className="py-3 px-4">{item.id}</td>
                  <td className="py-3 px-4">{item.property}</td>
                  <td className="py-3 px-4">{item.agent}</td>
                  <td className="py-3 px-4 text-green-700 font-semibold">
                    {/* {item.amount.toLocaleString()} */}
                    {item.amount}
                  </td>
                  <td className="py-3 px-4">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
