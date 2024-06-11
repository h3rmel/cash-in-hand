import { randomUUID } from 'crypto';
import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema<IUser>({
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

const UserModel = models.User || model('User', UserSchema);

export default UserModel;
