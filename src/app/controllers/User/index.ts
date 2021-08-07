import { Request, Response } from "express";
import { UserContracts } from "../../../services/contracts";

class UserController extends UserContracts {
  async index(req: Request, res: Response) {
    const { name, email } = req.body;
    const users = await this.getUser(name, email);

    try {
      if (!users) {
        return res.status(404).json({ message: "Error: Not found" });
      }

      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  /*
  async insert(req: Request, res: Response) {
    const users = await UserModel.create();
    return res.json(users);
  }

  async details(req: Request, res: Response) {
    const users = await UserModel.findById(req.params.id);
    return res.json(users);
  }

  async update(req: Request, res: Response) {
    const users = await UserModel.findByIdAndUpdate(req.params.id, {
      new: true,
    });

    return res.status(201).json(users);
  }

  async delete(req: Request, res: Response) {
    const response = await UserModel.findByIdAndRemove(req.params.id);
    return res.status(200).json(response);
  }
  */
}

export default UserController;