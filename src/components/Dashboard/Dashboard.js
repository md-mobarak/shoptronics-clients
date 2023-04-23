import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import { FaUsers, FaCog, FaUpload } from "react-icons/fa";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div>
      {/* <h1>Dashboard</h1> */}
      <div className="w-full flex justify-center items-center h-16 bg-gradient-to-r from-green-400 to-yellow-300">
        <h1 className="  text-4xl font-serif font-bold text-netual">ADMIN</h1>
      </div>
      <div className="w-40 h-screen bg-gradient-to-r from-yellow-300 to-green-500">
        <div className="hover:btn hover:btn-neutral hover:text-white hover:btn-sm w-full">
          <button>
            <FaUsers></FaUsers>
          </button>
          <span>All User</span>
        </div>
        <div className="hover:btn hover:btn-neutral hover:text-white hover:btn-sm w-full">
          <button>
            <FaCog></FaCog>
          </button>
          <span>Manage Products</span>
        </div>
        <div className="hover:btn hover:btn-neutral hover:text-white hover:btn-sm w-full">
          <button>
            <FaUpload></FaUpload>
          </button>
          <span>Upload Product</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
