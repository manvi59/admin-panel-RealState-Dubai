"use client";
import Sidebar from "../../components/ui/sidebar";
import { Card, CardHeader, CardContent, CardTitle } from "../../components/ui/card";
import { Users, Building2, Eye, Star } from "lucide-react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function AnalyticsPage() {
  const overview = [
    { title: "Total Vendors", value: 120, icon: Users, color: "bg-amber-100 text-amber-600" },
    { title: "Active Vendors", value: 85, icon: Users, color: "bg-green-100 text-green-600" },
    { title: "Total Properties", value: 540, icon: Building2, color: "bg-blue-100 text-blue-600" },
    { title: "Engaged Properties", value: 220, icon: Eye, color: "bg-purple-100 text-purple-600" },
    { title: "Total Visitors", value: "12,400", icon: Star, color: "bg-pink-100 text-pink-600" },
  ];

  const vendorData = [
    { name: "Vendor A", views: 5400, inquiries: 120, rating: 4.7 },
    { name: "Vendor B", views: 4300, inquiries: 90, rating: 4.5 },
    { name: "Vendor C", views: 3900, inquiries: 70, rating: 4.3 },
    { name: "Vendor D", views: 3100, inquiries: 65, rating: 4.1 },
  ];

  const engagementData = [
    { month: "Jan", views: 1200, favorites: 300, inquiries: 150 },
    { month: "Feb", views: 1400, favorites: 320, inquiries: 180 },
    { month: "Mar", views: 1800, favorites: 400, inquiries: 210 },
    { month: "Apr", views: 2000, favorites: 480, inquiries: 250 },
    { month: "May", views: 2600, favorites: 550, inquiries: 290 },
    { month: "Jun", views: 3100, favorites: 600, inquiries: 330 },
  ];

  const visitorData = [
    { month: "Jan", unique: 800, returning: 200 },
    { month: "Feb", unique: 1000, returning: 300 },
    { month: "Mar", unique: 1300, returning: 400 },
    { month: "Apr", unique: 1500, returning: 450 },
    { month: "May", unique: 1700, returning: 500 },
  ];

  const topProperties = [
    { property: "Marina Heights Tower", vendor: "Vendor A", views: 1200, inquiries: 60, favorites: 25, rating: 4.8 },
    { property: "Downtown Pearl Residences", vendor: "Vendor B", views: 1100, inquiries: 55, favorites: 20, rating: 4.7 },
    { property: "Palm Jumeirah Villa", vendor: "Vendor C", views: 980, inquiries: 45, favorites: 18, rating: 4.6 },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Analytics / Insights</h1>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 mb-10">
          {overview.map((item, i) => (
            <Card key={i} className="shadow-lg rounded-2xl border-0 bg-white hover:shadow-2xl transition">
              <CardHeader className="flex items-center gap-4 p-5">
                <div className={`w-12 h-12 flex items-center justify-center rounded-full ${item.color}`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-gray-700 text-lg font-semibold">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-5 pb-5">
                <p className="text-2xl font-bold text-gray-900">{item.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Vendor Performance */}
        <Card className="mb-10 border-0 shadow-lg rounded-2xl bg-white">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-800">
              Top Performing Vendors
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={vendorData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="views" fill="#60a5fa" />
                <Bar dataKey="inquiries" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Property Engagement */}
        <Card className="mb-10 border-0 shadow-lg rounded-2xl bg-white">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-800">
              Property Engagement Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={engagementData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="views" stroke="#10b981" strokeWidth={3} />
                <Line type="monotone" dataKey="favorites" stroke="#6366f1" strokeWidth={3} />
                <Line type="monotone" dataKey="inquiries" stroke="#f59e0b" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Visitor Insights */}
        <Card className="mb-10 border-0 shadow-lg rounded-2xl bg-white">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-800">Visitor Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={visitorData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="unique" stroke="#3b82f6" strokeWidth={3} />
                <Line type="monotone" dataKey="returning" stroke="#f97316" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Top Properties */}
        <Card className="border-0 shadow-lg rounded-2xl bg-white">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-800">
              Top Performing Properties
            </CardTitle>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-gray-100 text-left text-gray-700">
                  <th className="p-3">Property</th>
                  <th className="p-3">Vendor</th>
                  <th className="p-3">Views</th>
                  <th className="p-3">Inquiries</th>
                  <th className="p-3">Favorites</th>
                  <th className="p-3">Rating</th>
                </tr>
              </thead>
              <tbody>
                {topProperties.map((p, i) => (
                  <tr key={i} className="border-t hover:bg-gray-50">
                    <td className="p-3">{p.property}</td>
                    <td className="p-3">{p.vendor}</td>
                    <td className="p-3">{p.views}</td>
                    <td className="p-3">{p.inquiries}</td>
                    <td className="p-3">{p.favorites}</td>
                    <td className="p-3">{p.rating}</td>
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
