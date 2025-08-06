import { UnionIcon } from "@/icons";
import { TSummaryCardType } from "@/types/summary-card-type";

enum SUMMARY_CARD_ENUM {
  TOTAL_BALANCE = "Total Balance",
  INCOME = "Income",
  EXPENSES = "Expenses",
  SAVINGS = "Savings",
}

const { TOTAL_BALANCE, INCOME, EXPENSES, SAVINGS } = SUMMARY_CARD_ENUM;

const summaryCards: TSummaryCardType = [
  { title: TOTAL_BALANCE, amount: "$12,345", percent: "+5%", positive: true, icon: <UnionIcon />, bgClass: "bg-muted-blue" },
  { title: INCOME, amount: "$3,210", percent: "+12%", positive: true, icon: <UnionIcon />, bgClass: "bg-muted-blue" },
  { title: EXPENSES, amount: "$1,200", percent: "-8%", positive: false, icon: <UnionIcon />, bgClass: "bg-muted-blue" },
  { title: SAVINGS, amount: "$8,935", percent: "+2%", positive: true, icon: <UnionIcon />, bgClass: "bg-muted-blue" },
];

export { summaryCards, SUMMARY_CARD_ENUM };