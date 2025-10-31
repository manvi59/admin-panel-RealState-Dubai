// // "use client";
// // import Link from "next/link";
// // import { Home, Users, Box, Settings, LogOut } from "lucide-react";

// // export default function Sidebar() {
// //   return (
// //     <div className="w-64 bg-white border-r min-h-screen shadow-md flex flex-col">
// //       <div className="p-6 text-2xl font-bold text-green-700 border-b">Dubai Real Estate</div>
// //       <nav className="flex-1 px-4 py-6 space-y-2">
// //         <Link href="/admin/dashboard" className="flex items-center gap-2 p-2 rounded hover:bg-green-50">
// //           <Home size={18} /> Dashboard
// //         </Link>
// //         <Link href="/admin/properties" className="flex items-center gap-2 p-2 rounded hover:bg-green-50">
// //           <Box size={18} /> Properties
// //         </Link>
// //         <Link href="/admin/vendors" className="flex items-center gap-2 p-2 rounded hover:bg-green-50">
// //           <Users size={18} /> Vendors
// //         </Link>
// //         <Link href="/admin/settings" className="flex items-center gap-2 p-2 rounded hover:bg-green-50">
// //           <Settings size={18} /> Settings
// //         </Link>
// //       </nav>
// //       <div className="p-4 border-t">
// //         <button className="w-full flex items-center gap-2 p-2 rounded text-red-600 hover:bg-red-50">
// //           <LogOut size={18} /> Logout
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }


// // "use client";
// // import Link from "next/link";
// // import { Home, Users, Box, Settings, LogOut } from "lucide-react";

// // export default function Sidebar() {
// //   return (
// //     <div className="w-64 bg-white border-r min-h-screen shadow-md flex flex-col">
// //       <div className="p-6 text-2xl font-bold text-green-700 border-b">Dubai Real Estate</div>
// //       <nav className="flex-1 px-4 py-6 space-y-2">
// //         <Link href="/admin/dashboard" className="flex items-center gap-2 p-2 rounded hover:bg-green-50">
// //           <Home size={18} /> Dashboard
// //         </Link>
// //         <Link href="/admin/properties" className="flex items-center gap-2 p-2 rounded hover:bg-green-50">
// //           <Box size={18} /> Properties
// //         </Link>
// //         <Link href="/admin/vendors" className="flex items-center gap-2 p-2 rounded hover:bg-green-50">
// //           <Users size={18} /> Vendors
// //         </Link>
// //         <Link href="/admin/vendors" className="flex items-center gap-2 p-2 rounded hover:bg-green-50">
// //           <Users size={18} /> Users
// //         </Link>
// //         <Link href="/admin/vendors" className="flex items-center gap-2 p-2 rounded hover:bg-green-50">
// //           <Users size={18} /> Transactions & Refunds
// //         </Link>
// //         <Link href="/admin/vendors" className="flex items-center gap-2 p-2 rounded hover:bg-green-50">
// //           <Users size={18} /> Revenue Report
// //         </Link>
// //         <Link href="/admin/settings" className="flex items-center gap-2 p-2 rounded hover:bg-green-50">
// //           <Settings size={18} /> Settings
// //         </Link>
// //       </nav>
// //       <div className="p-4 border-t">
// //         <button className="w-full flex items-center gap-2p-2 rounded text-red-600 hover:bg-red-50">
// //           <LogOut size={18} /> Logout
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// "use client";
// import Link from "next/link";
// import { Home, Users, Box, Settings, LogOut, X } from "lucide-react";
// import toggle from "../../components/ui/toggle"
// import { useState } from "react";

// export default function Sidebar({ isOpen, onClose }) {
//   // ${isOpen ? "translate-x-0" : "-translate-x-full"} 
//   const [show, setShow] = useState(true);
//   return (

     
//     {show? 

