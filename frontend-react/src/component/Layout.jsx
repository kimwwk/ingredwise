import React from "react";
import { useTranslation } from "react-i18next";
import { Link, Outlet } from "react-router-dom";
import { FaHome, FaCog } from "react-icons/fa";

const Layout = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-light-beige min-h-screen">
      <nav className="bg-muted-coral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link
                to="/"
                className="flex-shrink-0 text-white flex items-center space-x-1"
              >
                <FaHome className="text-soft-teal w-6 h-6" />
                <span className="text-xl font-semibold">
                  {t("portal-name")}
                </span>
              </Link>
            </div>
            <div className="text-soft-teal">
              {/* Add settings icon or other navigation elements here */}
              <FaCog className="w-6 h-6 cursor-pointer" />
            </div>
          </div>
        </div>
      </nav>
      <main className="bg-light-beige py-20">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="p-6 max-w-screen-xl mx-auto overflow-auto">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
