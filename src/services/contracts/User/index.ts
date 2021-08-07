import { UserModel } from "../../../app/models";
import { User } from "../../repository";

class UserContracts implements User {
  async getUser(name: string, email: string) {
    const data = { name, email };
    const response = await UserModel.find(data);
    return response;
  }
}

export default UserContracts;
