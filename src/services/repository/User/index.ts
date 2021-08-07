type NewUser = {
  name?: string;
  email?: string;
  phone?: string;
  password?: string;
};

export default interface User extends NewUser {
  getUser(name: string, email: string): Promise<NewUser> | any;
}
