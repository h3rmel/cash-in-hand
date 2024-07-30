import { ICategory } from './category';

export type TransactionType = 'income' | 'expense';

/**
 * Transaction Interface
 *
 * Serves as a model for the transaction object.
 *
 * A transaction is a banking/financial operation that has occurred.
 *
 * @param id - Unique identifier of the transaction. (Auto-generated)
 * @param title - Title of the transaction. (e.g. Salary, Rent, etc.)
 * @param description - Short description of this transaction. (To who, where, etc.)
 * @param type - Type of the transaction. Could be an `income` or an `expense`.
 * @param category - Category of the transaction. (e.g. Salary, Health, Service, etc.)
 * @param date - Date when this transaction was made.
 * @param createdAt - Date when this transaction was created.
 */
export interface ITransaction {
  id: string;
  title: string;
  description: string;
  type: TransactionType;
  category: ICategory;
  amount: number;
  date: Date;
  createdAt: Date;
}

/**
 * Transaction Form Data Interface
 *
 * Serves as a model for the transaction form data object.
 * Used to create and manage transactions with a form.
 *
 * @param title - Title of the transaction. (e.g. Salary, Rent, etc.)
 * @param description - Short description of this transaction. (To who, where, etc.)
 * @param type - Type of the transaction. Could be an `income` or an `expense`.
 * @param categoryId - ID of the category of the transaction. (e.g. Salary, Health, Service, etc.)
 * @param date - Date when this transaction was made.
 */
export interface ITransactionFormData extends Omit<ITransaction, 'id' | 'createdAt', 'category'> {
  categoryId: string;
}
