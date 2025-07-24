import React from "react";
import PeopleCommunity from "../assets/images/PeopleCommunity.png";
import CurrencyDollar from "../assets/images/currency-dollar.png";
import Invoice from "../assets/images/Invoice.png";
import { ArrowUpRight } from "lucide-react";

const stats = [
  {
    label: "Total Learners",
    value: "12,450",
    icon: PeopleCommunity,
    growth: "+12%",
    growthText: "vs last month",
    growthColor: "text-green-500",
    alt: "People Community Icon",
  },
  {
    label: "Revenue",
    value: "$12,450",
    icon: CurrencyDollar,
    growth: "+12%",
    growthText: "vs last month",
    growthColor: "text-green-500",
    alt: "Currency Dollar Icon",
  },
  {
    label: "Invoice",
    value: "100",
    icon: Invoice,
    growth: "+2%",
    growthText: "vs last month",
    growthColor: "text-green-500",
    alt: "Invoice Icon",
  },
];

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white rounded-2xl shadow-sm p-8 flex justify-between items-center min-h-[150px]"
        >
          {/* Left: Text */}
          <div>
            <div className="text-gray-500 text-sm mb-2 font-medium">{stat.label}</div>
            <div className="text-3xl font-bold text-gray-900 mb-3">{stat.value}</div>
            <div className="flex items-center text-xs">
              <span className={stat.growthColor + " font-semibold flex items-center mr-1"}>
                <ArrowUpRight className="w-4 h-4 mr-0.5" />
                {stat.growth}
              </span>
              <span className="text-gray-400">{stat.growthText}</span>
            </div>
          </div>
          {/* Right: Icon */}
          <div className={`rounded-xl p-4 flex items-center justify-center ${stat.iconBg}`}>
            <img src={stat.icon} alt={stat.alt} className="w-12 h-12 object-contain" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards; 