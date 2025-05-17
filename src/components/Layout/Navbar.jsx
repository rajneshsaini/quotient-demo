import { useState } from "react";
import ThemeToggle from "../UI/ThemeToggle";
import logo from "../../assets/images/logo.png";
import darkModeLogo from "../../assets/icons/darkCompanyLogo.svg";
import darkBell from "../../assets/icons/darkBell.svg";
import searchIcon from "../../assets/icons/search.svg";
import bellIcon from "../../assets/icons/bellIcon.svg";
import { ChevronDown, Menu, X } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import lightThemeIcon from "../../assets/images/header_sideicon.png";
import DarkThemeIcon from "../../assets/images/header_sideicon_dark.png";

export default function Navbar() {
  const { theme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg z-50 transform transition-transform duration-300 lg:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <img
            src={theme === "light" ? logo : darkModeLogo}
            alt="Sidebar Logo"
            className="h-8"
          />
          <button onClick={() => setSidebarOpen(false)}>
            <X className="text-gray-800 dark:text-white" />
          </button>
        </div>
        {/* Sidebar content */}
        <div className="p-4 text-gray-800 dark:text-white">
          <p className="text-sm">Sidebar content goes here</p>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 z-30 transition-all duration-300 w-full">
        <div className="flex items-center h-16 px-4">
          <div className="flex lg:!flex-1 w-auto gap-4 items-center">
            {/* Hamburger - only below 1024px */}
            <button
              className="lg:hidden mr-5 text-gray-700 dark:text-white"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>

            {/* Logo - always visible */}
            <img
              src={theme === "light" ? logo : darkModeLogo}
              alt="company logo"
              className="w-[120px] hidden lg:!block"
            />

            <div className="w-7 h-7 hidden ml-20 lg:!flex justify-center items-center">
              <img
                src={theme === "light" ? lightThemeIcon : DarkThemeIcon}
                className="w-full"
              />
            </div>
          </div>

          <div className="flex-1">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <img src={searchIcon} alt="search Icon" />
              </div>
              <input
                type="text"
                className="border border-[#0E253C1A] rounded-[12px] w-full px-11 py-2 dark:text-white dark:border-gray-700 bg-white dark:bg-[#010D19] h-[38px]"
                placeholder="Search"
              />
            </div>
          </div>

          <div className="flex items-center justify-end flex-1">
            <ThemeToggle />
            <button className="p-2 rounded-[12px] w-[38px] h-[38px] flex justify-center hover:bg-gray-100 dark:hover:bg-gray-800 ml-2 mr-4 shadow-[1px_1px_3px_0_rgba(0,0,0,0.26)]">
              <img src={theme === "light" ? bellIcon : darkBell} />
            </button>
            <div className="h-9 w-9 rounded-full bg-[#513CCE] font-semibold text-base flex items-center justify-center text-white mr-2">
              MG
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden sm:block">
                <div className="text-sm font-bold text-gray-900 dark:text-white">
                  Manoj Sharma
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Super Admin
                </div>
              </div>
              <span>
                <ChevronDown
                  size={16}
                  color={theme === "light" ? "black" : "white"}
                />
              </span>
            </div>
          </div>
        </div>

        <div className="h-[62px] flex items-center border-t border-t-[#0E253C1A] text-base font-medium px-4 text-[#0E253CD9] dark:text-[#FFFFFFCC]">
          CRM / Account /{" "}
          <span className="font-semibold text-[#0E253C] dark:text-[#FFFFFF]">
            Account Details
          </span>
        </div>
      </header>
    </>
  );
}
