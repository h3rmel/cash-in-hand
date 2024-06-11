interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  created_at: Date;
  _deleted: boolean;
}
