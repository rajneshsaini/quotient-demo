import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts";
import { useTheme } from "../../context/ThemeContext";

const data = [
  { name: "Red", value: 50, color: "#FF5A5F" },
  { name: "Orange", value: 50, color: "#FFAA5A" },
  { name: "Yellow", value: 50, color: "#FFD057" },
  { name: "Green", value: 50, color: "#00C49F" },
  { name: "Purple", value: 50, color: "#8884d8" },
];

const RADIAN = Math.PI / 180;

const renderLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) / 2;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={14}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const DonutChart = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="w-full h-full flex justify-center items-center">
      <ResponsiveContainer width={250} height={250}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={110}
            labelLine={false}
            label={renderLabel}
            // padAngle={8}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
            <Label
              value="250"
              position="center"
              fill={theme === "light" ? "#0F172A" : "#FFFFFF"}
              fontSize={24}
              fontWeight="bold"
              // className="dark:text-[#FFFFFF]"
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
export default DonutChart;