//     <div
//       className={`fixed z-50 inset-y-0 left-0 w-64 bg-white border-r shadow-md flex flex-col 
//       transform transition-transform duration-300 ease-in-out
//        ${isOpen && show ? "translate-x-0" : "-translate-x-full"} 
//       md:relative md:translate-x-0 md:min-h-screen`}
//     >
//       {/* Header */}
//       <div className="flex items-center justify-between p-6 border-b">
//         <div className="text-2xl font-bold text-green-700">Dubai Real Estate</div>

//         {/* Close button (only visible on mobile) */}
//         <button
//           // onClick={onClose}
//           onClick={() => setShow(!show)}
//           className=" p-2 rounded hover:bg-gray-100"
//         >
//           <X size={22} color="black" />
//         </button>
//       </div>

//       {/* Navigation links */}
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
//         <Link href="/admin/users" className="flex items-center gap-2 p-2 rounded hover:bg-green-50">
//           <Users size={18} /> Users
//         </Link>
//         <Link href="/admin/transactions" className="flex items-center gap-2 p-2 rounded hover:bg-green-50">
//           <Users size={18} /> Transactions & Refunds
//         </Link>
//         <Link href="/admin/revenue" className="flex items-center gap-2 p-2 rounded hover:bg-green-50">
//           <Users size={18} /> Revenue Report
//         </Link>
//         <Link href="/admin/settings" className="flex items-center gap-2 p-2 rounded hover:bg-green-50">
//           <Settings size={18} /> Settings
//         </Link>
//       </nav>

//       {/* Logout */}
//       <div className="p-4 border-t">
//         <button className="w-full flex items-center gap-2 p-2 rounded text-red-600 hover:bg-red-50">
//           <LogOut size={18} /> Logout
//         </button>
//       </div>
//     </div>

//       :

//                  <X size={22}  color="black" className="md:hidden"  onClick={()=>setShow(!show)}/>

//     }
//   );
// }


"use client";

import Link from "next/link";
import { useState } from "react";
import { Home, Users, Box, Settings, LogOut, X, Menu } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* --- Mobile Toggle Button --- */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white border rounded shadow-sm hover:bg-gray-100"
      >
        <Menu size={22} />
      </button>

      {/* --- Sidebar --- */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white border-r shadow-md flex flex-col transform transition-transform duration-300 ease-in-out 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:relative md:translate-x-0 md:min-h-screen md:z-0 z-40`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="text-2xl font-bold text-green-700">Dubai Real Estate</div>

          {/* Close Button (Mobile only) */}
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded hover:bg-gray-100 md:hidden"
          >
            <X size={22} color="black" />
          </button>
        </div>

        {/* Navigation Links */}
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
          <Link href="/admin/user" className="flex items-center gap-2 p-2 rounded hover:bg-green-50">
            <Users size={18} /> Users
          </Link>
          <Link href="/admin/blog" className="flex items-center gap-2 p-2 rounded hover:bg-green-50">
            <Users size={18} /> Blogs
          </Link>
          <Link href="/admin/testimonial" className="flex items-center gap-2 p-2 rounded hover:bg-green-50">
            <Users size={18} /> Testimonials
          </Link>
          <Link href="/admin/contact" className="flex items-center gap-2 p-2 rounded hover:bg-green-50">
            <Users size={18} /> Contact Requests
          </Link>
          <Link href="/admin/transactions" className="flex items-center gap-2 p-2 rounded hover:bg-green-50">
            <Users size={18} /> Transactions & Refunds
          </Link>
          <Link href="/admin/revenue" className="flex items-center gap-2 p-2 rounded hover:bg-green-50">
            <Users size={18} /> Revenue Report
          </Link>
          <Link href="/admin/settings" className="flex items-center gap-2 p-2 rounded hover:bg-green-50">
            <Settings size={18} /> Settings
          </Link>
        </nav>

        {/* Logout */}
        <div className="p-4 border-t">
          <button className="w-full flex items-center gap-2 p-2 rounded text-red-600 hover:bg-red-50">
            <LogOut size={18} /> Logout
          </button>
        </div>
      </div>

      {/* --- Overlay for mobile (click to close sidebar) --- */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
        />
      )}
    </>
  );
}

