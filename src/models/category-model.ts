import { randomUUID } from 'crypto';
import { Schema, model } from 'mongoose';

import { ICategoryDocument } from '@/types/category';

const CategorySchema = new Schema({
  _id: {
    type: String,
    default: () => randomUUID(),
  },
  name: {
    type: String,
    required: [true, 'Name field is required'],
  },
  _deleted: {
    type: Boolean,
    default: false,
  },
});

const CategoryModel = model<ICategoryDocument>('Category', CategorySchema);

export default CategoryModel;
