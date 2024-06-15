import { Document } from 'mongoose';

interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  created_at: Date;
  _deleted: boolean;
}

interface IUserDocument extends IUser, Document {}
