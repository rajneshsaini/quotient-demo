import React, { useState } from "react";
import Dashboard from "../../pages/Dashboard";

const tabs = [
  { id: "tab1", label: "Dashboard", content: <Dashboard /> },
  { id: "tab2", label: "Orders", content: "This is your Profile tab." },
  { id: "tab3", label: "Address", content: "Adjust your settings here." },
  { id: "tab4", label: "Notes", content: "This is your Profile tab." },
  { id: "tab5", label: "Tasks", content: "This is your Profile tab." },
  { id: "tab6", label: "Contacts", content: "AThis is your Profile tab." },
  { id: "tab7", label: "Credit History", content: "This is your Profile tab" },
];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="w-full">
      {/* Tab buttons */}
      <div className="flex gap-1 border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={` text-center border border-[#0E253C1A] text-sm rounded-tl-2xl rounded-tr-2xl px-4 py-2
              ${
                activeTab === tab.id
                  ? "border-b-0 text-[#513CCE] font-medium bg-white"
                  : "text-[#0E253CD9] hover:text-[#513CCE] "
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="p-4 border border-[#0E253C1A] border-t-0 bg-white">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    
    </div>
  );
}
