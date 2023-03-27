import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      <nav className="flex justify-between items-center bg-gradient-to-r from-yellow-500 to-red-500 py-4 px-6">
        <div className="flex items-center">
          <h1 className="text-white text-lg font-semibold">My App Title</h1>
        </div>
        <Link to="/login" className="text-white font-medium hover:underline">
          Login
        </Link>
      </nav>
      <main className="flex-grow p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
