"use client";
import Sidebar from "../../components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import Image from "next/image";
import { Edit2, Trash2, Plus, Calendar } from "lucide-react";
import Link from "next/link";

export default function BlogManagement() {
  const blogs = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1502920514313-52581002a659?w=200",
      title: "Top 10 Luxury Properties in Downtown Dubai",
      author: "Manvi Sharma",
      date: "September 25, 2025",
      excerpt: "Explore the most prestigious apartments and penthouses in the heart of Downtown Dubai.",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=200",
      title: "Why Dubai Marina is the Best Place to Invest in 2025",
      author: "Aarav Patel",
      date: "October 3, 2025",
      excerpt: "Dubai Marina continues to attract investors with high ROI, vibrant lifestyle, and waterfront living.",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=200",
      title: "Palm Jumeirah Villas: The Epitome of Coastal Luxury",
      author: "Sara Khan",
      date: "September 15, 2025",
      excerpt: "From private beaches to infinity pools, Palm Jumeirah villas redefine modern luxury living.",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 p-8 overflow-x-auto  ">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Blog Management</h1>
          <button className="bg-green-700 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
            <Plus size={18} /> Add Blog
          </button>
        </div>

        {/* Sort Dropdown */}
        <div className="mb-4">
          <label className="font-semibold text-gray-700 mr-2">Sort by:</label>
          <select className="border rounded-md px-3 py-2 text-gray-600 focus:outline-none focus:ring focus:ring-blue-300">
            <option value="default">Default</option>
            <option value="date">Date</option>
            <option value="title">Title</option>
            <option value="author">Author</option>
          </select>
        </div>

        {/* Blog Table */}
        <Card className="border-0 shadow-lg rounded-2xl  ">
          <CardHeader className="bg-green-700">
            <CardTitle className="text-lg font-semibol">
              All Blog Posts
            </CardTitle>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 text-left text-gray-700">
                  <th className="p-3">Image</th>
                  <th className="p-3">Title</th>
                  <th className="p-3">Author</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Excerpt</th>
                  <th className="p-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog) => (
                  <tr key={blog.id} className="border-t hover:bg-gray-50">
                    <td className="p-3">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        width={100}
                        height={60}
                        className="rounded-md object-cover"
                      />
                    </td>
                    <td className="p-3 font-medium text-gray-800">{blog.title}</td>
                    <td className="p-3 text-gray-600">{blog.author}</td>
                    <td className="p-3 text-gray-600 flex items-center gap-1">
                      {/* <Calendar size={14} /> */}
                       {blog.date}
                    </td>
                    <td className="p-3 text-gray-600">{blog.excerpt}</td>
                    <td className="p-3 text-center flex align-center">
                       <Link href={`/admin/blog/edit`} className="text-green-600 hover:text-green-800 mr-3">
                          <Edit2 size={18} />
                        </Link>
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


