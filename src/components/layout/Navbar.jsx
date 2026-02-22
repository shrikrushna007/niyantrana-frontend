import { NavLink } from "react-router-dom";
import { Heart } from "lucide-react";

const navItems = [
  { path: "/", label: "Dashboard" },
  { path: "/trends", label: "Trends" },
  { path: "/what-if", label: "WhatIf" },
  { path: "/community", label: "Community" },
  { path: "/profile", label: "Profile" },
];

export default function Navbar() {
  return (
    <nav className="w-full glass-effect border-b border-secondary-200/50 shadow-soft sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary-100 rounded-lg">
            <Heart className="w-6 h-6 text-primary-600" />
          </div>
          <h1 className="text-xl font-bold text-gradient">Niyantrana</h1>
        </div>

        <div className="flex gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "nav-link nav-link-active"
                  : "nav-link nav-link-inactive"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
