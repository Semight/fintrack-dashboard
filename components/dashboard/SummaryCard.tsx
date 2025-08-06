import React from "react";

interface SummaryCardProps {
  title: string;
  amount: string;
  percent: string;
  icon: React.ReactNode;
  bgClass?: string;
}

export default function SummaryCard({
  title,
  amount,
  percent,
  icon,
  bgClass = "bg-muted-blue",
}: SummaryCardProps) {
  return (
    <div className={`${bgClass} p-7 w-full h-[158px] rounded-[20px] flex flex-col justify-between`}>
      <div className="flex justify-between items-start">
        <p className="font-bold font-sans text-primary text-[17px] leading-6">{title}</p>
        <span className="cursor-pointer">{icon}</span>
      </div>

      <div>
        <h1 className="font-bold font-sans text-primary text-[34px] leading-10 tracking-[-2%]">{amount}</h1>
        <p className="mt-1 font-medium font-sans text-[13px] leading-4 text-teal-blue-50">
          {percent}
        </p>
      </div>
    </div>
  );
}
