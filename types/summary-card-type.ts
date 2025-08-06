import { JSX } from "react";

type TSummaryCardType = {
  title: string;
  amount: string;
  percent: string;
  positive: boolean;
  icon: JSX.Element;
  bgClass?: string;
}[];

export { type TSummaryCardType };