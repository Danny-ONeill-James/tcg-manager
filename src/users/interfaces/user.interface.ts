export interface IUser {
  id: string;
  name?: string;
  username: string;
  password: string;
  image: string;
  createdAt?: Date;
  updatedAt?: Date;
  accessToken?: string;
}
