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
        case "date": {
          const ta = new Date(a.date).getTime() || 0;
          const tb = new Date(b.date).getTime() || 0;
          return (ta - tb) * dir;
        }
        case "amount": {
          return (a.amount - b.amount) * dir;
        }
        case "remark": {
          return a.remark.localeCompare(b.remark) * dir;
        }
        case "currency": {
          return a.currency.localeCompare(b.currency) * dir;
        }
        case "type": {
          return a.type.localeCompare(b.type) * dir;
        }
        default:
          return 0;
      }
    };

    return [...rows].sort((a, b) => {
      const res = compare(a, b);
      return res !== 0 ? res : 0;
    });
  }, [rows, sortBy, sortDir]);

  const fmtAmount = (r: Transaction) =>
    r.amount < 0
      ? `-${new Intl.NumberFormat("en-US", { style: "currency", currency: r.currency, maximumFractionDigits: 0 }).format(Math.abs(r.amount))}`
      : new Intl.NumberFormat("en-US", { style: "currency", currency: r.currency, maximumFractionDigits: 0 }).format(r.amount);

  const HeaderCell: React.FC<{ label: string; sortKey: SortKey }> = ({ label, sortKey }) => {
  const active = sortBy === sortKey;
  const rotate = active && sortDir === "desc" ? "rotate-180" : "";
  return (
    <button
      onClick={() => handleSortToggle(sortKey)}
      className="w-full flex items-center gap-1 text-light-gray py-2 px-0 select-none focus:outline-none text-left"
      aria-pressed={active}
      aria-label={`Sort by ${label}`}
    >
      <span>{label}</span>
      <span className={cn("transition-transform duration-200", active ? "opacity-100" : "opacity-50", rotate)}>
        <DropdownIcon color="#6d797c" />
      </span>
    </button>
  );
};

  return (
    <div className="overflow-x-auto w-full">
      <div className="min-w-[600px]">
        <div className="grid grid-cols-5 sm:grid-cols-[50%_12%_12%_10%_10%] gap-4 font-semibold text-sm">
          <div className="flex items-center justify-start border-b text-light-gray border-light-gray-10">
            <HeaderCell label="Date" sortKey="date" />
          </div>

          <div className="flex items-center justify-start border-b text-light-gray border-light-gray-10">
            <HeaderCell label="Remark" sortKey="remark" />
          </div>

          <div className="flex items-center justify-start border-b text-light-gray border-light-gray-10">
            <HeaderCell label="Amount" sortKey="amount" />
          </div>

          <div className="flex items-center justify-start border-b text-light-gray border-light-gray-10">
            <HeaderCell label="Currency" sortKey="currency" />
          </div>

          <div className="flex items-center justify-start border-b text-light-gray border-light-gray-10">
            <HeaderCell label="Type" sortKey="type" />
          </div>
        </div>

        <div>
          {sortedRows.map((r) => (
            <div key={r.id} className="grid grid-cols-5 sm:grid-cols-[50%_12%_12%_10%_10%] gap-4">
              <div className="border-b border-light-gray-10 py-[18px] truncate text-[15px] leading-5 tracking-[-0.5%] font-sans text-primary">
                {r.date}
              </div>

              <div className="border-b border-light-gray-10 py-[18px] truncate text-[15px] leading-5 tracking-[-0.5%] font-sans text-primary">
                {r.remark}
              </div>

              <div className="border-b border-light-gray-10 py-[18px] truncate text-[15px] leading-5 tracking-[-0.5%] font-sans text-primary text-left">
                {fmtAmount(r)}
              </div>

              <div className="border-b border-light-gray-10 py-[18px] truncate text-[15px] leading-5 tracking-[-0.5%] font-sans text-primary">
                {r.currency}
              </div>

              <div className="border-b border-light-gray-10 py-[18px] truncate flex items-center justify-start">
                <TransactionBadge type={r.type} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
