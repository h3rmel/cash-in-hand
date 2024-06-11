import { randomUUID } from 'crypto';
import { Schema, model, models } from 'mongoose';

const TransactionSchema = new Schema<ITransaction>({
  _id: {
    type: String,
    default: () => randomUUID(),
  },
  title: {
    type: String,
    required: [true, 'Title field is required'],
  },
  type: {
    type: String,
    required: [true, 'Type field is required'],
    enum: ['income', 'expense'],
  },
  category: {
    type: String,
    required: [true, 'Category field is required'],
  },
  value: {
    type: Number,
    required: [true, 'Value field is required'],
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const TransactionModel = models.Transaction || model('Transaction', TransactionSchema);

export default TransactionModel;
