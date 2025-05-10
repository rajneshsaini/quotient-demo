import React, { useState } from "react";
import CardStat from '../components/Dashboard/CardStat'
import OrderStatusChart from "../components/Dashboard/OrderStatusChart";
import RecentActivity from "../components/Dashboard/RecentActivity";
import RecentOrders from "../components/Dashboard/RecentOrders";
import RevenueChart from "../components/Dashboard/RevenueChart";


export default function Dashboard() {
  return (
    <>
      <CardStat />
      <div className="flex flex-col 2xl:flex-row gap-4">
        <div className="flex-1">
          <OrderStatusChart />
        </div>
        <div className="flex-1">
          <RecentActivity />
        </div>
      </div>
      <RecentOrders />
      <RevenueChart />
    </>
  );
}
