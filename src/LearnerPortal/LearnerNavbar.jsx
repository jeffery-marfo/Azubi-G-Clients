import React from "react";
import { NavLink } from "react-router-dom";
import { LayoutDashboard, Settings, Receipt } from "lucide-react";

const LearnerNavbar = () => {
  const links = [
    { to: "/learner/tracks/portal-dashboard", label: "Dashboard", icon: LayoutDashboard },
    { to: "/learner/tracks/settings", label: "Settings", icon: Settings },
    { to: "/learner/tracks/invoices", label: "Invoices", icon: Receipt },
  ];

  return (
    <header className="bg-blue-600 h-32 flex items-end pb-0">
      <div className="max-w-7xl mx-auto w-full">
        <div className="bg-white mx-6 rounded-md shadow-sm">
          <nav className="flex">
            {links.map(({ to, label, icon: Icon }, idx) => (
              <NavLink
                key={label}
                to={to}
                className={({ isActive }) =>
                  `px-6 py-4 flex items-center space-x-2 transition-colors ${
                    isActive
                      ? "bg-blue-700 text-white"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-sm"
                  } ${idx === 0 ? "rounded-l-sm" : ""} ${
                    idx === links.length - 1 ? "rounded-r-sm" : ""
                  }`
                }
              >
                <Icon className="w-5 h-5" />
                <span>{label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default LearnerNavbar;
