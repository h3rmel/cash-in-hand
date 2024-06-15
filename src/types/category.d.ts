import { Document } from 'mongoose';

interface ICategory {
  _id: string;
  name: string;
  _deleted: boolean;
}

interface ICategoryDocument extends ICategory, Document {}
