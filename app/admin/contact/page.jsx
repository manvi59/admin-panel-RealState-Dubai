"use client";
import { useState } from "react";
import Sidebar from "../../components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Trash2, Eye } from "lucide-react";

export default function ContactManagement() {
  // Sample data matching the contact form fields from your image
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+971 50 123 4567",
      subject: "Property Enquiry",
      message:
        "Hello — I'm interested in a 2BHK near Downtown. Please share available listings and price range.",
      received: "2025-10-28 14:32",
    },
    {
      id: 2,
      name: "Fatima Al Zar",
      email: "fatima@example.com",
      phone: "+971 55 987 6543",
      subject: "Mortgage Assistance",
      message:
        "Hi, I need guidance on mortgage options for first-time buyers. Can someone call me?",
      received: "2025-10-27 10:12",
    },
    {
      id: 3,
      name: "Ravi Kumar",
      email: "ravi.kumar@example.com",
      phone: "+91 98765 43210",
      subject: "Investment Opportunity",
      message:
        "I am looking for high-ROI investment properties. Kindly send recent listings and ROI details.",
      received: "2025-10-25 09:05",
    },
  ]);

  const [selected, setSelected] = useState(null); // for view modal

  const handleDelete = (id) => {
    if (!confirm("Delete this contact message?")) return;
    setContacts((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Contact Management</h1>
        </div>

        {/* Card / Table */}
        <Card className="border-0 shadow-lg rounded-2xl">
          <CardHeader className="bg-green-700 text-white rounded-t-2xl">
            <CardTitle className="text-lg font-semibold">All Contact Messages</CardTitle>
          </CardHeader>

          <CardContent className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-gray-100 text-left text-gray-700">
                  <th className="p-3">Full Name</th>
                  <th className="p-3">Email Address</th>
                  <th className="p-3">Phone Number</th>
                  <th className="p-3">Subject</th>
                  <th className="p-3">Message (preview)</th>
                  <th className="p-3">Received</th>
                  <th className="p-3 text-center">Actions</th>
                </tr>
              </thead>

              <tbody>
                {contacts.map((c) => (
                  <tr key={c.id} className="border-t hover:bg-gray-50 align-top">
                    <td className="p-3 font-medium text-gray-800">{c.name}</td>
                    <td className="p-3 text-gray-600">{c.email}</td>
                    <td className="p-3 text-gray-600">{c.phone}</td>
                    <td className="p-3 text-gray-700 font-semibold">{c.subject}</td>
                    <td className="p-3 text-gray-600 max-w-xl truncate" title={c.message}>
                      {c.message}
                    </td>
                    <td className="p-3 text-gray-500">{c.received}</td>
                    <td className="p-3 text-center">
                      <button
                        onClick={() => setSelected(c)}
                        className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 mr-3"
                        title="View message"
                      >
                        <Eye size={16} />
                        <span className="hidden md:inline">View</span>
                      </button>

                      <button
                        onClick={() => handleDelete(c.id)}
                        className="inline-flex items-center gap-2 text-red-600 hover:text-red-800"
                        title="Delete message"
                      >
                        <Trash2 size={16} />
                        <span className="hidden md:inline">Delete</span>
                      </button>
                    </td>
                  </tr>
                ))}
                {contacts.length === 0 && (
                  <tr>
                    <td colSpan={7} className="p-6 text-center text-gray-500">
                      No contact messages found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>

      {/* Simple View Modal (React, Tailwind) */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-green-700 text-white p-4">
              <h3 className="text-lg font-semibold">View Message</h3>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-500">Full Name</p>
                  <p className="font-medium text-gray-800">{selected.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium text-gray-800">{selected.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium text-gray-800">{selected.phone}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Received</p>
                  <p className="font-medium text-gray-800">{selected.received}</p>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm text-gray-500">Subject</p>
                <p className="font-semibold text-gray-800">{selected.subject}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Message</p>
                <div className="mt-2 p-4 bg-gray-50 rounded-md text-gray-700 whitespace-pre-wrap">
                  {selected.message}
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-3">
                <button
                  onClick={() => setSelected(null)}
                  className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    // example: mark as handled or navigate to reply functionality
                    alert("Reply / mark handled (implement backend)");
                    setSelected(null);
                  }}
                  className="px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-800"
                >
                  Reply
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
