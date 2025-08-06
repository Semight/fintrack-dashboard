import { UnionIcon } from "@/icons";
import { TSummaryCardType } from "@/types/summary-card-type";

interface DashboardSummary {
  totalBalance: number;
  totalCredits: number;
  totalDebits: number;
  transactionCount: number;
  balanceChange: number;
  creditsChange: number;
  debitsChange: number;
  transactionChange: number;
}

enum SUMMARY_CARD_ENUM {
  TOTAL_BALANCE = "Total Balance",
  INCOME = "Income",
  EXPENSES = "Expenses",
  SAVINGS = "Savings",
}

const { TOTAL_BALANCE, INCOME, EXPENSES, SAVINGS } = SUMMARY_CARD_ENUM;


const dashboardSummary: DashboardSummary = {
  totalBalance: 12345,
  totalCredits: 3210,
  totalDebits: 1200,
  transactionCount: 8935,
  balanceChange: 5,
  creditsChange: 12,
  debitsChange: -8,
  transactionChange: 2,
};

const summaryCards: TSummaryCardType = [
  {
    title: TOTAL_BALANCE,
    amount: `$${dashboardSummary.totalBalance.toLocaleString()}`,
    percent: `${dashboardSummary.balanceChange > 0 ? "+" : ""}${dashboardSummary.balanceChange}%`,
    positive: dashboardSummary.balanceChange >= 0,
    icon: <UnionIcon />,
    bgClass: "bg-muted-blue",
  },
  {
    title: INCOME,
    amount: `$${dashboardSummary.totalCredits.toLocaleString()}`,
    percent: `${dashboardSummary.creditsChange > 0 ? "+" : ""}${dashboardSummary.creditsChange}%`,
    positive: dashboardSummary.creditsChange >= 0,
    icon: <UnionIcon />,
    bgClass: "bg-muted-blue",
  },
  {
    title: EXPENSES,
    amount: `$${dashboardSummary.totalDebits.toLocaleString()}`,
    percent: `${dashboardSummary.debitsChange > 0 ? "+" : ""}${dashboardSummary.debitsChange}%`,
    positive: dashboardSummary.debitsChange >= 0,
    icon: <UnionIcon />,
    bgClass: "bg-muted-blue",
  },
  {
    title: SAVINGS,
    amount: `$${dashboardSummary.transactionCount.toLocaleString()}`,
    percent: `${dashboardSummary.transactionChange > 0 ? "+" : ""}${dashboardSummary.transactionChange}%`,
    positive: dashboardSummary.transactionChange >= 0,
    icon: <UnionIcon />,
    bgClass: "bg-muted-blue",
  },
];

export { summaryCards, SUMMARY_CARD_ENUM };
