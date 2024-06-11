type TransactionType = 'income' | 'expense';

interface ITransaction {
  _id: string;
  title: string;
  type: TransactionType;
  category: string;
  value: number;
  created_at: Date;
}
