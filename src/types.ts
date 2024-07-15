export enum Role {
  Admin = 'Admin',
  User = 'User',
  Manager = 'Manager',
}

export enum Status {
  Active = 'Active',
  Inactive = 'Inactive',
  Pending = 'Pending',
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: Role;
  status: Status;
  signUpDate: string;
  lastLogin: string;
}
