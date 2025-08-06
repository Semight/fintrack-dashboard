import { summaryCards } from "@/utils/summary-cards-utils";
import React from "react";
import SummaryCard from "./SummaryCard";

export default function Summary() {
  return (
    <div className="mt-7">
      <p className="font-sans font-bold text-[20px] text-primary leading-6 tracking-[-2%]">Summary</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-[18px]">
        {summaryCards.map((card, idx) => (
          <SummaryCard key={idx} {...card} />
        ))}
      </div>
    </div>
  );
}
