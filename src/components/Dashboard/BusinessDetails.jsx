import React, { useState } from "react";
import { Save, Plus, X } from "lucide-react";
import Card from "../common/Card";
import 'react-phone-number-input/style.css'
import PhoneNumberList from "./CountrySelector";

const BusinessDetails = () => {
  const [value, setValue] = useState("")
  const [data, setData] = useState([])
  console.log("data", data)
  const handleAddCountries = () => {
    setData((prev) => [...prev, value])
  }
  return (
    <Card className="p-4 dark:bg-[#001121]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-base font-semibold text-[#0E253C] dark:text-white">
          Business Details
        </h2>
        <button className="flex gap-1 items-center text-sm font-semibold text-[#22C55E] dark:text-[#22C55E]">
          <Save size={14} className="mr-1" color="#22C55E" />
          Save & Close
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-xs font-medium text-[#0E253C] dark:text-gray-400 mb-2">
            Account Name
          </label>
          <input
            type="text"
            value="TRUCK GREAR"
            className="w-full py-2 px-3 border border-[#0E253C1A] dark:border-[#FFFFFF4D] rounded-xl bg-white dark:bg-[#001121] text-gray-900 dark:text-white"
          />
        </div>
        <div className="bg-[#0E253C1A] border-t border-[#0E253C1A] h-[1px] w-full m-0 p-0"></div>
        <div>
          <div className="flex justify-between mb-1">
            <label className="block text-xs font-medium text-[#0E253C] dark:text-gray-400 mb-2">
              Email
            </label>
          </div>

          <input
            type="email"
            value="Jillali@Onechanneladmin.Com"
            className="w-full py-2 px-3 border border-[#0E253C1A] dark:border-[#FFFFFF4D] rounded-xl bg-white dark:bg-gray-800 dark:bg-[#001121] text-gray-900 dark:text-white"
          />
        </div>
        <div className="bg-[#0E253C1A] border-t border-[#0E253C1A] h-[1px] w-full m-0 p-0"></div>

        <div>
          <PhoneNumberList />
        </div>
        <div className="bg-[#0E253C1A] border-t border-[#0E253C1A] h-[1px] w-full m-0 p-0"></div>

        <div>
          <label className="block text-xs font-medium text-[#0E253C] dark:text-gray-400 mb-2">
            Contact Owner
          </label>
          <div className="relative">
            <select className="w-full p-2 border text-sm border-gray-300 dark:border-[#FFFFFF4D] rounded-xl bg-white dark:bg-[#001121] text-gray-900 dark:text-white appearance-none">
              <option>Sushilkumar@Onechannelamin.Com</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BusinessDetails;