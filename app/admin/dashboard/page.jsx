 
// "use client";
// import Sidebar from "../../components/ui/sidebar";
// import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
// import { Users, Box, DollarSign, CheckCircle } from "lucide-react";

// export default function AdminDashboard() {
//   const stats = [
//     { title: "Total Users", value: 3200, icon: Users, color: "bg-green-100 text-green-600" },
//     { title: "Total Vendors", value: 120, icon: Users, color: "bg-amber-100 text-amber-500" },
//     { title: "Properties Listed", value: 540, icon: Box, color: "bg-blue-100 text-blue-500" },
//     { title: "Pending Approvals", value: 14, icon: CheckCircle, color: "bg-red-100 text-red-500" },
//     { title: "Revenue", value: "AED 5,240,000", icon: DollarSign, color: "bg-purple-100 text-purple-500" },
//   ];

//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       <Sidebar />
//       <div className="flex-1 p-8">
//         <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6">
//           {stats.map((stat, i) => (
//             <Card key={i} className="shadow-lg rounded-2xl border-0 bg-white hover:shadow-2xl transition transform hover:-translate-y-1">
//               <CardHeader className="flex items-center gap-4 p-5">
//                 <div className={`w-12 h-12 flex items-center justify-center rounded-full ${stat.color}`}>
//                   <stat.icon className="w-6 h-6" />
//                 </div>
//                 <CardTitle className="text-gray-700 text-lg font-semibold">{stat.title}</CardTitle>
//               </CardHeader>
//               <CardContent className="px-5 pb-5">
//                 <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";
import Sidebar from "../../components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Users, Box, DollarSign, CheckCircle, Calendar } from "lucide-react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function AdminDashboard() {
  const stats = [
    { title: "Total Users", value: 3200, icon: Users, color: "bg-green-100 text-green-600" },
    { title: "Total Vendors", value: 120, icon: Users, color: "bg-amber-100 text-amber-500" },
    { title: "Properties Listed", value: 540, icon: Box, color: "bg-blue-100 text-blue-500" },
    { title: "Pending Approvals", value: 14, icon: CheckCircle, color: "bg-red-100 text-red-500" },
    { title: "Revenue", value: "AED 5,240,000", icon: DollarSign, color: "bg-purple-100 text-purple-500" },
  ];

  const todayStats = [
    { label: "New Users", value: 12, color: "text-green-600" },
    { label: "New Vendors", value: 3, color: "text-amber-500" },
    { label: "New Properties", value: 8, color: "text-blue-500" },
    { label: "Revenue Today", value: "AED 42,000", color: "text-purple-500" },
  ];

  const chartData = [
    { month: "Jan", listings: 120 },
    { month: "Feb", listings: 200 },
    { month: "Mar", listings: 180 },
    { month: "Apr", listings: 250 },
    { month: "May", listings: 300 },
    { month: "Jun", listings: 280 },
    { month: "Jul", listings: 320 },
    { month: "Aug", listings: 360 },
    { month: "Sep", listings: 400 },
    { month: "Oct", listings: 420 },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-2 text-gray-500">
            <Calendar size={18} />
            <span>{new Date().toLocaleDateString()}</span>
          </div>
        </div>

        {/* Top Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6 mb-10">
          {stats.map((stat, i) => (
            <Card key={i} className="shadow-lg rounded-2xl border-0 bg-white hover:shadow-2xl transition transform hover:-translate-y-1">
              <CardHeader className="flex items-center gap-4 p-5">
                <div className={`w-12 h-12 flex items-center justify-center rounded-full ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-gray-700 text-lg font-semibold">{stat.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-5 pb-5">
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Today's Updates */}
        <Card className="mb-10 border-0 shadow-lg rounded-2xl bg-white">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-800 mb-2">
              Today’s Updates
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {todayStats.map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
                  <p className="text-sm text-gray-600">{item.label}</p>
                  <p className={`text-xl font-bold ${item.color}`}>{item.value}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Analytics Chart */}
        <Card className="border-0 shadow-lg rounded-2xl bg-white">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-800">
              Property Listings Growth (2025)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip />
                <Line type="monotone" dataKey="listings" stroke="#10b981" strokeWidth={3} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

