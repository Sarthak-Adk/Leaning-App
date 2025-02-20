// src/Component/Layout.jsx
import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { HiBell } from "react-icons/hi";

const Layout = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="bg-white w-64 h-full border-r shadow-md">
        <div className="flex items-center justify-center py-[23px] border-b">
          <h1 className="text-lg font-bold text-blue-600 cursor-pointer" onClick={() => navigate("/")}>
            Lean Code
          </h1>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2 ">
          <SidebarNavLink to="dashboard">Dashboard</SidebarNavLink>
          <SidebarNavLink to="courses">Courses</SidebarNavLink>
          <SidebarNavLink to="projects">Projects</SidebarNavLink>
          <SidebarNavLink to="about">About</SidebarNavLink>
          <SidebarNavLink to="contact">Contact</SidebarNavLink>
           </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-md px-6 py-[16.5px] flex justify-between items-center border-b">
          <div className="relative w-1/3">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 pl-10 border rounded-md focus:outline-none"
            />
            <span className="absolute left-3 top-2 text-gray-400">🔍</span>
          </div>

          <div className="flex items-center space-x-6">
            <HiBell className="text-gray-600 text-xl cursor-pointer" />
            <div className="flex items-center space-x-2">
              <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="User"
                className="w-8 h-8 rounded-full"
              />
              <span className="font-medium">Sarthak</span>
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
      `flex items-center px-4 py-2  rounded-md transition-all ${
        isActive ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-blue-100"
      }`
    }
    end
  >
    {children}
  </NavLink>
);

export default Layout;
