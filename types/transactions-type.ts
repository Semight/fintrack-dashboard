export type TransactionType = "Credit" | "Debit";

export type Transaction = {
  id: string;
  date: string;
  remark: string;
  amount: number;
  currency: string;
  type: TransactionType;
};
