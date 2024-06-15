import { randomUUID } from 'crypto';
import { Document, Schema, model } from 'mongoose';

import { IUserDocument } from '@/types/user';

export interface IUser extends Document {
  _id: string;
  name: string;
  email: string;
  password: string;
  created_at: Date;
  _deleted: boolean;
}

const UserSchema = new Schema({
  _id: {
    type: String,
    default: () => randomUUID(),
  },
  name: {
    type: String,
    required: [true, 'Name field is required'],
  },
  email: {
    type: String,
    required: [true, 'Email field is required'],
  },
  password: {
    type: String,
    required: [true, 'Password field is required'],
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  _deleted: {
    type: Boolean,
    default: false,
  },
});

const UserModel = model<IUserDocument>('User', UserSchema);

export default UserModel;
