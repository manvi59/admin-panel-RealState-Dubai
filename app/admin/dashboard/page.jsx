// "use client";
// import Sidebar from "../../components/ui/sidebar";
// import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
// import { Users, Box, DollarSign, CheckCircle } from "lucide-react";

// export default function AdminDashboard() {
//   const stats = [
//     { title: "Total Users", value: 3200, icon: Users, color: "text-green-600" },
//     { title: "Total Vendors", value: 120, icon: Users, color: "text-amber-500" },
//     { title: "Properties Listed", value: 540, icon: Box, color: "text-blue-500" },
//     { title: "Pending Approvals", value: 14, icon: CheckCircle, color: "text-red-500" },
//     { title: "Revenue", value: "AED 5,240,000", icon: DollarSign, color: "text-purple-500" },
//   ];

//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       <Sidebar />
//       <div className="flex-1 p-8">
//         <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
//         <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-6">
//           {stats.map((stat, i) => (
//             <Card key={i} className="shadow-lg rounded-2xl border-0 bg-white hover:shadow-xl transition">
//               <CardHeader>
//                 <CardTitle className="flex items-center gap-2">
//                   <stat.icon className={`${stat.color} w-5 h-5`} /> {stat.title}
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-2xl font-bold">{stat.value}</p>
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
import { Users, Box, DollarSign, CheckCircle } from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    { title: "Total Users", value: 3200, icon: Users, color: "bg-green-100 text-green-600" },
    { title: "Total Vendors", value: 120, icon: Users, color: "bg-amber-100 text-amber-500" },
    { title: "Properties Listed", value: 540, icon: Box, color: "bg-blue-100 text-blue-500" },
    { title: "Pending Approvals", value: 14, icon: CheckCircle, color: "bg-red-100 text-red-500" },
    { title: "Revenue", value: "AED 5,240,000", icon: DollarSign, color: "bg-purple-100 text-purple-500" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
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
      </div>
    </div>
  );
}

