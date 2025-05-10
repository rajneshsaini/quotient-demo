import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import Card from "../common/Card";

const monthlyData = [
  { name: "Jan", value: 589.12 },
  { name: "Feb", value: 840.2 },
  { name: "Mar", value: 898.0 },
  { name: "Apr", value: 203.0 },
  { name: "May", value: 400.01 },
  { name: "Jun", value: 820.12 },
  { name: "Jul", value: 398.0 },
  { name: "Aug", value: 882.0 },
  { name: "Sep", value: 390.0 },
  { name: "Oct", value: 910.0 },
  { name: "Nov", value: 410.12 },
  { name: "Dec", value: 840.2 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 p-2 border border-gray-200 dark:border-gray-700 shadow-md rounded-md">
        <p className="text-sm font-medium">{label}</p>
        <p className="text-sm">${payload[0].value.toFixed(2)}</p>
      </div>
    );
  }
  return null;
};

const RevenueChart = () => {
  const { theme } = 'light';
  const [activeTab, setActiveTab] = useState("revenue");

  const tabs = [
    { id: "revenue", label: "Revenue" },
    { id: "orders", label: "Orders" },
    { id: "customers", label: "Customers" },
  ];

  const totalRevenue = monthlyData
    .reduce((sum, item) => sum + item.value, 0)
    .toFixed(2);

  return (
    <Card className="p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === tab.id
                  ? "bg-primary-600 text-white"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <select className="flex-1 sm:flex-none text-sm border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 px-3 py-1.5">
            <option>All Categories</option>
          </select>
          <select className="flex-1 sm:flex-none text-sm border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 px-3 py-1.5">
            <option>Jun 2023</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
        <h2 className="text-lg font-medium dark:text-white">Revenue</h2>
        <div className="flex items-center">
          <span className="text-sm text-gray-600 dark:text-gray-400 mr-2">
            Total Revenue:
          </span>
          <span className="text-sm font-bold dark:text-white">
            ${totalRevenue}
          </span>
        </div>
      </div>

      <div className="h-[400px] sm:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={monthlyData}
            margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke={theme === "dark" ? "#374151" : "#f3f4f6"}
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: theme === "dark" ? "#9ca3af" : "#6b7280",
                fontSize: 12,
              }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fill: theme === "dark" ? "#9ca3af" : "#6b7280",
                fontSize: 12,
              }}
              tickFormatter={(value) => {value}}
              dx={-10}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar
              dataKey="value"
              fill={theme === "dark" ? "#7c3aed" : "#8b5cf6"}
              radius={[4, 4, 0, 0]}
              barSize={90}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-center items-center mt-4">
        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
          • 2023
        </span>
      </div>
    </Card>
  );
};

export default RevenueChart;