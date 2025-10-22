// "use client";
// import Link from "next/link";
// import { Home, Users, Box, Settings, LogOut } from "lucide-react";

// export default function Sidebar() {
//   return (
//     <div className="w-64 bg-white border-r min-h-screen shadow-md flex flex-col">
//       <div className="p-6 text-2xl font-bold text-green-700 border-b">Dubai Real Estate</div>
//       <nav className="flex-1 px-4 py-6 space-y-2">
//         <Link href="/admin/dashboard" className="flex items-center gap-2 p-2 rounded hover:bg-green-50">
//           <Home size={18} /> Dashboard
//         </Link>
//         <Link href="/admin/properties" className="flex items-center gap-2 p-2 rounded hover:bg-green-50">
//           <Box size={18} /> Properties
//         </Link>
//         <Link href="/admin/vendors" className="flex items-center gap-2 p-2 rounded hover:bg-green-50">
//           <Users size={18} /> Vendors
//         </Link>
//         <Link href="/admin/settings" className="flex items-center gap-2 p-2 rounded hover:bg-green-50">
//           <Settings size={18} /> Settings
//         </Link>
//       </nav>
//       <div className="p-4 border-t">
//         <button className="w-full flex items-center gap-2 p-2 rounded text-red-600 hover:bg-red-50">
//           <LogOut size={18} /> Logout
//         </button>
//       </div>
//     </div>
//   );
// }


"use client";
import Link from "next/link";
import { Home, Users, Box, Settings, LogOut } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 bg-white border-r min-h-screen shadow-md flex flex-col">
      <div className="p-6 text-2xl font-bold text-green-700 border-b">Dubai Real Estate</div>
      <nav className="flex-1 px-4 py-6 space-y-2">
        <Link href="/admin/dashboard" className="flex items-center gap-2 p-2 rounded hover:bg-green-50">
          <Home size={18} /> Dashboard
        </Link>
        <Link href="/admin/properties" className="flex items-center gap-2 p-2 rounded hover:bg-green-50">
          <Box size={18} /> Properties
        </Link>
        <Link href="/admin/vendors" className="flex items-center gap-2 p-2 rounded hover:bg-green-50">
          <Users size={18} /> Vendors
        </Link>
        <Link href="/admin/settings" className="flex items-center gap-2 p-2 rounded hover:bg-green-50">
          <Settings size={18} /> Settings
        </Link>
      </nav>
      <div className="p-4 border-t">
        <button className="w-full flex items-center gap-2 p-2 rounded text-red-600 hover:bg-red-50">
          <LogOut size={18} /> Logout
        </button>
      </div>
    </div>
  );
}

