import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import {
  LayoutGrid,
  PiggyBank,
  ReceiptText,
  CircleDollarSign,
  ChevronRight,
  LogOut
} from "lucide-react";

const menuList = [
  {
    id: 1,
    name: "Dashboard",
    icon: LayoutGrid,
    path: "/dashboard",
  },
  {
    id: 2,
    name: "Incomes",
    icon: CircleDollarSign,
    path: "/dashboard/incomes",
  },
  {
    id: 3,
    name: "Budgets",
    icon: PiggyBank,
    path: "/dashboard/budgets",
  },
  {
    id: 4,
    name: "Expenses",
    icon: ReceiptText,
    path: "/dashboard/expenses",
  },
];

const SideNav = () => {
  const path = usePathname();

  return (
    <div className="h-screen bg-white relative flex flex-col">
      {/* Gradient Top Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600" />

      {/* Logo Section */}
      <div className="p-6 border-b">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
            <span className="text-white font-bold text-xl">F</span>
          </div>
          <div className="flex flex-col">
            <span className="text-blue-600 font-bold text-xl">Finance Tracker</span>
            <span className="text-xs text-gray-400">Financial Dashboard</span>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {menuList.map((menu) => {
            const isActive = path === menu.path;
            return (
              <Link href={menu.path} key={menu.id}>
                <div
                  className={`group flex items-center justify-between p-3 rounded-lg transition-all duration-200 ease-in-out
                    ${
                      isActive
                        ? "bg-blue-50 text-blue-600"
                        : "hover:bg-gray-50 text-gray-600"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg transition-all duration-200
                        ${
                          isActive
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 text-gray-600 group-hover:bg-gray-200"
                        }`}
                    >
                      <menu.icon size={20} />
                    </div>
                    <span className={`font-medium ${isActive ? "font-semibold" : ""}`}>
                      {menu.name}
                    </span>
                  </div>
                  <ChevronRight
                    size={16}
                    className={`transition-transform duration-200
                      ${isActive ? "text-blue-600 rotate-90" : "text-gray-400"}
                      ${!isActive && "group-hover:translate-x-1"}`}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Profile Section */}
      <div className="border-t p-4">
        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
          <UserButton />
          <div className="flex-1">
            <h3 className="font-medium text-gray-700">My Profile</h3>
            <p className="text-sm text-gray-400">Account Settings</p>
          </div>
          <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 transition-colors duration-200">
            <LogOut size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideNav;