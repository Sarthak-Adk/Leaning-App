import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { HiBell, HiMenu, HiX } from "react-icons/hi";
import { RiDashboardFill, RiTeamFill } from "react-icons/ri";
import { FaBookOpen } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { MdContactPhone } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";

const Layout = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar (Mobile & Desktop) */}
      <aside
        className={`bg-white w-64 h-full shadow-md fixed md:relative md:translate-x-0 transition-transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        } md:block`}
      >
        <div className="flex items-center justify-between px-18 py-5">
          <h1 className="text-lg font-bold text-blue-600 cursor-pointer" onClick={() => navigate("/")}>
            Lean Code
          </h1>
          {/* Close button on Mobile */}
          <button className="md:hidden text-gray-700" onClick={() => setSidebarOpen(false)}>
            <HiX className="text-2xl" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          <SidebarNavLink to="dashboard"><RiDashboardFill className="mx-1"/>Dashboard</SidebarNavLink>
          <SidebarNavLink to="courses"><FaBookOpen className="mx-1"/>Courses</SidebarNavLink>
          <SidebarNavLink to="projects"><GoProjectRoadmap className="mx-1"/>Projects</SidebarNavLink>
          <SidebarNavLink to="about"><RiTeamFill className="mx-1"/>About</SidebarNavLink>
          <SidebarNavLink to="contact"><MdContactPhone className="mx-1"/>Contact</SidebarNavLink>
          <SidebarNavLink to="logout"><IoLogOut className="mx-1"/>Log Out</SidebarNavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-md px-6 py-4 flex justify-between md:justify-end items-center space-x-4">
          {/* Hamburger menu button (Mobile) */}
          <button className="md:hidden text-gray-700" onClick={() => setSidebarOpen(true)}>
            <HiMenu className="text-2xl" />
          </button>

          {/* Search Bar (Hidden on small screens, visible on md and above) */}
   


          <div className="relative hidden md:block flex-grow max-w-sm">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 pl-10 border rounded-md focus:outline-none"
            />
            <span className="absolute left-3 top-2 text-gray-400">🔍</span>
          </div>

          {/* Notification & User Info */}
          <div className="flex items-center space-x-4">
            <HiBell className="text-gray-600 text-xl cursor-pointer" />
            
            <div className="flex items-center space-x-2">
              <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="User"
                className="w-8 h-8 rounded-full"
              />
              <span className="font-medium hidden sm:inline mr-12">Sarthak</span>
            </div>
          </div>
        </header>

        {/* Dynamic Content */}
        <main className="flex-grow bg-gray-200 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

const SidebarNavLink = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center px-4 py-2 rounded-md transition-all ${
        isActive ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-blue-200"
      }`
    }
    end
  >
    {children}
  </NavLink>
);

export default Layout;
