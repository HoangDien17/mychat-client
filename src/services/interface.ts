export interface IUser {
  _id: string;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface IContact {
  _id: string;
  userId: string;
  contactId: string;
  contactName: string;
  status: boolean;
  createdAt: string;
  updatedAt: string;
}
