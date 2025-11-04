"use client";
import Sidebar from "../../components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import Image from "next/image";
import { Edit2, Trash2, Plus, Star } from "lucide-react";
import Link from "next/link";

export default function TestimonialManagement() {
  const testimonials = [
    {
      id: 1,
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      name: "Sarah Johnson",
      role: "Property Buyer",
      text: "PropertyHub made finding our dream home effortless. The team was professional, responsive, and helped us navigate the entire process smoothly.",
      rating: 5,
    },
    {
      id: 2,
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      name: "Ahmed Al-Mansouri",
      role: "Real Estate Investor",
      text: "Excellent service and market knowledge. They helped me find profitable investment properties with great potential. Highly recommended!",
      rating: 5,
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 p-8 overflow-x-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Testimonial Management</h1>
         <Link href="/admin/testimonial/add">
          <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg flex items-center gap-2">
            <Plus size={18} /> Add Testimonial
          </button>
        </Link>

        </div>

        {/* Testimonial Table */}
        <Card className="border-0 shadow-lg rounded-2xl">
          <CardHeader className="bg-green-700 text-white rounded-t-2xl">
            <CardTitle className="text-lg font-semibold">All Testimonials</CardTitle>
          </CardHeader>

          <CardContent className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 text-left text-gray-700">
                  <th className="p-3">User</th>
                  <th className="p-3">Role</th>
                  <th className="p-3">Testimonial</th>
                  <th className="p-3 text-center">Rating</th>
                  <th className="p-3 text-center">Actions</th>
                </tr>
              </thead>

              <tbody>
                {testimonials.map((t) => (
                  <tr key={t.id} className="border-t hover:bg-gray-50">
                    <td className="p-3 flex items-center gap-3" style={{width:"200px"}}>
                     <img
                        src={t.image}
                        alt={t.name}
                        width={50}
                        height={50}
                        className="rounded-full object-cover"
                    />

                      <div>
                        <p className="font-semibold text-gray-800">{t.name}</p>
                      </div>
                    </td>

                    <td className="p-3 text-gray-600">{t.role}</td>
                    <td className="p-3 text-gray-600 max-w-xl truncate">{t.text}</td>
                    <td className="p-3 text-center">
                      <div className="flex justify-center">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                    </td>

                    <td className="p-3 text-center">
                      {/* <Link href={`/admin/testimonials/edit`} className="text-green-600 hover:text-green-800 mr-3">
                        <Edit2 size={18} />
                      </Link> */}
                      <button className="text-red-600 hover:text-red-800">
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
