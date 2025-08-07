"use client";

import React from "react";
import TransactionBadge from "@/components/ui/TransactionBadge";
import transactionsData from "@/mock-data/transactions";
import type { Transaction } from "@/types/transactions-type";
import { DropdownIcon } from "@/icons";
import { cn } from "@/lib/utils";

type SortKey = "date" | "remark" | "amount" | "currency" | "type";
type SortDir = "asc" | "desc" | null;

export default function TransactionsTable({ data = transactionsData }: { data?: Transaction[] }) {
  const rows = React.useMemo(() => data ?? [], [data]);
  const [sortBy, setSortBy] = React.useState<SortKey | null>(null);
  const [sortDir, setSortDir] = React.useState<SortDir>(null);

  const handleSortToggle = (key: SortKey) => {
    if (sortBy !== key) {
      setSortBy(key);
      setSortDir("asc");
      return;
    }
    if (sortDir === "asc") {
      setSortDir("desc");
    } else if (sortDir === "desc") {
      setSortBy(null);
      setSortDir(null);
    } else {
      setSortDir("asc");
    }
  };

  const sortedRows = React.useMemo(() => {
    if (!sortBy || !sortDir) return rows;

    const compare = (a: Transaction, b: Transaction) => {
      const dir = sortDir === "asc" ? 1 : -1;

      switch (sortBy) {
        case "date": return (new Date(a.date).getTime() - new Date(b.date).getTime()) * dir;
        case "amount": return (a.amount - b.amount) * dir;
        case "remark": return a.remark.localeCompare(b.remark) * dir;
        case "currency": return a.currency.localeCompare(b.currency) * dir;
        case "type": return a.type.localeCompare(b.type) * dir;
        default: return 0;
      }
    };

    return [...rows].sort(compare);
  }, [rows, sortBy, sortDir]);

  const fmtAmount = (r: Transaction) =>
    r.amount < 0
      ? `-${new Intl.NumberFormat("en-US", { style: "currency", currency: r.currency, maximumFractionDigits: 0 }).format(Math.abs(r.amount))}`
      : new Intl.NumberFormat("en-US", { style: "currency", currency: r.currency, maximumFractionDigits: 0 }).format(r.amount);

  const HeaderCell: React.FC<{ label: string; sortKey: SortKey }> = ({ label, sortKey }) => {
    const active = sortBy === sortKey;
    const rotate = active && sortDir === "desc" ? "rotate-180" : "";

    return (
      <div
        className="flex border-b text-light-gray border-light-gray-10 py-4 items-center gap-1 cursor-pointer select-none"
        onClick={() => handleSortToggle(sortKey)}
      >
        <span>{label}</span>
        <DropdownIcon color="#6d797c" className={cn("w-3 h-3 transition-transform opacity-30", rotate)} />
      </div>
    );
  };

  return (
    <div className="mt-10 max-w-[380px] md:max-w-none">
      <div className="overflow-x-auto">
        <div className="min-w-[700px] md:min-w-0">
          <div className="grid grid-cols-5 sm:grid-cols-[50%_12%_12%_10%_10%] gap-4 text-primary font-semibold text-sm">
            <HeaderCell label="Date" sortKey="date" />
            <HeaderCell label="Remark" sortKey="remark" />
            <HeaderCell label="Amount" sortKey="amount" />
            <HeaderCell label="Currency" sortKey="currency" />
            <HeaderCell label="Type" sortKey="type" />
          </div>

          <div className="">
            {sortedRows.map((r) => (
              <div
                key={r.id}
                className="grid grid-cols-5 sm:grid-cols-[50%_12%_12%_10%_10%] gap-4"
              >
                <div className="border-b border-light-gray-10 py-[18px] truncate">{r.date}</div>
                <div className="border-b border-light-gray-10 py-[18px] truncate">{r.remark}</div>
                <div className="border-b border-light-gray-10 py-[18px] truncate">{fmtAmount(r)}</div>
                <div className="border-b border-light-gray-10 py-[18px] truncate">{r.currency}</div>
                <div className="border-b border-light-gray-10 py-[18px] truncate">
                  <TransactionBadge type={r.type} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
