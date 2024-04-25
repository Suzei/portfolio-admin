import { Request, Response } from 'express';
import ListUserService from '../services/ListUserService';
import CreateUserService from '../services/CreateUserService';

export default class UserController {
  public async index(request: Request, response: Response) {
    const listUser = new ListUserService();

    const users = await listUser.execute();

    return response.json(users);
  }

  public async create(request: Request, response: Response) {
    const { email, password, name, avatar } = request.body;
    const createUsers = new CreateUserService();

    const user = createUsers.execute({ email, name, password, avatar });

    return response.json(user);
  }
}
