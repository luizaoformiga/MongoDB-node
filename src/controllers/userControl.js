import UserModel from '../models/users';

export default class UserController {
    async insert(req, res) {
      const users = await UserModel.create();
      return res.json(users);
    }
    
    async index(req, res) {
      const users = await UserModel.find();
      return res.status(200).json(users);
    }
    
    async details(req, res) {
      const users = await UserModel.findById(req.params.id);
      return res.json(users);
    }

    async update(req, res) {
      const users = await UserModel.findByIdAndUpdate(req.params.id, { new: true });
      
      return res.status(201).json(users);
    }

    async delete(req, res) {
      const response = await UserModel.findByIdAndRemove(req.params.id);
      return res.status(200).json(response); 
    }
}