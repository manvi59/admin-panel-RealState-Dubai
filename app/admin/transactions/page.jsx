"use client";
import { useState } from "react";
import Sidebar from "../../components/ui/sidebar";
import { Card, CardContent } from "../../components/ui/card";
import Button from "../../components/ui/button";
import { Trash, Eye } from "lucide-react";

const TransactionsPage = () => {
  // Dummy transactions data
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      buyer: "Aarav Sharma",
      seller: "Emaar Properties",
      property: "Palm Jumeirah Villa",
      amount: "AED 4,200,000",
      date: "2025-09-12",
      status: "Completed",
    },
    {
      id: 2,
      buyer: "Manvi Mehta",
      seller: "Nakheel Group",
      property: "Dubai Marina Apartment",
      amount: "AED 2,350,000",
      date: "2025-10-02",
      status: "Pending",
    },
    {
      id: 3,
      buyer: "Lakshay Sharma",
      seller: "Dubai Properties LLC",
      property: "Downtown Dubai Flat",
      amount: "AED 3,900,000",
      date: "2025-10-20",
      status: "Completed",
    },
  ]);

  // Filter state
  const [filter, setFilter] = useState("default");

  // Filter logic
  const getFilteredTransactions = () => {
    if (filter === "completed") {
      return transactions.filter((t) => t.status === "Completed");
    } else if (filter === "pending") {
      return transactions.filter((t) => t.status === "Pending");
    }
    return transactions;
  };

  const filteredTransactions = getFilteredTransactions();

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 p-8 overflow-x-auto">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Property Sale Transactions (Dubai)
        </h1>

        {/* Filter Dropdown */}
        <div className="flex items-center gap-3 mb-6">
          <label className="font-medium text-gray-700">Filter By:</label>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 focus:ring-green-500"
          >
            <option value="default">All</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>
        </div>

        {/* Table */}
        <div>
          <table className="w-full bg-white rounded-lg shadow-md border border-gray-200">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Transaction ID</th>
                <th className="py-3 px-4 text-left">Buyer</th>
                <th className="py-3 px-4 text-left">Seller</th>
                <th className="py-3 px-4 text-left">Property</th>
                <th className="py-3 px-4 text-left">Amount (AED)</th>
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map((tx, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="py-3 px-4">{tx.id}</td>
                  <td className="py-3 px-4">{tx.buyer}</td>
                  <td className="py-3 px-4">{tx.seller}</td>
                  <td className="py-3 px-4">{tx.property}</td>
                  <td className="py-3 px-4 font-semibold text-green-700">
                    {tx.amount}
                  </td>
                  <td className="py-3 px-4">{tx.date}</td>
                  <td
                    className={`py-3 px-4 font-semibold ${
                      tx.status === "Completed"
                        ? "text-green-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {tx.status}
                  </td>
                  <td className="flex gap-3 items-center py-3 px-4">
                    <Eye className="cursor-pointer" />
                    <Trash className="cursor-pointer text-red-600" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Empty message */}
          {filteredTransactions.length === 0 && (
            <p className="text-center text-gray-500 mt-6">
              No transactions found.
            </p>
          )}
        </div>
      </main>
    </div>
  );
};

export default TransactionsPage;
