// import React from 'react'
// import RootLayout from "../layout";

"use client";
import { useState } from "react";
import Sidebar from "../../components/ui/sidebar";
import { Card, CardContent } from "../../components/ui/card";
import Button from "../../components/ui/button";
import { Icon } from "lucide-react";
import { UserRoundPlus } from 'lucide-react';
import { UserRoundPen } from 'lucide-react';
import { Trash } from 'lucide-react';
import toggle from "../../components/ui/toggle"
import toggleLayout from "../../components/ui/toggle";
import { Home, Users, Box, Settings, LogOut, X } from "lucide-react";
import { useRouter } from "next/navigation";

const page = () => {
  const [users, setUsers] = useState([
    {name: "aarav sharma", email: "aarav@gmail.com", role: "buyer", status: "active", lastlogin: "10.30pm"},
    {name: "Manvi mehta", email: "manviagarwal@gmail.com", role: "seller", status: "inactive", lastlogin: "25/10/2025"},
    {name: "Lakshay sharma", email: "sharmalakshay899@gmail.com", role: "renter", status: "active", lastlogin: "yesterday"},
  ]);

   

  // Filter state
    const router = useRouter();
  const [filter, setFilter] = useState("default");



  //Function to organize data based on selected filter
  const getFilteredUsers = () => {
    if (filter === "latest"){
      return [...users].sort((a, b) => new Date(b.lastLogin) - new Date(a.lastLogin));
    }else if (filter === "alphabet"){
      return [...users].sort((a,b) => a.name.localeCompare(b.name));
    }
    return users; // default
  };

//    function DashboardPage() {
//   return (
//     <toggleLayout/>
//   );
// }


  const filteredUsers = getFilteredUsers();
  return (
    <>
    <div>
      <div className="flex min-h-screen bg-gray-50">
        {/*Sidebar on left*/}
        <Sidebar />
        {/* <toggleLayout/> */}
        
           {/* <X size={22}  color="black" className="md:hidden"  onClick={()=>setShow(!show)}/> */}

        {/* Main content */}
        <main className="flex-1 p-8 overflow-x-auto">
         <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">User Management</h1>
          <button
            onClick={() => router.push("/admin/user/add")}
            className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-md transition-all"
          >
            <UserRoundPlus size={18} /> Add User
          </button>
        </div>


          {/* filter dropdown */}
          <div className="flex items-center gap-3 mb-6">
            <label className="font-medium text-gray-700">Sort By:</label>
            <select 
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 focus:ring-green-500">
              <option value="default">Default</option>
              <option value="latest">Latest</option>
              <option value="alphabet">Alphabetical (A-Z)</option>
              </select>
          </div>

          {/* table */}
          <div>
            <table className="w-full bg-white rounded-lg shadow-md border border-gray-200">
              <thead className="w-full bg-green-600  text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Name</th>
                  <th className="py-3 px-4 text-left">Email</th>
                  <th className="py-3 px-4 text-left">Role</th>
                  <th className="py-3 px-4 text-left">Account status</th>
                  <th className="py-3 px-4 text-left">Last Login</th>
                  <th className="py-3 px-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user, index) => (
                  <tr key={index} className="border-b hover:bg-brown-80 transition">
                    <td className="py-3 px-4">{user.name}</td>
                    <td className="py-3 px-4">{user.email}</td>
                    <td className="py-3 px-4">{user.role}</td>
                    <td className={`py-3 px-4 font-semibold ${user.status === "active" ? "text-green-600" : "text-red-500"}`}>{user.status}</td>
                    <td className="py-3 px-4">{user.lastlogin}</td>
                   <td className="flex justify-center items-center gap-3 mt-4"> 
                    {/* <UserRoundPlus /> */}
                   <UserRoundPen
                    onClick={() => router.push(`/admin/user/edit/${index}`)}
                    className=" hover:text-blue-800 cursor-pointer transition"
                  />

                    <Trash />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </main>
      </div>
    </div>
    </>
  )
}

export default page