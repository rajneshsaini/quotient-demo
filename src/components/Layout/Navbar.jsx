import ThemeToggle from "../UI/ThemeToggle";
import logo from "../../assets/images/logo.png";
import darkModeLogo from "../../assets/icons/darkCompanyLogo.svg";
import darkBell from "../../assets/icons/darkBell.svg";
import searchIcon from "../../assets/icons/search.svg";
import bellIcon from "../../assets/icons/bellIcon.svg";
import { ChevronDown } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <header
      className={
        "sticky top-0 right-0  bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 z-30 transition-all duration-300 w-full"
      }
    >
      <div className=" flex items-center h-16  px-4">
        <div className="flex flex-1">
          <img
            src={theme === "light" ? logo : darkModeLogo}
            alt="company logo"
          />
          <ThemeToggle />
        </div>
        <div className="flex-1">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <img src={searchIcon} alt="search Icon" />
            </div>
            <input
              type="text"
              className="border border-[#0E253C1A] rounded-[12px] w-full  px-11 py-2 dark:text-white focus:ring-blue-500 focus:border-blue-500 h-[38px]"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="flex items-center justify-end flex-1">
          <button className="p-2 rounded-[12px] w-[38px] h-[38px] flex justify-center hover:bg-gray-100 dark:hover:bg-gray-800 mr-4 shadow-[1px_1px_3px_0_rgba(0,0,0,0.26)]">
            <img src={theme === "light" ? bellIcon : darkBell} />
          </button>
          <div className="h-9 w-9 rounded-full bg-[#513CCE] font-semibold text-base flex items-center justify-center text-white mr-2">
            MG
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:block ">
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
      <div className="h-[62px] flex items-center border-t border-t-[#0E253C1A]  text-base font-medium px-4 text-[#0E253CD9] dark:text-[#FFFFFFCC]">
        CRM / Account /{" "}
        <spam className="font-semibold text-[#0E253C] dark:text-[#FFFFFF]">
          Account Details
        </spam>
      </div>
    </header>
  );
}