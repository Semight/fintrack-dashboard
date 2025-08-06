import { cn } from "@/lib/utils";
import React from "react";

export default function TransactionBadge({ type }: { type: "Credit" | "Debit" }) {
  const isCredit = type === "Credit";
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium",
        isCredit ? "bg-muted-blue text-primary" : "bg-muted-blue text-primary"
      )}
    >
      <span
        className={cn(
          "w-[6px] h-[6px] rounded-full block",
          isCredit ? "bg-green" : "bg-red"
        )}
      />
      <span>{type}</span>
    </div>
  );
}
