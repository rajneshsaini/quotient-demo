import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const data = [
  { name: "Jan", value: 4000 },
  { name: "Feb", value: 3000 },
  { name: "Mar", value: 5000 },
  { name: "Apr", value: 2000 },
  { name: "May", value: 1000 },
  { name: "Jun", value: 4000 },
  { name: "Jun", value: 7000 },
  { name: "Jun", value: 8000 },
  { name: "Jun", value: 4000 },
  { name: "Jun", value: 6000 },
];
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

const RevenueChart = () => {
  const theme = "light"; // replace with real theme logic if needed
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
    <div>
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
            ${totalRevenue || 0}
          </span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 30, left: 20, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            tick={{
              fill: theme === "dark" ? "#9ca3af" : "#6b7280",
              fontSize: 12,
            }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{
              fill: theme === "dark" ? "#9ca3af" : "#6b7280",
              fontSize: 12,
            }}
            tickFormatter={(value) => value.toFixed(2)}
            dx={-10}
          />
          <Tooltip />
          <Bar
            dataKey="value"
            fill={theme === "dark" ? "#7c3aed" : "#513CCE"}
            barSize={78}
          >
            <LabelList
              dataKey="value"
              position="top"
              formatter={(value) => value.toFixed(2)}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;