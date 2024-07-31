export type TransactionType = 'income' | 'expense';

/**
 * Transaction Interface
 *
 * Serves as a model for the transaction object.
 *
 * A transaction is a banking/financial operation that has occurred.
 *
 * @param id - Unique identifier of the transaction. (Auto-generated)
 * @param name - Name of the transaction. (e.g. Salary, Rent, etc.)
 * @param description - Short description of this transaction. (To who, where, etc.)
 * @param type - Type of the transaction. Could be an `income` or an `expense`.
 * @param categoryId - ID of the category of the transaction. (e.g. Salary, Health, Service, etc.)
 * @param date - Date when this transaction was made.
 * @param createdAt - Date when this transaction was created.
 */
export interface ITransaction {
  id: string;
  name: string;
  description: string;
  type: TransactionType;
  categoryId: string;
  value: number;
  date: Date;
  createdAt: Date;
}

/**
 * Transaction Form Data Interface
 *
 * Serves as a model for the transaction form data object.
 * Used to create and manage transactions with a form.
 *
 * @param name - Name of the transaction. (e.g. Salary, Rent, etc.)
 * @param description - Short description of this transaction. (To who, where, etc.)
 * @param type - Type of the transaction. Could be an `income` or an `expense`.
 * @param categoryId - ID of the category of the transaction. (e.g. Salary, Health, Service, etc.)
 * @param date - Date when this transaction was made.
 */
export interface ITransactionFormData extends Omit<ITransaction, 'id' | 'createdAt'> {}
